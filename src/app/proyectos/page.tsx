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
      id: 1,
      title: "Proyecto de Video 1",
      description: "Producción de video profesional para empresa local en Valencia.",
      video: "/videos/IMG_1505.MP4",
      category: "session",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Edición Creativa 2",
      description: "Edición avanzada con efectos y transiciones modernas.",
      video: "/videos/IMG_3017.MOV",
      category: "editing",
      date: "2024-01-20"
    },
    {
      id: 3,
      title: "Sesión en Estudio",
      description: "Grabación en estudio con iluminación profesional.",
      video: "/videos/IMG_4820.MOV",
      category: "session",
      date: "2024-02-05"
    },
    {
      id: 4,
      title: "Video Corporativo",
      description: "Video institucional para presentación de empresa.",
      video: "/videos/IMG_4836.MP4",
      category: "session",
      date: "2024-02-10"
    },
    {
      id: 5,
      title: "Edición Musical",
      description: "Video musical con sincronización perfecta de audio y video.",
      video: "/videos/IMG_4837.MOV",
      category: "editing",
      date: "2024-02-15"
    },
    {
      id: 6,
      title: "Proyecto Documental",
      description: "Documental corto sobre cultura local en Valencia.",
      video: "/videos/IMG_7269.MP4",
      category: "session",
      date: "2024-02-20"
    },
    {
      id: 7,
      title: "Evento en Vivo",
      description: "Cobertura de evento empresarial con múltiples cámaras.",
      video: "/videos/IMG_7482.MP4",
      category: "session",
      date: "2024-02-25"
    },
    {
      id: 8,
      title: "Evento en Vivo 2",
      description: "Cobertura de evento empresarial con múltiples cámaras.",
      video: "/videos/IMG_2124.MOV",
      category: "session",
      date: "2024-02-25"
    },

  ];

  const filters = [
    { id: 'todos', name: 'All', count: portfolioItems.length },
    { id: 'session', name: 'Session', count: portfolioItems.filter(item => item.category === 'session').length },
    { id: 'editing', name: 'Video Editing', count: portfolioItems.filter(item => item.category === 'editing').length }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
                    ? 'bg-primary-400 text-white shadow-lg hover:bg-primary-500'
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
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="break-inside-avoid group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Contenedor del video */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <video 
                        src={item.video}                        
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        playsInline
                        preload="metadata"
                        onClick={(e) => handleVideoClick(item.id, e)}
                        ref={(el) => {
                          videoRefs.current[item.id] = el;
                        }}
                        onEnded={() => handleVideoEnded(item.id)}
                        controls={false}
                        // Autoplay del primer frame para que se vea
                        autoPlay={false}
                        muted={playingVideo !== item.id} // Solo muteado cuando no está reproduciendo
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
                              // Icono de feedback al hacer click
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                            ) :playingVideo === item.id ? ( 
                              // Icono de pausa
                              <></>
                            ) : (
                              // Icono de play
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
                    
                    {/* Overlay de categoría */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                        item.category === "session" 
                          ? "bg-primary-400/90 text-white" 
                          : "bg-secondary-500/90 text-white"
                      }`}>
                        {item.category === "session" ? "Session" : "Edición"}
                      </span>
                    </div>
                  </div>

                  {/* Contenido textual */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${
                          item.category === "session" ? "text-primary-400" : "text-secondary-500"
                        }`}>
                          {item.category === "session" ? "📸 Session" : "🎬 Edición"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {item.date}
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