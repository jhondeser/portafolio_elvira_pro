export default function Services() {
  const services = [
    {
      title: "Photo Sessions",
      description: "Professional photography sessions in studio or on location. Portraits, fashion, events.",
      icon: "📸"
    },
    {
      title: "Video Production", 
      description: "Full video editing and post-production for corporate, music, and social media content.",
      icon: "🎬"
    },
    {
      title: "Creative Direction",
      description: "Artistic concepts and creative direction for unique photography projects.",
      icon: "✨"
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          My services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 text-center hover:border-primary-200"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}