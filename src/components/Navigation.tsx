
import React, { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMortel from '../assets/logo_png.png';
import avatarConsultant from '../assets/call_homme.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Anticiper', path: '/anticiper' },
    { name: 'Organiser', path: '/organiser' },
    { name: 'Remercier', path: '/remercier' },
    { name: 'A propos', path: '/a-propos' },
  ];

  return (
    <div className="w-full">
      <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-[56px] px-8' : 'h-[72px] px-16'
      } overflow-hidden flex justify-between items-center bg-mortel-dark`}>
        {/* Logo et Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo Mortel */}
          <div className={`transition-all duration-300 ${
            isScrolled ? 'w-[60px] h-[24px]' : 'w-[84px] h-[36px]'
          } relative overflow-hidden`}>
            <img 
              src={logoMortel} 
              alt="Mortel Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base font-normal leading-6 hover:text-mortel-blue transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Section centrale - Consultant disponible */}
        {!isScrolled && (
          <div className="hidden xl:flex items-center gap-[7px] transition-opacity duration-300">
            <img 
              className="w-[35px] h-[35px] rounded-full border border-white object-cover" 
              src={avatarConsultant}
              alt="Consultant"
            />
            <div 
              className="whitespace-nowrap text-white text-sm font-normal leading-[21px]"
              style={{ fontFamily: 'Inter' }}
            >
              Alain, est actuellement disponible pour être à votre écoute
            </div>
          </div>
        )}

        {/* Bouton Contact, icône de connexion et Menu mobile */}
        <div className="flex items-center gap-4">
          {!isScrolled && (
            <>
              <button className="px-5 py-2 bg-white text-black text-base font-normal leading-6 hover:bg-gray-100 transition-all duration-300"
                style={{ fontFamily: 'Inter' }}>
                Contact
              </button>
              
              <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors">
                <User className="w-5 h-5 text-white" />
              </button>
            </>
          )}
          
          {/* Menu hamburger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 relative overflow-hidden"
          >
            <Menu className="w-6 h-6 text-white absolute left-1 top-1" />
          </button>
        </div>
      </div>

      {/* Spacer pour compenser le header fixed */}
      <div className="h-[72px]"></div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-mortel-dark border-t border-white/20 fixed top-[72px] left-0 w-full z-40">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base font-normal leading-6 hover:text-mortel-blue transition-colors"
                style={{ fontFamily: 'Inter' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Section consultant pour mobile */}
            <div className="xl:hidden flex items-center gap-2 pt-4 border-t border-white/20">
              <img 
                className="w-[35px] h-[35px] rounded-full border border-white object-cover" 
                src={avatarConsultant}
                alt="Consultant"
              />
              <div 
                className="text-white text-sm font-normal leading-[21px]"
                style={{ fontFamily: 'Inter' }}
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
