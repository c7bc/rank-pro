'use client'

import { ArrowRight } from 'lucide-react'

interface CircularTextButtonProps {
  text?: string
  onClick?: () => void
  className?: string
}

export const CircularTextButton = ({
  text = "Proven • Precision • ",
  onClick,
  className = ""
}: CircularTextButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative group cursor-pointer w-32 h-32 flex items-center justify-center ${className}`}
    >
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>

      {/* Rotating Text */}
      <div className="absolute inset-0 animate-spin-slow w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          <path
            id="textPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[10px] font-medium uppercase fill-grey-500 tracking-widest">
            <textPath href="#textPath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Arrow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <ArrowRight className="w-5 h-5 text-white group-hover:text-black transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" strokeWidth={2} />
        </div>
      </div>
    </button>
  )
}
