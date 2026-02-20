
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Desktop & Mobile Pill Container */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`
          pointer-events-auto flex items-center justify-between
          px-4 py-3 md:px-8 md:py-4 rounded-full glass
          transition-all duration-500 ease-in-out
          ${isScrolled ? 'w-full md:w-[700px] shadow-xl' : 'w-full md:w-[900px]'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.location.hash = '/'}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
            U
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block text-slate-900">URBAN AGENCY</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all transform active:scale-95 shadow-md"
            onClick={() => window.location.hash = '/contact'}
          >
            Inquire Now
            <ArrowRight size={14} />
          </button>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/5 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="md:hidden fixed top-24 left-4 right-4 p-6 glass rounded-[2rem] pointer-events-auto z-40"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-200" />
              <button 
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold shadow-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.hash = '/contact';
                }}
              >
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
