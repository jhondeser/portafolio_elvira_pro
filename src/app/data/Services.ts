import { ServiceType } from '../types/services';

export const servicesData: ServiceType[] = [
  {
      "id": "content-production",
      "title": "Content Production",
      "icon": "🎥",
      "description": "In-person video shoots in Valencia for businesses and personal brands.",
      "details": [
        "Location or workspace filming",
        "Shooting plan creation",
        "On-camera coaching",
        "iPhone high-quality production",
        "Valencia-based only"
      ],
      "type": "content-production",
      "location": "Valencia",
      "price": "30€/hour",
      "minHours": 2,
      "features": [
        "Completely recorded with iPhone",
        "All footage delivered via file transfer",
        "Video editing available upon request"
      ],
      "editingOptions": {
        "basic": {
          "price": "20€",
          "description": "basic editing (cuts + music + transitions), up to 40 seconds"
        },
        "advanced": "Advanced editing — price depends on complexity"
      },
      "whatWeCanRecord": [
        "Reels and Stories for personal blogs",
        "Content for Instagram brands",
        "Photo and video for beauty professionals",
        "Coffee shops, restaurants, hotels",
        "Events, lifestyle, and social gatherings"
      ],
      "cta": "Let's talk about your idea and choose the perfect location for your project."
    },
    {
      "id": "content-editing",
      "title": "Content Editing",
      "icon": "✂️",
      "description": "Professional editing for footage worldwide. Dynamic, modern editing.",
      "details": [
        "Structure shaping (hook → message → key point)",
        "Music and audio integration",
        "Color correction & audio cleaning",
        "Subtitles and AI-enhanced workflow",
        "Worldwide service"
      ],
      "type": "content-editing",
      "pricing": {
        "basic": {
          "price": "20€",
          "description": "basic editing (cuts + music + transitions), up to 40 seconds"
        },
        "advanced": "Advanced editing — price depends on complexity"
      }
    },
    {
      "id": "personal-consultations",
      "title": "Personal Consultations",
      "icon": "💡",
      "description": "One-to-one consulting for businesses and creators.",
      "details": [
        "60-90 minute online sessions",
        "Content strategy development",
        "Visual style recommendations",
        "On-camera presence coaching",
        "One week post-consultation support"
      ],
      "type": "personal-consultations",
      "sessionDetails": "60-90 minute online sessions",
      "support": "One week post-consultation support"
    }
];