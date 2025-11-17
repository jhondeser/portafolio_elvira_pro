'use client';

import Link from 'next/link';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "/images/portfolio/photo-1.jpg",
      title: "Sesión de Retratos",
      description: "Sesión personalizada en estudio con iluminación natural",
      category: "fotografia"
    },
    {
      id: 2,
      image: "/images/portfolio/video-1.jpg",
      title: "Video Corporativo",
      description: "Edición y postproducción para empresa tecnológica",
      category: "video"
    },
    {
      id: 3,
      image: "/images/portfolio/photo-2.jpg",
      title: "Fotografía de Moda",
      description: "Sesión editorial para marca de ropa local",
      category: "fotografia"
    },
    // Solo 3 proyectos para el home
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-primary-400 max-w-2xl mx-auto">
            Some of my most recent work
          </p>
        </div>

        {/* Grid con solo 3 proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Imagen */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className={`text-sm font-medium ${
                      item.category === "fotografia" ? "text-primary-300" : "text-primary-500"
                    }`}>
                      {item.category === "fotografia" ? "📸 Fotografía" : "🎬 Video"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver todos */}
        <div className="text-center">
          <Link 
            href="/proyectos"
            className="bg-primary-300 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}