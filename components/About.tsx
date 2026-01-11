import React from 'react';
import { Leaf, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="h-full w-full bg-stone-50 flex items-center justify-center px-6 pt-20 md:pt-0">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-px bg-tea-400 self-center"></div> <br/>
            <div className="w-12 md:w-16 h-px bg-tea-400 self-center"></div>
          </div>
          <h2 className="text-3xl md:text-7xl font-serif font-bold text-stone-900 mb-6 md:mb-10 leading-tight">
            Nurturing the Essence of <br className="hidden md:block"/> <span className="text-tea-600 italic">Authentic Traditions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-stone-600 text-sm md:text-xl leading-relaxed font-light">
            <p>
              T & Spices L.L.C. was founded on a simple philosophy: purity is the highest luxury. 
              We operate at the intersection of traditional harvesting and modern distribution.
            </p>
            <p className="hidden md:block">
              Our relationships with master growers across the Spice Route allow us to curate 
              collections that are not just products, but stories of the earth and the people who tend it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-10 md:mt-16">
          <div className="flex flex-row md:flex-col items-center md:text-center group gap-4 md:gap-0">
            <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-2xl bg-white shadow-lg md:shadow-xl flex items-center justify-center text-tea-600 md:mb-6 group-hover:scale-105 transition-transform duration-500">
              <Leaf className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="text-xs md:text-lg font-bold text-stone-900 mb-1 md:mb-3 tracking-wider uppercase">ETHICAL</h4>
              <p className="text-[11px] md:text-sm text-stone-500 leading-snug">Direct partnerships with master growers.</p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center md:text-center group gap-4 md:gap-0">
            <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-2xl bg-white shadow-lg md:shadow-xl flex items-center justify-center text-spice-600 md:mb-6 group-hover:scale-105 transition-transform duration-500">
              <Award className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="text-xs md:text-lg font-bold text-stone-900 mb-1 md:mb-3 tracking-wider uppercase">QUALITY</h4>
              <p className="text-[11px] md:text-sm text-stone-500 leading-snug">Rigorous multi-stage purity testing.</p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center md:text-center group gap-4 md:gap-0">
            <div className="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-2xl bg-white shadow-lg md:shadow-xl flex items-center justify-center text-stone-700 md:mb-6 group-hover:scale-105 transition-transform duration-500">
              <Globe className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <h4 className="text-xs md:text-lg font-bold text-stone-900 mb-1 md:mb-3 tracking-wider uppercase">GLOBAL</h4>
              <p className="text-[11px] md:text-sm text-stone-500 leading-snug">Preserving diverse flavor profiles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;