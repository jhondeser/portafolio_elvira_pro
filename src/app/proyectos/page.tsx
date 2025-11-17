'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const portfolioItems = [
    {
      id: 1,
      image: "/images/portfolio/photo-1.jpg",
      title: "Portrait Session",
      description: "Custom studio session with natural lighting",
      category: "session"
    },
    {
      id: 2,
      image: "/images/portfolio/video-1.jpg",
      title: "Corporate Video",
      description: "Editing and post-production for tech company",
      category: "video"
    },
    {
      id: 3,
      image: "/images/portfolio/photo-2.jpg",
      title: "Fashion Session",
      description: "Editorial session for local clothing brand",
      category: "session"
    },
    {
      id: 4,
      image: "/images/portfolio/video-2.jpg",
      title: "Promotional Reel",
      description: "Promotional video for social media influencer",
      category: "video"
    },
    {
      id: 5,
      image: "/images/portfolio/photo-3.jpg",
      title: "Outdoor Session",
      description: "Natural location session at sunset",
      category: "session"
    },
    {
      id: 6,
      image: "/images/portfolio/video-3.jpg",
      title: "Short Documentary",
      description: "Documentary editing about urban artists",
      category: "video"
    },
    {
      id: 7,
      image: "/images/portfolio/photo-4.jpg",
      title: "Product Session",
      description: "Session for beauty products catalog",
      category: "session"
    },
    {
      id: 8,
      image: "/images/portfolio/video-4.jpg",
      title: "Music Video",
      description: "Editing and color grading for independent artist",
      category: "video"
    },
    {
      id: 9,
      image: "/images/portfolio/photo-5.jpg",
      title: "Wedding Session",
      description: "Ceremony and reception session",
      category: "session"
    },
    {
      id: 10,
      image: "/images/portfolio/video-5.jpg",
      title: "Motion Graphics",
      description: "Animations for brand presentation",
      category: "video"
    }
  ];

  const filters = [
    { id: 'todos', name: 'All', count: portfolioItems.length },
    { id: 'fotografia', name: 'Photography', count: portfolioItems.filter(item => item.category === 'fotografia').length },
    { id: 'video', name: 'Video Editing', count: portfolioItems.filter(item => item.category === 'video').length }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            My portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments, crafting stories through photography and video editing.
          </p>
        </div>

        {/* Filtros - Colores actualizados */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-primary-400 text-white shadow-lg hover:bg-primary-400'
                  : 'bg-primary-50 text-primary-300 hover:bg-primary-100 border border-primary-200'
              }`}
            >
              <span>{filter.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-200 text-primary-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid estilo Pinterest */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="break-inside-avoid group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay de categoría - Colores actualizados */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                      item.category === "session" 
                        ? "bg-primary-400/90 text-white" 
                        : "bg-primary-400/90 text-white"
                    }`}>
                      {item.category === "session" ? "Session" : "Edición de Video"}
                    </span>
                  </div>
                </div>

                {/* Contenido textual - Colores actualizados */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className={`text-sm font-medium ${
                      item.category === "session" ? "text-primary-400" : "text-primary-400"
                    }`}>
                      {item.category === "session" ? "📸 Session" : "🎬 Video"}
                    </span>
                    <button className="text-gray-600 hover:text-primary-400 font-medium text-sm transition-colors flex items-center gap-1 group-hover:gap-2">
                      Ver más
                      <span className="transition-all duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay resultados */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}

        {/* Call to Action - Colores actualizados */}
        <div className="text-center mt-12">
          <button className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Ver Todos los Proyectos
          </button>
        </div>
      </div>
    </section>
  );
}