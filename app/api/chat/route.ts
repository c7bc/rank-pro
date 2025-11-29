import { GoogleGenAI } from '@google/genai'
import { NextRequest, NextResponse } from 'next/server'

const systemInstruction = `
  You are the technical sales AI for 'RANK PRO', a premium product of DHYZ Management.
  Tone: Institutional, Precise, High-Level, Results-Focused.

  Product: RANK PRO is an Enterprise Local SEO & Reputation Management service.
  USP: We set up the system once. You own it. No monthly retainers. Real, verified Google Reviews.

  Pricing (One-Time Setup Fee):
  1. Review System Core ($997) - Automated reputation machine for Google Business
  2. Local SEO Core ($1,997) - Pure ranking optimization
  3. Complete Ecosystem Bundle ($2,497) - Complete Google Domination Stack

  Review Volume Packages:
  - Starter Pack: 50 reviews @ $750
  - Growth Pack: 100 reviews @ $1,400
  - Dominance: 500 reviews @ $6,000
  - Enterprise: 1000 reviews @ $10,000

  Parent Company: DHYZ Management.
  Website: rankpro.dhyz.company
  Contact: partner@dhyz.company

  Be helpful, professional, and guide users toward booking a consultation.
  Keep responses concise (max 2-3 paragraphs).
`

// Rate limiting: IP -> { count, resetTime }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT = {
  MAX_REQUESTS: 10,        // max requests per window
  WINDOW_MS: 60 * 1000,    // 1 minute window
  MAX_MESSAGE_LENGTH: 500, // max characters per message
  MAX_HISTORY_LENGTH: 20,  // max messages in history
}

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  return ip
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (v.resetTime < now) rateLimitMap.delete(k)
    }
  }

  if (!record || record.resetTime < now) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT.MAX_REQUESTS - 1 }
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT.MAX_REQUESTS - record.count }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    const { allowed, remaining } = checkRateLimit(rateLimitKey)

    if (!allowed) {
      return NextResponse.json(
        { response: 'Too many requests. Please wait a moment before sending another message.' },
        {
          status: 429,
          headers: { 'X-RateLimit-Remaining': '0' }
        }
      )
    }

    const body = await request.json()
    const { message, history } = body

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { response: 'Invalid message format.' },
        { status: 400 }
      )
    }

    // Check message length
    if (message.length > RATE_LIMIT.MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { response: `Message too long. Please keep it under ${RATE_LIMIT.MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      )
    }

    // Validate and limit history
    const sanitizedHistory = Array.isArray(history)
      ? history.slice(-RATE_LIMIT.MAX_HISTORY_LENGTH).map((msg: { role: string; parts: { text: string }[] }) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: String(msg.parts?.[0]?.text || '').slice(0, RATE_LIMIT.MAX_MESSAGE_LENGTH) }],
        }))
      : []

    // Check API key
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      return NextResponse.json(
        { response: 'Chat service not configured. Please contact partner@dhyz.company for assistance.' },
        { status: 200, headers: { 'X-RateLimit-Remaining': String(remaining) } }
      )
    }

    const ai = new GoogleGenAI({ apiKey })

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        ...sanitizedHistory,
        { role: 'user', parts: [{ text: message }] },
      ],
      config: {
        systemInstruction,
        temperature: 0.5,
        maxOutputTokens: 500, // Limit response size
      },
    })

    const text = response.text || 'I apologize, I could not generate a response. Please try again.'

    return NextResponse.json(
      { response: text },
      { status: 200, headers: { 'X-RateLimit-Remaining': String(remaining) } }
    )
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { response: 'I apologize, there was an error processing your request. Please try again or contact partner@dhyz.company.' },
      { status: 200 }
    )
  }
}
