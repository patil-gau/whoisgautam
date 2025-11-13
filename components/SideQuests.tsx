export default function SideQuests() {
  return (
    <section id="side-quests" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center px-4">
        🌈 Side Quests (aka why brands call me)
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
        {/* The Startup Tales */}
        <div className="card bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-dark-text">
            <span>🎙️</span>
            <span>The Startup Tales</span>
          </h3>
          
          <ul className="space-y-2 md:space-y-3 text-gray-text">
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">📺</span>
              <span className="text-sm md:text-base">I run The Startup Tales, a founder & startup community with YouTube + Instagram audiences and a pipeline of podcasts, reels and chaos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🎤</span>
              <span className="text-sm md:text-base">Hosted 10+ events in Bengaluru on AI, startups & pitching.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🤝</span>
              <span className="text-sm md:text-base">Connected 500+ founders & investors (and yes, DMs were exchanged).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🎬</span>
              <span className="text-sm md:text-base">Scripts & produces 25+ podcast episodes with founders & builders.</span>
            </li>
          </ul>
        </div>
        
        {/* Brand & Growth Work */}
        <div className="card bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/30">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-dark-text">
            <span>📈</span>
            <span>Brand & Growth Work</span>
          </h3>
          
          <ul className="space-y-2 md:space-y-3 text-gray-text">
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🚀</span>
              <span className="text-sm md:text-base">Helped Algorithms365 grow from 0 → 40k followers in 4 months with technical content strategy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🤝</span>
              <span className="text-sm md:text-base">Worked with brands like RedBull, IDFC, HDFC as event partners for community meetups.</span>
            </li>
          </ul>
        </div>
        
        {/* Dev & Edu Community */}
        <div className="card bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-dark-text">
            <span>👨‍💻</span>
            <span>Dev & Edu Community</span>
          </h3>
          
          <ul className="space-y-2 md:space-y-3 text-gray-text">
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">📚</span>
              <span className="text-sm md:text-base">20+ workshops on Git, GitHub, IoT, Arduino, and more for schools & colleges.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-base md:text-lg flex-shrink-0">🎯</span>
              <span className="text-sm md:text-base">Helped students ship their first projects and break their first deploys (ritual).</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card max-w-4xl mx-auto bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-pink-500/30 text-center">
        <p className="text-base md:text-lg font-semibold text-dark-text">
          <span className="text-xl md:text-2xl">💡</span> TL;DR – I don't just write hello-world blog posts. 
          I design ecosystems, funnels and events so devs + founders keep coming back.
        </p>
      </div>
    </section>
  )
}

