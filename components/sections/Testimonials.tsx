import { Star } from 'lucide-react'

const reviews = [
  {
    company: "Las Vegas HVAC Pros",
    review: "The new review system captured 42 verified Google reviews in the first week. Our phone started ringing double the usual volume.",
    tags: ["Quality", "Professionalism", "Value"],
    date: "2 days ago"
  },
  {
    company: "Apex Dental Studio",
    review: "We were stuck at 3.8 stars. VegasRank cleaned up the fake spam and got us to 4.9 stars with real patient feedback. Incredible ROI.",
    tags: ["Responsiveness", "Punctuality"],
    date: "1 week ago"
  },
  {
    company: "Neon City Law",
    review: "Finally, an SEO agency that doesn't charge monthly fees. They built the system, handed us the keys, and we own the ranking.",
    tags: ["Professionalism", "Quality"],
    date: "3 weeks ago"
  }
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-electric-blue text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_10px_#007AFF]"></span>
            Verified Results
          </div>
          <h2 className="text-white font-display font-medium text-5xl md:text-7xl">
            Recent Google Growth
          </h2>
          <p className="text-grey-500 mt-4 text-lg max-w-2xl">
            See the impact of <b>Real Google Business Profile Reviews</b>. These are verified results from our local partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div key={index} className="p-8 bg-surface border border-white/5 rounded-xl hover:border-electric-blue/30 transition-all duration-300">
              {/* Google Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.61z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{item.company}</h4>
                  <div className="text-grey-500 text-xs">Google Business Profile</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="fill-[#F4B400] text-[#F4B400]" />
                ))}
                <span className="text-grey-500 text-xs ml-2 mt-0.5">{item.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-grey-300 text-sm leading-relaxed mb-4">
                &quot;{item.review}&quot;
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded border border-white/10 text-[10px] text-grey-500 uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
