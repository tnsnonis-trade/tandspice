import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const HeroSlider: React.FC = () => {
  const displayProducts = PRODUCTS.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
  }, [displayProducts.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProducts.length) % displayProducts.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="h-full w-full relative overflow-hidden bg-stone-900">
      {displayProducts.map((product, index) => (
        <div 
          key={product.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          <div className="absolute inset-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/50 to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center pt-20 md:pt-0">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-3xl">
                <div className="mb-4">
                   <span className="inline-block py-1 px-4 bg-tea-600/20 border border-tea-400/30 text-tea-300 text-[10px] tracking-[0.3em] uppercase rounded-full backdrop-blur-md">
                     Premium Selection
                   </span>
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-base md:text-2xl text-stone-300 mb-8 md:mb-10 max-w-xl font-light leading-relaxed">
                  {product.description}
                </p>
                <div className="flex">
                  <button className="bg-white text-stone-900 px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all hover:bg-tea-50 hover:scale-105 font-bold text-xs md:text-sm tracking-widest flex items-center gap-3 shadow-2xl">
                    EXPLORE <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {displayProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-500 ${
              idx === currentIndex ? 'w-10 md:w-12 bg-tea-400' : 'w-3 md:w-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-12 right-12 z-20 hidden lg:flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
