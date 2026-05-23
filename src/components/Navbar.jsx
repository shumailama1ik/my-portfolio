import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Active link ko track karne ke liye state
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cardDark/80 border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Large Neon Logo Section */}
        <div className="flex items-center space-x-4 cursor-pointer group">
          <div className="w-16 h-16 rounded-full border-2 border-neonCyan/80 flex items-center justify-center bg-cardDark/50 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,242,254,0.7)] group-hover:border-neonPurple group-hover:scale-105 transform relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-neonCyan/10 to-neonPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-neonPurple font-black tracking-tighter text-xl font-mono relative z-10 select-none drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">
              SM
            </span>
          </div>
          <span className="text-white font-semibold text-xl tracking-wide hidden sm:block transition-colors duration-300 group-hover:text-gray-200">
            My <span className="text-neonCyan group-hover:text-neonPurple transition-colors duration-300">Portfolio</span>
          </span>
        </div>

        {/* Desktop Navigation Links (Replaced with loop & dynamic line) */}
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide text-gray-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setActiveLink(link)}
              className={`capitalize transition-all duration-300 pb-1 border-b-2 ${
                activeLink === link 
                  ? "text-neonCyan border-neonCyan font-bold" 
                  : "hover:text-white border-transparent"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu (Replaced with dynamic active styles) */}
      {isOpen && (
        <div className="md:hidden bg-cardDark/95 border-b border-white/5 px-6 py-4 space-y-4 text-sm tracking-wide text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`block capitalize transition-colors duration-200 ${
                activeLink === link ? "text-neonCyan font-bold" : "hover:text-white"
              }`}
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;