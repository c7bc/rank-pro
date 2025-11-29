import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title') || 'RANK PRO'
  const description = searchParams.get('description') || 'Google Ranking & Review Management'
  const type = searchParams.get('type') || 'default'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#050505',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700 }}>
            RANK
          </span>
          <span style={{ color: '#888888', fontSize: '32px', fontWeight: 300 }}>
            PRO
          </span>
        </div>

        {/* DHYZ Badge */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '60px',
            color: '#007AFF',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          DHYZ
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 1 }}>
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: type === 'home' ? '72px' : '56px',
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: '#888888',
              fontSize: '24px',
              fontWeight: 400,
              maxWidth: '700px',
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #007AFF 0%, transparent 100%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
