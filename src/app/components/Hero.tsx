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
    <section className="min-h-[100vh] flex items-center justify-center px-4 bg-primary-900 relative">
      {/* Video para desktop */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>

      {/* Video para móvil */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      >
        <source src="/videos/Hero_mobile.mp4" type="video/mp4" />
        <source src="/videos/hero-mobile.webm" type="video/webm" />
      </video>

      {/* Resto del contenido igual... */}
      {(videoError) && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/hero-fallback.jpg")',
          }}
        />
      )}

      <div className="absolute inset-0 bg-primary-300/20"></div>

      <div className="absolute bottom-8 left-0 right-0 z-10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: lado a lado */}
          <div className="hidden md:flex justify-between items-end">
            <div className="text-left">
              <p className="text-sm md:text-base text-gray-800 italic drop-shadow-md bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                Content Creator • Valencia → Worldwide
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm md:text-base text-gray-800 italic drop-shadow-md max-w-xs bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                "Helping people and products look natural, confident and authentic on camera"
              </p>
            </div>
          </div>

          {/* Mobile: apilado vertical */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-800 italic drop-shadow-md bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
              Content Creator • Valencia → Worldwide
            </p>
            <p className="text-sm text-gray-800 italic drop-shadow-md bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
              "Helping people and products look natural, confident and authentic on camera"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}