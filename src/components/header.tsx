import React from 'react';
import { ShoppingCart, Instagram } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/images/logo.jpg" alt="KingAmbrosi Logo" className="h-12 w-12 rounded-full object-cover mr-3" />
            <span className="font-bold text-2xl text-white">KingAmbrosi</span>
          </div>
          <nav>
            <ul className="flex space-x-8 text-white">
              <li><Link href="/about" className="text-lg">About</Link></li>
              <li><Link href="/gallery" className="text-lg">Gallery</Link></li>
              <li><Link href="/artist-statement" className="text-lg">Artist's Statement</Link></li>
              <li><Link href="/contact" className="text-lg">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-6">
            <ShoppingCart size={28} />
            <Instagram size={28} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
