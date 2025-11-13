export default function Experience() {
  const experiences = [
    {
      version: 'v10.5',
      company: 'Liftoff Software',
      role: 'Software Engineer',
      color: 'from-purple-900/30 to-pink-900/30',
      achievements: [
        'Refactored infra so hard, AWS thought I ghosted them (40% cost cut).',
        'Led the full AWS → GCP migration (Firebase Auth, Cloud Run, GKE Autopilot, Cloud SQL, MemoryStore) and somehow users just… kept using the product.',
        'Built Pixel, a tracking tool that recognises users without email and handles 2000+ req/min hitting billions of records.',
        'Designed migration scripts that moved 8.4B+ records in 24 hours with zero downtime. I now trust cron jobs more than people.',
        'Set up CI/CD + observability with GitHub Actions + Grafana + alerts, so we can break things confidently.'
      ]
    },
    {
      version: 'v9.0',
      company: 'Dhwani RIS',
      role: 'SDE 1 (Backend)',
      color: 'from-blue-900/30 to-green-900/30',
      achievements: [
        'Took a monolith, split it into microservices, and didn\'t cry (much).',
        'Built a dynamic data viz microservice for multi-tenant dashboards.',
        'Shipped RBAC so flexible you can give someone "read-only-but-also-boss" vibes.'
      ]
    },
    {
      version: 'v8.0',
      company: 'LetzzBuild Edutech',
      role: 'Founder & Lead Instructor',
      color: 'from-yellow-900/30 to-orange-900/30',
      achievements: [
        'Trained 1000+ students in Python, React, and MERN; classrooms, labs, random seminar halls—done it all.',
        'Ran 20+ workshops, average rating 4.9/5 which is higher than my sleep score.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center px-4">
        🧾 Patch Notes (Career Edition)
      </h2>
      
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.version}
            className={`card bg-gradient-to-br ${exp.color} border-purple-500/30`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-dark-text break-words">
                  {exp.version} – {exp.company}
                </h3>
                <p className="text-base md:text-lg text-gray-text font-medium">{exp.role}</p>
              </div>
              <span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-mono font-bold self-start flex-shrink-0 text-purple-300">
                {exp.version}
              </span>
            </div>
            
            <ul className="space-y-2 md:space-y-3">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 md:gap-3">
                  <span className="text-lg md:text-xl mt-0.5 md:mt-1 flex-shrink-0">✨</span>
                  <span className="text-sm md:text-base text-gray-text break-words">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

