export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ServiceItem {
  title: string
  description: string
  icon?: React.ElementType
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  isHighlighted?: boolean
  description?: string
  amount?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  stars: number
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export interface Review {
  company: string
  review: string
  tags: string[]
  date: string
}

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}
