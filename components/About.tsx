export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center px-4">
        🧠 About this human
      </h2>
      
      <div className="card max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30">
        <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-text">
          I'm <span className="font-bold text-purple-400">Gautam</span>, a software engineer and ex-founder who likes three things:
        </p>
        
        <ul className="space-y-3 text-base md:text-lg ml-0 md:ml-6 mb-4">
          <li className="flex items-start gap-2 md:gap-3">
            <span className="text-xl md:text-2xl flex-shrink-0">⚙️</span>
            <span>breaking monoliths into microservices,</span>
          </li>
          <li className="flex items-start gap-2 md:gap-3">
            <span className="text-xl md:text-2xl flex-shrink-0">🤝</span>
            <span>turning strangers into communities,</span>
          </li>
          <li className="flex items-start gap-2 md:gap-3">
            <span className="text-xl md:text-2xl flex-shrink-0">💸</span>
            <span>and giving AWS bills a heart attack.</span>
          </li>
        </ul>
        
        <p className="text-base md:text-lg leading-relaxed text-gray-text">
          I've worked on infra-heavy products (think GCP + Firebase + Cloud Run + GKE + SQL + Redis all talking nicely) 
          and on the other side I've built a startup, taught 1000+ students code, and now run a cozy chaos of founders, 
          creators, and devs.
        </p>
      </div>
    </section>
  )
}

