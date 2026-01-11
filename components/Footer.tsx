import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-6 pointer-events-none">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40">
        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">
          © {new Date().getFullYear()} {COMPANY_NAME}
        </div>
        <div className="hidden md:block text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">
          GLOBAL TRADERS OF EXOTIC BLENDS
        </div>
      </div>
    </footer>
  );
};

export default Footer;