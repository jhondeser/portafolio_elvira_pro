'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/', type: 'page' as const },
    { name: 'About Me', href: '#about', type: 'anchor' as const },
    { name: 'Portfolio', href: '/proyectos', type: 'page' as const },
    { name: 'Contact', href: '#contact', type: 'anchor' as const },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string, type: 'page' | 'anchor') => {
    setIsOpen(false);
    
    if (type === 'page') {
      // Navegar a otra página
      router.push(href);
    } else {
      // Scroll suave a sección en la misma página
      if (window.location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si estamos en otra página, ir al home primero y luego a la sección
        router.push(`/${href}`);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => router.push('/')}
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-primary-400' : 'text-primary-400 drop-shadow-lg'
              }`}
            >
              Elvira
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group ${
                    isScrolled 
                      ? 'text-primary-300 hover:text-primary-400' 
                      : 'text-primary-300 hover:text-primary-400 drop-shadow-md'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-primary-300' : 'bg-primary-300'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#c084fc]' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className={`px-2 pt-2 pb-3 space-y-1 rounded-lg backdrop-blur-lg ${
              isScrolled 
                ? 'bg-white/95 border border-gray-200/50' 
                : 'bg-black/30 border border-white/20'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className={`block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-[#c084fc] hover:bg-gray-50/50' 
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}