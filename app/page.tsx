'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import SideQuests from '@/components/SideQuests'
import Portfolio from '@/components/Portfolio'
import Cred from '@/components/Cred'
import Contact from '@/components/Contact'
import CPUBar from '@/components/CPUBar'
import Tooltip from '@/components/Tooltip'
import SecretMode from '@/components/SecretMode'

export default function Home() {
  const [secretMode, setSecretMode] = useState(false)
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key].slice(-10)
      setKonamiCode(newCode)
      
      if (JSON.stringify(newCode) === JSON.stringify(konamiSequence)) {
        setSecretMode(true)
        setTimeout(() => setSecretMode(false), 10000) // Hide after 10 seconds
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiCode])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <CPUBar />
      <Tooltip />
      {secretMode && <SecretMode />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SideQuests />
        <Portfolio />
        <Cred />
        <Contact />
      </div>
      
      <footer className="text-center py-6 md:py-8 text-xs md:text-sm opacity-60 px-4 text-gray-text">
        <p>© 2025 Gautam v10.5 • Built with chaos & coffee ☕</p>
      </footer>
    </main>
  )
}

