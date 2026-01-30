'use client';

import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Portfolio() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

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
  ];

  // Pausar video actual cuando se reproduce otro
  const handleVideoClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
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

          {/* Grid estilo Pinterest */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioItems.map((item) => (
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
                        controls={playingVideo === item.id}
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
                        <div className={`backdrop-blur-sm rounded-full p-4 transition-all duration-300 transform ${
                          playingVideo === item.id 
                            ? 'bg-black/50 hover:bg-black/60 scale-100 opacity-100' 
                            : 'bg-primary-400/90 hover:bg-primary-500 group-hover:scale-110 opacity-0 group-hover:opacity-100'
                        }`}>
                          <svg 
                            className="w-10 h-10 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            {playingVideo === item.id ? (
                              // Icono de pausa
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
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
      <Footer />
    </div>
  );
}