'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function FeaturedPortfolio() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Solo los primeros 3 videos
  const featuredItems = [
    {
      id: 1,
      title: "Event Highlights",
      description: "Filming and editing event content for a large festival in Spain. Atmosphere, emotions, and key moments captured on video.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848265/IMG_4836_frrgi5.mp4`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848265/IMG_4836_frrgi5.jpg`,
      category: "session-editing",
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 2,
      title: "Behind the Scenes",
      description: "Backstage filming and editing for a large podcast. Short-form content created for audience warm-up, stories, and social media while the main episode is in production.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848280/IMG_4837_f6zl5n.mov`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848280/IMG_4837_f6zl5n.jpg`,
      category: "session-editing",
      categoryText: "📸 Session + 🎬 Editing"
    },
    {
      id: 3,
      title: "Photoshoot BTS",
      description: "Behind-the-scenes filming of a photoshoot, creating short-form content for Reels and Stories during the shooting process.",
      video: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848277/IMG_4820_y1t61f.mov`,
      thumbnail: `https://res.cloudinary.com/dbfeks8ru/video/upload/v1770848277/IMG_4820_y1t61f.jpg`,
      category: "session-editing",
      categoryText: "📸 Session + 🎬 Editing"
    }
  ];

  // Función para obtener el color según categoría
  const getCategoryColor = (category: string) => {
    return 'bg-gradient-to-r from-primary-400 to-secondary-500';
  };

  // Función para pausar video
  const pauseVideo = (id: number) => {
    const videoElement = videoRefs.current[id];
    if (videoElement) {
      videoElement.pause();
    }
  };

  // Función para reproducir video
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

  // Manejar clic en video
  const handleVideoClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    setClickedVideo(id);
    
    setTimeout(() => {
      setClickedVideo(null);
    }, 1000);
    
    if (playingVideo === id) {
      pauseVideo(id);
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        pauseVideo(playingVideo);
      }
      
      setPlayingVideo(id);
      playVideo(id);
    }
  };

  const handleVideoEnded = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    }
  };

  return (
    <section id="featured-portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments, crafting stories through Session and video editing.
          </p>
        </div>

        {/* Grid de 3 videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
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
                  
                  {/* Categoría */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${getCategoryColor(item.category)} text-white`}>
                      {item.categoryText}
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
                      <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                        {item.categoryText}
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

        {/* Botón Ver más */}
        <div className="text-center mt-12">
          <Link 
            href="/proyectos" 
            className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}