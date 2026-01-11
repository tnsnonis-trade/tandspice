import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

interface HeaderProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDarkHome = activeSection === 'home';
  
  const textColorClass = isDarkHome ? 'text-white' : 'text-stone-900';
  const logoBgClass = isDarkHome ? 'bg-white/10 text-tea-100 border-white/20' : 'bg-tea-100 text-tea-700 border-tea-200';
  const buttonClass = isDarkHome 
    ? 'bg-white text-tea-900 hover:bg-tea-50' 
    : 'bg-tea-700 text-white hover:bg-tea-800';

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-500">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavClick('home')} className="flex items-center gap-2 group z-50">
          <div className={`p-1.5 md:p-2 rounded-full border transition-all duration-500 backdrop-blur-md ${logoBgClass}`}>
            <Leaf className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className={`text-base md:text-xl font-serif font-bold tracking-tight transition-all duration-500 ${isMobileMenuOpen ? 'text-stone-900' : textColorClass}`}>
            {COMPANY_NAME}
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-100 transition-all duration-500 ${textColorClass} ${activeSection === link.href.substring(1) ? 'opacity-100 underline underline-offset-8 decoration-2' : 'opacity-60'}`}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => onNavClick('contact')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-500 hover:shadow-xl hover:-translate-y-0.5 ${buttonClass}`}
          >
            QUOTATION
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 z-50 transition-colors ${isMobileMenuOpen ? 'text-stone-900' : textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 p-6 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={link.label}
            href={link.href}
            className={`text-4xl font-serif font-bold text-stone-900 transition-all duration-500 delay-[${idx * 100}ms] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <button 
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="mt-4 px-10 py-4 bg-tea-700 text-white rounded-full font-bold tracking-widest text-sm"
        >
          GET QUOTATION
        </button>
      </div>
    </header>
  );
};

export default Header;