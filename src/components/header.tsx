import React from 'react';
import { ShoppingCart, Instagram } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Changed h-16 to h-24 */}
          <div className="flex items-center">
            <img src="/images/logo.jpg" alt="KingAmbrosi Logo" className="h-12 w-12 rounded-full object-cover mr-3" /> {/* Slightly increased logo size */}
            <span className="font-bold text-2xl text-black">KingAmbrosi</span> {/* Increased text size */}
          </div>
          <nav>
            <ul className="flex space-x-8 text-black"> {/* Increased spacing between nav items */}
              <li><Link href="/about" className="text-lg">About</Link></li>
              <li><Link href="/gallery" className="text-lg">Gallery</Link></li>
              <li><Link href="/artist-statement" className="text-lg">Artist's Statement</Link></li>
              <li><Link href="/contact" className="text-lg">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-6"> {/* Increased spacing between icons */}
            <ShoppingCart size={28} /> {/* Increased icon size */}
            <Instagram size={28} /> {/* Increased icon size */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
