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
      setIsScrolled(window.scrollY > 100);
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
      {/* Header */}
      <div
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-mortel-dark 
          ${isScrolled ? 'h-[56px] px-4 md:px-8' : 'h-[72px] px-4 md:px-16'}`}
      >
        <div className="flex justify-between items-center h-full">
          {/* Logo + Nav */}
          <div className="flex items-center gap-6">
            <div
              className={`transition-all duration-300 ${
                isScrolled ? 'w-[60px] h-[24px]' : 'w-[84px] h-[36px]'
              } relative overflow-hidden`}
            >
              <img
                src={logoMortel}
                alt="Mortel Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation desktop */}
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

          {/* Consultant + boutons (visible tout le temps en mobile quand scrolled) */}
          <div className="flex items-center gap-4">
            {/* Avatar consultant - visible en desktop uniquement si non scrollé */}
            <div className="hidden xl:flex items-center gap-2">
              {!isScrolled && (
                <>
                  <img
                    className="w-[35px] h-[35px] rounded-full border border-white object-cover"
                    src={avatarConsultant}
                    alt="Consultant"
                  />
                  <span
                    className="text-white text-sm font-normal leading-[21px]"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Alain, est actuellement disponible pour être à votre écoute
                  </span>
                </>
              )}
            </div>

            {/* Boutons visibles en mobile et desktop scrollé */}
            {(isScrolled || window.innerWidth < 1024) && (
              <>
              <button
                className={`bg-white text-black font-normal hover:bg-gray-100 transition-all duration-300
                  ${isScrolled ? 'text-xs px-3 py-1.5' : 'text-sm px-5 py-2'}`}
                style={{ fontFamily: 'Inter' }}
              >
                Contact
              </button>

                <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <User className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            {/* Menu mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 relative overflow-hidden"
            >
              <Menu className="w-6 h-6 text-white absolute left-1 top-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer pour compenser le fixed */}
      <div className={isScrolled ? 'h-[56px]' : 'h-[72px]'}></div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-mortel-dark border-t border-white/20 fixed top-[56px] left-0 w-full z-40">
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
            {/* Avatar consultant mobile */}
            <div className="flex items-center gap-2 pt-4 border-t border-white/20">
              <img
                className="w-[35px] h-[35px] rounded-full border border-white object-cover"
                src={avatarConsultant}
                alt="Consultant"
              />
              <span
                className="text-white text-sm font-normal leading-[21px]"
                style={{ fontFamily: 'Inter' }}
              >
                Alain, est actuellement disponible pour être à votre écoute
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;