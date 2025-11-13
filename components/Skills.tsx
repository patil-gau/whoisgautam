export default function Skills() {
  const techSkills = [
    'Python', 'Django', 'FastAPI', 'Node.js', 'Postgres', 'MongoDB', 
    'Redis', 'Kafka', 'ClickHouse', 'Docker', 'Terraform', 'AWS', 'GCP'
  ]
  
  const humanSkills = [
    'Community Building', 'Developer Advocacy', 'Content & Reels', 
    'Podcast Hosting', 'Event Design', 'Workshop Facilitation'
  ]

  return (
    <section id="skills" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center px-4">
        💾 Superpowers (unstable but effective)
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Code & Infra */}
        <div className="card bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-dark-text">
            <span>⚡</span>
            <span>Code & Infra</span>
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {techSkills.map((skill) => (
              <span
                key={skill}
                className="tag bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/30 text-sm md:text-base px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-xs md:text-sm italic text-gray-text mt-4 leading-relaxed">
            I like systems where billions of events fly around and still respond in milliseconds. 
            If it involves queues, workers, observability, or cost optimisation, I'm probably having fun.
          </p>
        </div>
        
        {/* Human Stuff */}
        <div className="card bg-gradient-to-br from-pink-900/30 to-rose-900/30 border-pink-500/30">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-dark-text">
            <span>🎭</span>
            <span>Human Stuff</span>
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {humanSkills.map((skill) => (
              <span
                key={skill}
                className="tag bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border border-pink-500/30 text-sm md:text-base px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-xs md:text-sm italic text-gray-text mt-4 leading-relaxed">
            From 0 → 40k followers for brands and my own channels, to hosting large-scale AI & startup events 
            for 500+ humans – I basically turned talking on the internet into a job.
          </p>
        </div>
      </div>
    </section>
  )
}

