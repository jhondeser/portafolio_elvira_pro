'use client';

import { useState } from 'react';

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      title: "Content Production",
      description: "In-person video shoots in Valencia for businesses and personal brands.",
      icon: "🎥",
      details: [
        "Location or workspace filming",
        "Shooting plan creation", 
        "On-camera coaching",
        "iPhone high-quality production",
        "Valencia-based only"
      ]
    },
    {
      title: "Content Editing", 
      description: "Professional editing for footage worldwide. Dynamic, modern editing.",
      icon: "✂️",
      details: [
        "Structure shaping (hook → message → key point)",
        "Music and audio integration",
        "Color correction & audio cleaning",
        "Subtitles and AI-enhanced workflow",
        "Worldwide service"
      ]
    },
    {
      title: "Personal Consultations",
      description: "One-to-one consulting for businesses and creators.",
      icon: "💡",
      details: [
        "60-90 minute online sessions",
        "Content strategy development", 
        "Visual style recommendations",
        "On-camera presence coaching",
        "One week post-consultation support"
      ]
    }
  ];

  const handleCardInteraction = (index: number) => {
    // En móvil: toggle, en desktop: hover
    if (window.innerWidth < 768) {
      setActiveCard(activeCard === index ? null : index);
    } else {
      setActiveCard(index);
    }
  };

  const handleCardLeave = () => {
    // Solo en desktop quita el hover
    if (window.innerWidth >= 768) {
      setActiveCard(null);
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          My Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-primary-100 cursor-pointer transition-all duration-500 min-h-[320px] md:min-h-[380px]"
              onMouseEnter={() => handleCardInteraction(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardInteraction(index)}
            >
              {/* Contenido Principal */}
              <div className={`transition-all duration-500 ${
                activeCard === index ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
              }`}>
                <div className="text-5xl mb-4 md:mb-6 text-center">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg text-center">
                  {service.description}
                </p>
                <div className="mt-4 text-primary-500 font-medium text-center text-sm md:text-base">
                  <span className="md:hidden">Tap for details ↓</span>
                  <span className="hidden md:inline">Hover for details ↑</span>
                </div>
              </div>

              {/* Detalles */}
              <div className={`transition-all duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0 absolute top-6 pointer-events-none'
              }`}>
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                  What's Included:
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-primary-500 mr-2 mt-1 flex-shrink-0">•</span>
                      <span className="text-gray-700 text-sm md:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-primary-500 font-medium text-center text-sm">
                  <span className="md:hidden">Tap to close</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}