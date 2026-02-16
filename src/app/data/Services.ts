import { ServiceType } from '../types/services';

export const servicesData: ServiceType[] = [
  {
    id: "content-production",
    title: "Content Production",
    icon: "🎥",
    description: "In-person video shoots in Valencia for businesses and personal brands.",
    details: [
      "Location or workspace filming",
      "Shooting plan creation", 
      "On-camera coaching",
      "iPhone high-quality production",
      "Valencia-based only"
    ],
    type: "content-production",
    location: "Valencia",
    price: "30€/hora",
    minHours: 2,
    features: [
      "Grabado completamente con iPhone",
      "Todo el material se entrega mediante transferencia de archivos",
      "Edición de video disponible bajo solicitud"
    ],
    editingOptions: {
      basic: {
        price: "20€",
        description: "edición básica (cortes + música + transiciones), hasta 40 segundos"
      },
      advanced: "Ediciones avanzadas — el precio depende de la complejidad"
    },
    whatWeCanRecord: [
      "Reels y Stories para blogs personales",
      "Contenido para marcas de Instagram",
      "Foto y video para profesionales de la belleza",
      "Cafeterías, restaurantes, hoteles",
      "Eventos, lifestyle y encuentros sociales"
    ],
    cta: "Hablemos de tu idea y elijamos la ubicación perfecta para tu proyecto."
  },
  {
    id: "content-editing",
    title: "Content Editing", 
    icon: "✂️",
    description: "Professional editing for footage worldwide. Dynamic, modern editing.",
    details: [
      "Structure shaping (hook → message → key point)",
      "Music and audio integration",
      "Color correction & audio cleaning",
      "Subtitles and AI-enhanced workflow",
      "Worldwide service"
    ],
    type: "content-editing",
    pricing: {
      basic: {
        price: "20€",
        description: "edición básica (cortes + música + transiciones), hasta 40 segundos"
      },
      advanced: "Ediciones avanzadas — el precio depende de la complejidad"
    }
  },
  {
    id: "personal-consultations",
    title: "Personal Consultations",
    icon: "💡",
    description: "One-to-one consulting for businesses and creators.",
    details: [
      "60-90 minute online sessions",
      "Content strategy development", 
      "Visual style recommendations",
      "On-camera presence coaching",
      "One week post-consultation support"
    ],
    type: "personal-consultations",
    sessionDetails: "60-90 minute online sessions",
    support: "One week post-consultation support"
  }
];