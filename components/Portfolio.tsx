'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'reels' | 'events'>('podcasts')

  const podcasts = [
    {
      id: 1,
      title: 'The Startup Tales - Episode 1',
      url: 'https://www.youtube.com/watch?v=oHkt1SXEi7o&t=4s',
      thumbnail: 'https://img.youtube.com/vi/oHkt1SXEi7o/maxresdefault.jpg',
      description: 'Founder stories and startup insights'
    },
    {
      id: 2,
      title: 'The Startup Tales - Episode 2',
      url: 'https://www.youtube.com/watch?v=W0cZnc_ugIw&t=197s',
      thumbnail: 'https://img.youtube.com/vi/W0cZnc_ugIw/maxresdefault.jpg',
      description: 'Deep dive into building communities'
    }
  ]

  const reels = [
    {
      id: 1,
      title: 'Tech Content Reel',
      url: 'https://www.instagram.com/reel/DOD0QH4E6VG/?igsh=MTVvcTFiYnYwbmMz',
      platform: 'Instagram',
      icon: '📱'
    },
    {
      id: 2,
      title: 'What are tokens?',
      url: 'https://www.youtube.com/shorts/JMXi0D8-qBE',
      platform: 'YouTube',
      icon: '▶️'
    },
    {
      id: 3,
      title: 'Community Building',
      url: 'https://www.instagram.com/reel/DPEM2IBk5wH/?igsh=MTVqa2Z0ZHV5MTdk',
      platform: 'Instagram',
      icon: '📱'
    },
    {
      id: 4,
      title: 'AI StartUp Ideas',
      url: 'https://www.instagram.com/reel/DOLzGdck177/?igsh=Y2F4c2s0bGVwZWxx',
      platform: 'Instagram',
      icon: '📱'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Knowledge Sharing Workshop',
      description: 'Sharing knowledge to other people. This batch filled only within 2 days.',
      url: 'https://www.instagram.com/p/CGP6-DGBUjF/?igsh=MWNxdDJxeTNwaGdzMA==',
      type: 'Workshop',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'LetzzBuild Learning Sessions',
      description: 'Learn by BUILDING Things, Learning by Creating things. The best place to learn by building in Belgaum.',
      url: 'https://www.instagram.com/p/CVw_f6BhWyq/?img_index=1&igsh=MTNsemwxYXZ2eTJwZw==',
      type: 'Training',
      icon: '🛠️'
    }
  ]

  return (
    <section id="portfolio" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center px-4">
        🎬 My Work & Content
      </h2>

      <p className="text-center text-gray-text mb-8 md:mb-12 max-w-3xl mx-auto px-4">
        From podcasts with founders to workshops with 100+ students, here's how I'm building communities and creating content.
      </p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
        <button
          onClick={() => setActiveTab('podcasts')}
          className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 ${
            activeTab === 'podcasts'
              ? 'bg-gradient-to-r from-dark-purple to-dark-pink text-white shadow-lg shadow-purple-500/50'
              : 'bg-dark-card border-2 border-purple-500/30 text-gray-text hover:border-purple-500/50'
          }`}
        >
          🎙️ Podcasts
        </button>
        <button
          onClick={() => setActiveTab('reels')}
          className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 ${
            activeTab === 'reels'
              ? 'bg-gradient-to-r from-dark-blue to-dark-green text-white shadow-lg shadow-cyan-500/50'
              : 'bg-dark-card border-2 border-blue-500/30 text-gray-text hover:border-blue-500/50'
          }`}
        >
          📱 Reels & Shorts
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 ${
            activeTab === 'events'
              ? 'bg-gradient-to-r from-dark-yellow to-dark-orange text-white shadow-lg shadow-yellow-500/50'
              : 'bg-dark-card border-2 border-yellow-500/30 text-gray-text hover:border-yellow-500/50'
          }`}
        >
          🎪 Events & Workshops
        </button>
      </div>

      {/* Content Area */}
      <div key={activeTab} className="max-w-7xl mx-auto px-4 min-h-[400px]">
        {/* Podcasts */}
        {activeTab === 'podcasts' && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 animate-fade-in">
            {podcasts.map((podcast) => (
              <a
                key={podcast.id}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:scale-105 transition-all group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-5xl">▶️</div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-2">
                  {podcast.title}
                </h3>
                <p className="text-sm md:text-base text-gray-text">
                  {podcast.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-semibold">
                  <span>Watch on YouTube</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Reels */}
        {activeTab === 'reels' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-gradient-to-br from-blue-900/30 to-green-900/30 border-blue-500/30 hover:scale-105 transition-all text-center group"
              >
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {reel.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-dark-text mb-2">
                  {reel.title}
                </h3>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs md:text-sm text-cyan-300 mb-3">
                  {reel.platform}
                </div>
                <p className="text-sm text-gray-text group-hover:text-cyan-400 transition-colors">
                  Watch now →
                </p>
              </a>
            ))}
          </div>
        )}

        {/* Events */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 animate-fade-in">
            {events.map((event) => (
              <a
                key={event.id}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30 hover:scale-105 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {event.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs md:text-sm text-yellow-300 mb-2">
                      {event.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-text mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                  <span>View on Instagram</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="card max-w-4xl mx-auto mt-8 md:mt-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm text-gray-text">Podcast Episodes</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1 md:mb-2">50+</div>
            <div className="text-xs md:text-sm text-gray-text">Content Pieces</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">1000+</div>
            <div className="text-xs md:text-sm text-gray-text">Students Trained</div>
          </div>
        </div>
      </div>
    </section>
  )
}

