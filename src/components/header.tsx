'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Instagram } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollPercentage = Math.min(scrollPosition / 400, 1);
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interpolate = (start: number, end: number) => {
    return start + (end - start) * scrollProgress;
  };

  const headerWidth = interpolate(100, 48); // from 100% to 60%
  const logoPosition = interpolate(0, 20); // move 20px towards center
  const iconsPosition = interpolate(0, -20); // move 20px towards center
  const bgOpacity = interpolate(0, 0.8); // Changed from 0.5 to 0.6
  const blurAmount = interpolate(0, 10); // from no blur to 10px blur

  return (
    <header 
      className="fixed top-4 left-0 right-0 shadow-sm text-white transition-all duration-500 rounded-full mx-auto h-16 z-50 overflow-hidden"
      style={{
        maxWidth: `${headerWidth}%`,
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          backgroundColor: `rgba(31, 41, 55, ${bgOpacity})`,
          backdropFilter: `blur(${blurAmount}px)`,
        }}
      ></div>
      <div className="h-full flex items-center justify-between px-6 relative z-10">
        <div className="absolute left-6 transition-all duration-500 flex items-center" style={{ transform: `translateX(${logoPosition}px)` }}>
          <img 
            src="/images/logo.jpg" 
            alt="KingAmbrosi Logo" 
            className="rounded-full object-cover w-12 h-12 mr-3"
          />
          <span 
            className="font-bold text-white transition-opacity duration-300"
            style={{ opacity: 1 - scrollProgress }}
          >
            KingAmbrosi
          </span>
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6 text-white">
            <li><Link href="/about" className="text-lg hover:text-gray-300">About</Link></li>
            <li><Link href="/gallery" className="text-lg hover:text-gray-300">Gallery</Link></li>
            <li><Link href="/artist-statement" className="text-lg hover:text-gray-300">Artistic Vision</Link></li>
            <li><Link href="/contact" className="text-lg hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
        <div className="absolute right-6 flex items-center space-x-4 transition-all duration-300" style={{ transform: `translateX(${iconsPosition}px)` }}>
          <ShoppingCart size={24} className="hover:text-gray-300 cursor-pointer" />
          <Instagram size={24} className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
