'use client'

import { useState, useEffect } from 'react'

export default function Tooltip() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="tooltip">
      <button 
        onClick={() => setVisible(false)}
        className="float-right text-gray-500 hover:text-gray-700 font-bold"
      >
        ×
      </button>
      <p className="text-sm">
        <span className="font-bold">💡 Fun fact:</span> Yes, I really moved 8.4B records. 
        No, I don't want to do it again.
      </p>
    </div>
  )
}

