'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Services() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const services = [
    {
      id: "content-production",
      title: "Content Production",
      description: "In-person video shoots in Valencia for businesses and personal brands.",
      icon: "🎥",
      details: [
        "Location or workspace filming",
        "Shooting plan creation", 
        "On-camera coaching",
        "iPhone high-quality production",
        "Valencia-based only"
      ],
      price: "30€/hora",
      minHours: 2,
      features: [
        "Grabado completamente con iPhone",
        "Todo el material se entrega mediante transferencia de archivos",
        "Edición de video disponible bajo solicitud"
      ]
    },
    {
      id: "content-editing",
      title: "Content Editing", 
      description: "Professional editing for footage worldwide. Dynamic, modern editing.",
      icon: "✂️",
      details: [
        "Structure shaping (hook → message → key point)",
        "Music and audio integration",
        "Color correction & audio cleaning",
        "Subtitles and AI-enhanced workflow",
        "Worldwide service"
      ],
      basicPrice: "15€",
      basicDescription: "edición básica (cortes + música + transiciones), hasta 40 segundos",
      advancedDescription: "Ediciones avanzadas — el precio depende de la complejidad"
    },
    {
      id: "personal-consultations",
      title: "Personal Consultations",
      description: "One-to-one consulting for businesses and creators.",
      icon: "💡",
      details: [
        "60-90 minute online sessions",
        "Content strategy development", 
        "Visual style recommendations",
        "On-camera presence coaching",
        "One week post-consultation support"
      ],
      sessionType: "60-90 minute online sessions",
      support: "One week post-consultation support"
    }
  ];

  const handleCardFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleCardHover = (index: number) => {
    if (window.innerWidth >= 768) {
      if (!flippedCards.includes(index)) {
        setFlippedCards([...flippedCards, index]);
      }
    }
  };

  const handleCardLeave = (index: number) => {
    if (window.innerWidth >= 768) {
      if (flippedCards.includes(index)) {
        setFlippedCards(flippedCards.filter(i => i !== index));
      }
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
              className="relative cursor-pointer"
              onClick={() => handleCardFlip(index)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              {/* Contenedor de la tarjeta con efecto flip */}
              <div className={`relative w-full h-[420px] transition-all duration-700 preserve-3d ${
                flippedCards.includes(index) ? 'rotate-y-180' : ''
              }`}>
                
                {/* Frente de la tarjeta */}
                <div className={`absolute inset-0 backface-hidden bg-white rounded-2xl p-6 shadow-lg border border-primary-100 transition-all duration-700 ${
                  flippedCards.includes(index) ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg text-center mb-6">
                      {service.description}
                    </p>
                    <div className="mt-6 text-primary-500 font-medium text-center">
                      <span className="md:hidden">Tap to flip ↓</span>
                      <span className="hidden md:inline">Hover to flip ↑</span>
                    </div>
                  </div>
                </div>

                {/* Reverso de la tarjeta */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-6 shadow-lg transition-all duration-700 ${
                  flippedCards.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex flex-col h-full">
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h4 className="text-lg md:text-xl font-bold mb-4 text-center">
                      What's Included:
                    </h4>
                    <ul className="space-y-2 flex-1 mb-4">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-white mr-2 mt-1 flex-shrink-0">•</span>
                          <span className="text-white/90 text-sm md:text-base">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Botón Más Información */}
                    <Link 
                      href={`/services/${service.id}`}
                      className="w-full bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300 mt-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Más Información
                    </Link>
                    
                    <div className="mt-2 text-white/80 font-medium text-center text-sm">
                      <span className="md:hidden">Tap to close</span>
                      <span className="hidden md:inline">Hover to close</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}