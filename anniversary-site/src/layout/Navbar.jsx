import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Letter', path: '/letter' },
    { name: 'Reasons', path: '/reasons' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-darkBg/90 backdrop-blur-md border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Heart className="text-accentRose w-6 h-6 animate-pulse" fill="currentColor" />
          <span className="font-serif text-xl tracking-wider text-softCream group-hover:text-accentGold transition-colors">
            Forever
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-accentGold ${
                location.pathname === link.path ? 'text-accentGold font-medium' : 'text-softCream/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-softCream hover:text-accentGold transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-darkBg/95 backdrop-blur-lg flex flex-col items-center justify-center min-h-screen"
          >
            <button 
              className="absolute top-6 right-6 text-softCream hover:text-accentGold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors duration-300 hover:text-accentGold ${
                    location.pathname === link.path ? 'text-accentGold' : 'text-softCream'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
