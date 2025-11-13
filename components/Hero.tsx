export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center animate-fade-in py-8 md:py-0">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        {/* Left side - Main content */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight break-words">
            🚀 booting gautam()…
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-text font-medium leading-relaxed">
            Backend engineer, ex-founder, community gremlin & professional chaos organiser.
          </p>
          
          <p className="text-base md:text-lg text-gray-text leading-relaxed">
            I ship code, host rooms full of founders, and somehow move billions of records without breaking production.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-dark-purple to-dark-pink text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              🎬 See my work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-dark-blue to-dark-green text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              👋 Say hi
            </button>
          </div>
        </div>
        
        {/* Right side - Debug logs */}
        <div className="card bg-black/70 text-green-400 console-text space-y-2 border-green-500/50 p-4 md:p-8">
          <div className="text-yellow-400 mb-3 md:mb-4 text-xs md:text-sm">// system boot logs</div>
          <div className="flex items-start gap-2 text-xs md:text-sm">
            <span className="text-gray-400 flex-shrink-0">[✓]</span>
            <span className="break-words">aws_costs ↓ 40% – apparently legal hacking.</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm">
            <span className="text-gray-400 flex-shrink-0">[✓]</span>
            <span className="break-words">moved 8.4B+ MongoDB docs in 24 hours (0 downtime, 100% panic).</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm">
            <span className="text-gray-400 flex-shrink-0">[✓]</span>
            <span className="break-words">hosts events where RedBull shows up and people actually talk to each other.</span>
          </div>
          <div className="flex items-start gap-2 text-accent-cyan text-xs md:text-sm">
            <span className="text-gray-400 flex-shrink-0">[→]</span>
            <span className="animate-pulse break-words">gautam.status = "ready"</span>
          </div>
        </div>
      </div>
    </section>
  )
}

