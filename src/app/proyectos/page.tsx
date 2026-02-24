'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 10,
      title: "Expert Beauty Content",
      description: "Studio filming and editing of expert talking-head Reels for a cosmetologist, including dynamic short-form videos.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848959/IMG_8863_b3gz93.mov`,
      thumbnail: "/images/cover_1.JPEG",
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 1,
      title: "Event Highlights",
      description: "Filming and editing event content for a large festival in Spain. Atmosphere, emotions, and key moments captured on video.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848265/IMG_4836_frrgi5.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848265/IMG_4836_frrgi5.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 2,
      title: "Behind the Scenes",
      description: "Backstage filming and editing for a large podcast. Short-form content created for audience warm-up, stories, and social media while the main episode is in production.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848280/IMG_4837_f6zl5n.mov`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848280/IMG_4837_f6zl5n.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 3,
      title: "Photoshoot BTS",
      description: "Behind-the-scenes filming of a photoshoot, creating short-form content for Reels and Stories during the shooting process.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848277/IMG_4820_y1t61f.mov`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848277/IMG_4820_y1t61f.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 4,
      title: "Fashion Content",
      description: "A 4-hour photoshoot and video session creating lifestyle content for a clothing brand, designed for a full month of social media.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848263/IMG_7482_jjrigl.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848263/IMG_7482_jjrigl.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 5,
      title: "Beauty Content",
      description: "Filming and editing content for a cosmetologist, working with a model and creating videos for use in Reels and Stories.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848240/IMG_3017_oswqg3.mov`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848240/IMG_3017_oswqg3.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 6,
      title: "Construction Content",
      description: "Content creation for a renovation company, including filming properties before, during, and after renovation to maintain audience engagement on social media.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848241/IMG_7269_v5gngy.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848241/IMG_7269_v5gngy.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 7,
      title: "Real Estate Content",
      description: "Filming and editing aesthetic property videos in collaboration with a real estate agency, including on-camera presentation by the agent for sales-focused Reels.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848229/IMG_1505_uuc3j9.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848229/IMG_1505_uuc3j9.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 8,
      title: "Kitchen Brand Content",
      description: "Lifestyle content creation from scratch for a kitchen company, including filming and editing for social media.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770850261/IMG_8277_w38x0c.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770850261/IMG_8277_w38x0c.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 9,
      title: "Real Estate Content",
      description: "Filming and editing aesthetic property videos in collaboration with a real estate agency, including on-camera presentation by the agent for sales-focused Reels.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770850405/IMG_8806_qr05s2.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770850405/IMG_8806_qr05s2.jpg`,
      category: ["session", "editing"],
      categoryText: "📸 Session + 🎬 Editing"
    },
  ];

  const filters = [
    { id: 'todos', name: 'All Projects', count: portfolioItems.length },
    { id: 'session', name: 'Session', count: portfolioItems.filter(item => 
      Array.isArray(item.category) && item.category.includes('session')
    ).length },
    { id: 'editing', name: 'Video Editing', count: portfolioItems.filter(item => 
      Array.isArray(item.category) && item.category.includes('editing')
    ).length }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        Array.isArray(item.category) && item.category.includes(activeFilter)
      );
  
       // Función para obtener el badge de categoría principal
  const getMainCategory = (categories: string[]) => {
    if (categories.includes('session') && categories.includes('editing')) {
      return 'session-editing';
    }
    return categories[0] || 'session';
  };

  // Función para obtener el color según categoría
  const getCategoryColor = (categories: string[]) => {
    if (categories.includes('session') && categories.includes('editing')) {
      return 'bg-gradient-to-r from-primary-400 to-secondary-500';
    }
    return categories.includes('session') 
      ? 'bg-primary-400/90' 
      : 'bg-secondary-500/90';
  };

  // Función para obtener el texto de categoría
  const getCategoryText = (categories: string[]) => {
    if (categories.includes('session') && categories.includes('editing')) {
      return '📸 Session + 🎬 Editing';
    }
    return categories.includes('session') ? '📸 Session' : '🎬 Editing';
  };

  // Función para obtener el color del texto de categoría
  const getCategoryTextColor = (categories: string[]) => {
    if (categories.includes('session') && categories.includes('editing')) {
      return 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500';
    }
    return categories.includes('session') ? 'text-primary-400' : 'text-secondary-500';
  };
  // Pausar video actual cuando se reproduce otro
  const handleVideoClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    // Mostrar clase activa para este video
    setClickedVideo(id);
    
    // Quitar después de 1 segundo
    setTimeout(() => {
      setClickedVideo(null);
    }, 1000);
    
    // Si ya está reproduciendo este video, pausarlo
    if (playingVideo === id) {
      pauseVideo(id);
      setPlayingVideo(null);
    } else {
      // Pausar el video que está reproduciéndose (si hay alguno)
      if (playingVideo !== null) {
        pauseVideo(playingVideo);
      }
      
      // Reproducir el nuevo video
      setPlayingVideo(id);
      playVideo(id);
    }
  };

  const playVideo = (id: number) => {
    setTimeout(() => {
      const videoElement = videoRefs.current[id];
      if (videoElement) {
        videoElement.play().catch(e => {
          console.log("Error al reproducir video:", e);
          setPlayingVideo(null);
        });
      }
    }, 50);
  };

  const pauseVideo = (id: number) => {
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      videoElement.pause();
      // No reiniciamos el tiempo para que mantenga su posición
    }
  };

  const handleVideoEnded = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    }
  };



  // Pausar todos los videos cuando cambia el filtro
  useEffect(() => {
    if (playingVideo !== null) {
      pauseVideo(playingVideo);
      setPlayingVideo(null);
    }
  }, [activeFilter]);

  return (
    <div>
      <Navbar />
        <section id="portfolio" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
                My Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Capturing moments, crafting stories through Session and video editing.
              </p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? filter.id === 'todos'
                        ? 'bg-primary-400 text-white shadow-lg hover:bg-primary-500'
                        : filter.id === 'session'
                        ? 'bg-primary-400 text-white shadow-lg hover:bg-primary-500'
                        : 'bg-secondary-500 text-white shadow-lg hover:bg-secondary-600'
                      : 'bg-primary-50 text-primary-300 hover:bg-primary-100 border border-primary-200'
                  }`}
                >
                  <span>{filter.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full min-w-8 flex items-center justify-center ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id}
                  className="break-inside-avoid group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white h-[800px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Contenedor del video */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                        <video 
                          src={item.video} 
                          poster={item.thumbnail}                       
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          playsInline
                          preload="metadata"
                          onClick={(e) => handleVideoClick(item.id, e)}
                          ref={(el) => {
                            videoRefs.current[item.id] = el;
                          }}
                          onEnded={() => handleVideoEnded(item.id)}
                          controls={false}
                          autoPlay={false}
                          muted={playingVideo !== item.id}
                          loop={false}     
                        >
                          Tu navegador no soporta el elemento de video.
                        </video>
                        
                        {/* Overlay oscuro para mejor visibilidad del botón */}
                        <div 
                          className={`absolute inset-0 transition-opacity duration-300 ${
                            playingVideo === item.id ? 'bg-black/0' : 'bg-black/5'
                          }`}
                        ></div>
                        
                        {/* Botón de play/pause */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          onClick={(e) => handleVideoClick(item.id, e)}
                        >
                          <div className={          
                            `backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform ${
                              clickedVideo === item.id
                                ? 'opacity-100 scale-110' 
                                : playingVideo === item.id 
                                  ? 'bg-black/0 hover:bg-black/60 scale-100 opacity-0' 
                                  : 'bg-primary-400/90 hover:bg-primary-500 group-hover:scale-110 opacity-0 group-hover:opacity-100'
                            }`
                          }>
                            <svg 
                              className="w-10 h-10 text-white" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              {clickedVideo === item.id ? (
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                              ) : playingVideo === item.id ? ( 
                                <></>
                              ) : (
                                <path d="M8 5v14l11-7z"/>
                              )}
                            </svg>
                          </div>
                        </div>
                        
                        {/* Indicador de reproducción */}
                        {playingVideo === item.id && (
                          <div className="absolute top-4 left-4">
                            <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-white font-medium">Reproduciendo</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Overlay de categorías - Ahora muestra múltiples categorías */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${getCategoryColor(item.category)} text-white`}>
                          {getCategoryText(item.category)}
                        </span>
                      </div>
                    </div>

                    {/* Contenido textual */}
                    <div className="p-6 h-[30%]">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getCategoryTextColor(item.category)}`}>
                            {getCategoryText(item.category)}
                          </span>
                        </div>
                        <button 
                          className="text-gray-600 hover:text-primary-400 font-medium text-sm transition-colors flex items-center gap-1 group-hover:gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoClick(item.id, e);
                          }}
                        >
                          {playingVideo === item.id ? "Pausar" : "Reproducir"}
                          <span className="transition-all duration-300 group-hover:translate-x-1">
                            {playingVideo === item.id ? "❚❚" : "▶"}
                          </span>
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
                <div className="bg-primary-50 rounded-2xl p-8 max-w-md mx-auto">
                  <div className="text-5xl mb-4">🎥</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron proyectos</h3>
                  <p className="text-gray-600 mb-4">
                    No hay proyectos en la categoría "{filters.find(f => f.id === activeFilter)?.name}".
                  </p>
                  <button
                    onClick={() => setActiveFilter('todos')}
                    className="bg-primary-400 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-500 transition-colors"
                  >
                    Ver todos los proyectos
                  </button>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Link 
                href="/#contacto" 
                className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Get In Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
}