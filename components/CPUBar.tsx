'use client'

import { useState, useEffect } from 'react'

export default function CPUBar() {
  const [percentage, setPercentage] = useState({ tech: 73, memes: 27 })

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly fluctuate the percentages slightly for fun
      const techChange = Math.floor(Math.random() * 5) - 2
      const newTech = Math.max(65, Math.min(80, percentage.tech + techChange))
      const newMemes = 100 - newTech
      
      setPercentage({ tech: newTech, memes: newMemes })
    }, 3000)

    return () => clearInterval(interval)
  }, [percentage])

  return (
    <div className="cpu-bar">
      <div className="font-bold mb-1.5 md:mb-2 text-xs md:text-sm">CPU Usage</div>
      <div className="text-[10px] md:text-xs space-y-1">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-12 md:w-20 h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            <div 
              className="h-full bg-purple-500 transition-all duration-500"
              style={{ width: `${percentage.tech}%` }}
            />
          </div>
          <span className="whitespace-nowrap">{percentage.tech}% tech</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-12 md:w-20 h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            <div 
              className="h-full bg-pink-500 transition-all duration-500"
              style={{ width: `${percentage.memes}%` }}
            />
          </div>
          <span className="whitespace-nowrap">{percentage.memes}% memes</span>
        </div>
      </div>
    </div>
  )
}

