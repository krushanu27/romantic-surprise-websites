import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PartyPopper, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gifts', path: '/gifts' },
    { name: 'Reasons', path: '/reasons' },
    { name: 'Memories', path: '/memories' },
    { name: 'Letter', path: '/letter' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <PartyPopper className="text-bdayRose w-6 h-6 animate-wiggle" />
          <span className="font-display text-2xl text-bdayDark group-hover:text-bdayRose transition-colors">
            SURPRISE!
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium transition-colors duration-300 text-sm uppercase tracking-wider ${
                location.pathname === link.path ? 'text-bdayRose' : 'text-bdayDark/70 hover:text-bdayRose'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden text-bdayDark"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center min-h-screen"
          >
            <button 
              className="absolute top-6 right-6 text-bdayDark"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-4xl mt-4 sm:mt-0 ${
                    location.pathname === link.path ? 'text-bdayRose' : 'text-bdayDark'
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
