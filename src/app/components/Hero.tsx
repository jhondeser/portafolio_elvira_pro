'use client';

import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video && !videoError) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      };

      const handleError = () => {
        console.log('Error loading video, falling back to image');
        setVideoError(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [videoError]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-primary-900 pt-16 relative">
      {/* Video de fondo */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
        </video>
      )}

      {/* Imagen de fallback */}
      {(videoError || !isVideoLoaded) && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero-fallback.jpg")',
          }}
        />
      )}

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-primary-300/20"></div>


      {/* Textos en esquinas - ABAJO del contenido principal */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end">
            {/* Esquina inferior izquierda */}
            <div className="text-left">
              <p className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-md">
                Content creator / Video editor
              </p>
            </div>

            {/* Esquina inferior derecha */}
            <div className="text-right">
              <p className="text-lg md:text-xl text-white italic drop-shadow-md max-w-md">
                &ldquo;Capturing moments, editing emotions.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}