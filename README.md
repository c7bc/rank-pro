# RANK PRO

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Enterprise-Grade Local SEO Infrastructure Platform**

[Live Demo](https://rankpro.dhyz.company) · [Report Bug](https://github.com/dhyz-management/rank-pro/issues) · [Request Feature](https://github.com/dhyz-management/rank-pro/issues)

</div>

---

## Overview

RANK PRO is a premium local SEO and reputation management platform built by **DHYZ Management**. This Next.js 16 application showcases enterprise-grade SEO infrastructure services, featuring dynamic OG image generation, AI-powered chat assistance, and a comprehensive marketing website.

<div align="center">

| Feature | Description |
|---------|-------------|
| **Dynamic OG Images** | Auto-generated Open Graph images via Vercel's `@vercel/og` |
| **AI Chat Widget** | Google Gemini-powered sales assistant with rate limiting |
| **SEO Optimized** | JSON-LD structured data, sitemap, robots.txt |
| **Authentication Ready** | NextAuth v5 integration for client portal |
| **Edge Runtime** | Optimized API routes running on the edge |

</div>

---

## Tech Stack

### Core Framework
- **[Next.js 16.0.5](https://nextjs.org/)** - React framework with App Router & Turbopack
- **[React 19](https://react.dev/)** - UI library with Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Lucide Icons](https://lucide.dev/)** - Beautiful open-source icons

### Backend & APIs
- **[NextAuth v5](https://authjs.dev/)** - Authentication for Next.js
- **[Google Gemini AI](https://ai.google.dev/)** - Conversational AI for chat widget
- **[@vercel/og](https://vercel.com/docs/og-image-generation)** - Dynamic OG image generation

### SEO & Analytics
- **JSON-LD** - Structured data for rich search results
- **Dynamic Sitemap** - Auto-generated sitemap.xml
- **Dynamic Robots** - SEO-friendly robots.txt

---

## Project Structure

```
rank-pro/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes (grouped)
│   │   └── client-access/        # Client portal
│   │       ├── page.tsx          # Login page
│   │       └── dashboard/        # Protected dashboard
│   │
│   ├── (marketing)/              # Public marketing pages (grouped)
│   │   ├── page.tsx              # Homepage
│   │   ├── reviews/              # Buy reviews page
│   │   ├── platform/             # Platform features
│   │   ├── methodology/          # Our process
│   │   ├── enterprise/           # Enterprise solutions
│   │   ├── success-stories/      # Case studies
│   │   ├── architecture/         # Technical architecture
│   │   ├── infrastructure/       # Infrastructure details
│   │   ├── integration/          # API integrations
│   │   ├── initialize-project/   # Getting started
│   │   ├── contact/              # Contact page
│   │   └── legal/                # Legal documents
│   │       ├── terms/            # Terms of Service
│   │       └── privacy/          # Privacy Policy
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/                 # NextAuth endpoints
│   │   ├── chat/                 # Gemini AI chat endpoint
│   │   └── og/                   # Dynamic OG image generation
│   │
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles & Tailwind config
│   ├── sitemap.ts                # Dynamic sitemap generator
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── icon.svg                  # Favicon
│   └── apple-icon.svg            # Apple touch icon
│
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Navigation with DHYZ ecosystem bar
│   │   └── Footer.tsx            # Site footer
│   │
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx              # Homepage hero
│   │   ├── Stats.tsx             # Statistics display
│   │   ├── Services.tsx          # Services grid
│   │   ├── Pricing.tsx           # Pricing tables
│   │   ├── ReviewPricing.tsx     # Review packages pricing
│   │   ├── Testimonials.tsx      # Customer testimonials
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── Contact.tsx           # Contact form
│   │   ├── HowItWorks.tsx        # Process steps
│   │   └── ProblemSolution.tsx   # Problem/solution section
│   │
│   ├── chat/                     # Chat components
│   │   └── ChatWidget.tsx        # AI-powered chat widget
│   │
│   └── seo/                      # SEO components
│       └── JsonLd.tsx            # Structured data components
│
├── lib/                          # Utilities
│   └── data.ts                   # Shared data (FAQs, etc.)
│
├── types/                        # TypeScript definitions
│   └── index.ts                  # Type exports
│
├── auth.ts                       # NextAuth configuration
├── middleware.ts                 # Route protection middleware
│
├── .env.example                  # Environment variables template
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.mjs            # PostCSS configuration
├── next.config.ts                # Next.js configuration
└── package.json                  # Dependencies
```

---

## Getting Started

### Prerequisites

- **Node.js 18.17+** (LTS recommended)
- **npm**, **yarn**, or **pnpm**
- **Gemini API Key** (optional, for chat functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhyz-management/rank-pro.git
   cd rank-pro
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: `--legacy-peer-deps` is required due to NextAuth v5 beta peer dependency constraints.

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment**
   ```env
   # Gemini AI API Key (get yours at https://aistudio.google.com/apikey)
   GEMINI_API_KEY=your_api_key_here

   # NextAuth Configuration (generate with: openssl rand -base64 32)
   AUTH_SECRET=your_random_secret_here
   AUTH_URL=http://localhost:3000

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://rankpro.dhyz.company
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | No* | Google Gemini API key for chat functionality |
| `AUTH_SECRET` | No* | Secret key for NextAuth session encryption |
| `AUTH_URL` | No* | Base URL for NextAuth callbacks |
| `NEXT_PUBLIC_SITE_URL` | No | Public site URL for SEO metadata |

> *Required only if using the respective features (chat widget, client authentication)

---

## API Documentation

### POST `/api/chat`

AI-powered chat endpoint using Google Gemini.

**Request Body:**
```json
{
  "message": "What services do you offer?",
  "history": [
    {
      "role": "user",
      "parts": [{ "text": "Hello" }]
    },
    {
      "role": "model",
      "parts": [{ "text": "Welcome to RANK PRO..." }]
    }
  ]
}
```

**Response:**
```json
{
  "response": "RANK PRO offers three core services..."
}
```

**Rate Limiting:**
- 10 requests per minute per IP
- Maximum message length: 500 characters
- Maximum history: 20 messages

**Headers:**
- `X-RateLimit-Remaining`: Remaining requests in current window

---

### GET `/api/og`

Dynamic Open Graph image generation.

**Query Parameters:**
| Parameter | Default | Description |
|-----------|---------|-------------|
| `title` | "RANK PRO" | Main heading text |
| `description` | "Local Search Engineering" | Subtitle text |
| `type` | "default" | Image variant (`home` for larger title) |

**Example:**
```
/api/og?title=Success%20Stories&description=Real%20results%20from%20real%20businesses&type=page
```

**Returns:** 1200x630 PNG image with:
- Black background (#050505)
- Grid pattern overlay
- Blue glow effect (#007AFF)
- RANK PRO branding
- DHYZ badge
- Gradient accent line

---

## Features Deep Dive

### Dynamic OG Images

Every page has a unique Open Graph image generated on-demand:

```tsx
// In page metadata
openGraph: {
  images: ['/api/og?title=Your%20Title&description=Your%20description'],
}
```

The images are generated at the edge using `@vercel/og` with your brand identity:
- Electric Blue accent (#007AFF)
- Black background (#050505)
- Satoshi font family
- Consistent grid pattern

### AI Chat Widget

The chat widget provides instant assistance to visitors:

- **Powered by Gemini 2.0 Flash** - Fast, accurate responses
- **Context-aware** - Maintains conversation history
- **Rate-limited** - Protection against abuse
- **Branded responses** - Trained on RANK PRO services and pricing
- **Graceful degradation** - Friendly messages when API is unavailable

### SEO Infrastructure

Comprehensive SEO setup out of the box:

```tsx
// Automatic JSON-LD structured data
<OrganizationJsonLd />
<LocalBusinessJsonLd />
<ServiceJsonLd services={[...]} />
<FAQJsonLd faqs={[...]} />
<BreadcrumbJsonLd items={[...]} />
```

- **Dynamic sitemap** - Auto-updates with all routes
- **Robots.txt** - Properly configured for crawlers
- **Meta tags** - Title templates, descriptions, keywords
- **Open Graph** - Rich social media previews
- **Twitter Cards** - Optimized for Twitter sharing

### Authentication System

NextAuth v5 integration ready for client portal:

- **Credentials provider** - Email/password authentication
- **Protected routes** - Middleware-based route protection
- **Session management** - Secure JWT sessions
- **Extensible** - Easy to add OAuth providers

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#050505` | Primary background |
| Surface | `#0F0F0F` | Card backgrounds |
| Electric Blue | `#007AFF` | Primary accent |
| Grey 100 | `#F3F3F3` | Light text |
| Grey 300 | `#CCCCCC` | Secondary text |
| Grey 500 | `#888888` | Muted text |
| Grey 700 | `#444444` | Subtle elements |

### Typography

- **Display Font**: Satoshi (700, 500)
- **Body Font**: Satoshi (400, 300)
- **Mono Font**: System monospace stack

### Components

All components follow a consistent design language:
- Rounded corners (`rounded-xl`, `rounded-2xl`)
- Subtle borders (`border-white/5`, `border-white/10`)
- Hover states with border color transitions
- Glass-morphism effects where appropriate

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dhyz-management/rank-pro)

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- **AWS Amplify**
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

Ensure your platform supports:
- Node.js 18.17+
- Edge Runtime (for OG images)
- Environment variables

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **[DHYZ Management](https://dhyz.framer.website/)** - Parent company
- **[Vercel](https://vercel.com)** - Hosting and OG image generation
- **[Google AI](https://ai.google.dev/)** - Gemini AI for chat functionality
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework

---

<div align="center">

**Built with precision by [DHYZ Management](https://dhyz.framer.website/)**

<sub>Engineering digital dominance for the modern enterprise.</sub>

</div>
