
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Anticiper', path: '/anticiper' },
    { name: 'Organiser', path: '/organiser' },
    { name: 'Remercier', path: '/remercier' },
    { name: 'A propos', path: '/a-propos' },
  ];

  return (
    <div className="w-full">
      <div className="w-full h-[72px] px-16 overflow-hidden flex justify-between items-center bg-mortel-dark">
        {/* Logo et Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo Mortel */}
          <div className="w-[84px] h-9 relative overflow-hidden">
            <div className="w-[70px] h-9 absolute left-[6.67px] top-0 overflow-hidden">
              <div className="w-[18.81px] h-[15.95px] absolute left-[50.82px] top-[10.87px] bg-white" />
              <div className="w-[19.44px] h-[24.68px] absolute left-[34.33px] top-[11.32px] bg-white" />
              <div className="w-[18.81px] h-[15.95px] absolute left-[18.55px] top-[10.87px] bg-white" />
              <div className="w-[21.60px] h-[16.19px] absolute left-0 top-[10.24px] bg-white" />
              <div className="w-[15.13px] h-[9.29px] absolute left-[1.15px] top-0 bg-white" />
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base font-normal leading-6 hover:text-mortel-blue transition-colors"
                style={{ fontFamily: 'Source Sans 3' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Section centrale - Consultant disponible */}
        <div className="hidden xl:flex items-center gap-[7px]">
          <img 
            className="w-[35px] h-[35px] rounded-full" 
            src="https://placehold.co/35x35" 
            alt="Consultant"
          />
          <div 
            className="w-[358px] h-[23px] text-white text-sm font-normal leading-[21px]"
            style={{ fontFamily: 'Source Sans 3' }}
          >
            Alain, est actuellement disponible pour être à votre écoute
          </div>
        </div>

        {/* Bouton Contact et Menu mobile */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 bg-white text-black text-base font-normal leading-6 hover:bg-gray-100 transition-colors"
            style={{ fontFamily: 'Source Sans 3' }}>
            Contact
          </button>
          
          {/* Menu hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 relative overflow-hidden"
          >
            <Menu className="w-6 h-6 text-white absolute left-1 top-1" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-mortel-dark border-t border-white/20">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base font-normal leading-6 hover:text-mortel-blue transition-colors"
                style={{ fontFamily: 'Source Sans 3' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Section consultant pour mobile */}
            <div className="xl:hidden flex items-center gap-2 pt-4 border-t border-white/20">
              <img 
                className="w-[35px] h-[35px] rounded-full" 
                src="https://placehold.co/35x35" 
                alt="Consultant"
              />
              <div 
                className="text-white text-sm font-normal leading-[21px]"
                style={{ fontFamily: 'Source Sans 3' }}
              >
                Alain, est actuellement disponible pour être à votre écoute
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
