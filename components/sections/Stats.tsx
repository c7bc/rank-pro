const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '96%', label: 'Retention Rate' },
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'System Uptime' },
]

export const Stats = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index !== 3 ? 'md:border-r border-white/5' : ''}`}>
              <div className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-sm font-medium text-grey-500 uppercase tracking-widest">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
