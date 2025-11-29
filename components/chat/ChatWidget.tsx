'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import type { ChatMessage } from '@/types'

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Welcome to RANK PRO by DHYZ. I am your engineering assistant. How can we help architect your search infrastructure?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          })),
        }),
      })

      const data = await response.json()
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: data.response || "System processing error.",
        sender: 'bot',
        timestamp: new Date()
      }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Connection error. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full border border-white/10 shadow-2xl transition-all duration-300 ${isOpen ? 'bg-white text-black' : 'bg-surface text-white hover:border-white/30'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <div className={`fixed bottom-24 right-6 z-50 w-[350px] bg-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 flex flex-col h-[500px] ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-surface p-4 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 bg-electric-blue/20 rounded flex items-center justify-center border border-electric-blue/30">
            <Bot size={16} className="text-electric-blue" />
          </div>
          <div>
            <span className="block text-sm font-bold text-white">RANK PRO Assistant</span>
            <span className="block text-[10px] text-grey-500 uppercase tracking-wider">Powered by DHYZ</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${msg.sender === 'user' ? 'bg-white text-black' : 'bg-surface border border-white/10 text-grey-300'}`}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-grey-500 text-xs pl-4 font-mono">
              <Loader2 size={12} className="animate-spin" />
              System thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-surface border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your query..."
              className="w-full bg-black border border-white/10 rounded-lg pl-4 pr-10 py-3 text-white text-sm focus:outline-none focus:border-white/30 font-light"
            />
            <button onClick={() => handleSend()} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-grey-500 hover:text-white">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
