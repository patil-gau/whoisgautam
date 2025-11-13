export default function Cred() {
  return (
    <section id="cred" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center px-4">
        🏅 Tiny but Real Flex
      </h2>
      
      <div className="card max-w-3xl mx-auto bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30">
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl">🏆</div>
            <p className="font-bold text-base md:text-lg text-yellow-300">National Winner</p>
            <p className="text-xs md:text-sm text-gray-text break-words">MIT Mysore for Automatic Mask Detection & Sanitisation System</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl">💻</div>
            <p className="font-bold text-base md:text-lg text-cyan-300">5+ Hackathons Won</p>
            <p className="text-xs md:text-sm text-gray-text">Inter-college competitions</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl">🎓</div>
            <p className="font-bold text-base md:text-lg text-green-300">8.5 CGPA</p>
            <p className="text-xs md:text-sm text-gray-text">B.E. in Computer Science (because apparently sleep is optional)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

