export default function SecretMode() {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] animate-fade-in p-4">
      <div className="card bg-gradient-to-br from-purple-900 to-pink-900 max-w-2xl w-full text-dark-text border-2 md:border-4 border-accent-cyan shadow-2xl shadow-cyan-500/50">
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎮 SECRET DEVREL MODE UNLOCKED! 🎮
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-left text-sm md:text-lg">
            <p className="font-bold text-accent-cyan">
              🔥 The Developer Advocacy Strategy:
            </p>
            
            <ul className="space-y-2 md:space-y-3 ml-3 md:ml-6">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="flex-shrink-0">🎯</span>
                <span className="text-gray-text">Build in public → Create ecosystems where developers actually want to hang out, not just scroll through docs.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="flex-shrink-0">🎪</span>
                <span className="text-gray-text">Events as funnels → Turn meetups into communities, and communities into product advocates.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="flex-shrink-0">📱</span>
                <span className="text-gray-text">Content ≠ Marketing → Technical reels, founder stories, and real problems solved {'>'}  generic &quot;10 tips&quot; posts.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="flex-shrink-0">🤝</span>
                <span className="text-gray-text">Developer trust = Product growth → When devs see someone who codes AND hosts, they listen differently.</span>
              </li>
            </ul>
            
            <p className="text-accent-pink font-bold mt-4 md:mt-6 text-center animate-pulse">
              This message will self-destruct in 10 seconds... 💥
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

