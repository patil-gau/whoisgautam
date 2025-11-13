export default function Contact() {
  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      value: 'patilgautam728@gmail.com',
      href: 'mailto:patilgautam728@gmail.com',
      color: 'from-red-900/30 to-pink-900/30'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/gautam-patil',
      color: 'from-blue-900/30 to-cyan-900/30'
    },
    {
      icon: '🧑‍💻',
      label: 'GitHub',
      value: 'Check out my code',
      href: 'https://github.com/gautam-patil',
      color: 'from-purple-900/30 to-indigo-900/30'
    },
    {
      icon: '📺',
      label: 'YouTube',
      value: 'The Startup Tales',
      href: 'https://youtube.com/@thestartuptales',
      color: 'from-red-900/30 to-orange-900/30'
    }
  ]

  return (
    <section id="contact" className="py-12 md:py-20 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center px-4">
        📮 Open a ticket with Gautam
      </h2>
      
      <div className="card max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 text-center mb-6 md:mb-8">
        <p className="text-lg md:text-xl mb-3 md:mb-4 font-medium text-dark-text">
          Want help with
        </p>
        <ul className="text-base md:text-lg space-y-2 mb-4 md:mb-6 text-gray-text">
          <li>⚡ scaling backend systems,</li>
          <li>🚀 launching a dev/community program,</li>
          <li>🎪 or filling a room with founders and cameras?</li>
        </ul>
        <p className="text-base md:text-lg font-semibold text-purple-400">
          Hit me up, and I'll respond faster than your CI fails.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`card bg-gradient-to-br ${link.color} border-purple-500/30 text-center hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all`}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">{link.icon}</div>
            <div className="font-bold text-base md:text-lg mb-1 text-dark-text">{link.label}</div>
            <div className="text-xs md:text-sm text-gray-text break-words">{link.value}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

