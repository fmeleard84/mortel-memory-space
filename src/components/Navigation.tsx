import React, { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMortel from '../assets/logo_png.png';

import ModalRappel from './Modal_rappel_tel';
import { useConseiller } from './contexts/ConseillerContext';

const Header = () => {
  const conseiller = useConseiller();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalRappel, setModalRappel] = useState(false);

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
            <Link
              to="/"
              className={`transition-all duration-300 ${
                isScrolled ? 'w-[60px] h-[24px]' : 'w-[84px] h-[36px]'
              } relative overflow-hidden`}
            >
              <img
                src={logoMortel}
                alt="Mortel Logo"
                className="w-full h-full object-contain"
              />
            </Link>

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

          {/* Consultant + boutons */}
          <div className="flex items-center gap-4">
            {/* Consultant desktop */}
            <div className="hidden xl:flex items-center gap-2">
              {!isScrolled && conseiller && (
                <div className="flex items-center gap-4">
                  <img
                    className="w-[35px] h-[35px] rounded-full border border-white object-cover"
                    src={conseiller.image}
                    alt={`Conseiller ${conseiller.prenom}`}
                  />
                  <div className="flex flex-col text-white text-xs leading-snug" style={{ fontFamily: 'Inter' }}>
                    <span className="whitespace-nowrap">{conseiller.prenom} est actuellement</span>
                    <span className="whitespace-nowrap">à votre écoute</span>
                  </div>
                  <button
                    onClick={() => setModalRappel(true)}
                    className="ml-2 px-3 py-1.5 bg-mortel-violet text-xs text-white rounded hover:bg-mortel-violet/90 transition"
                  >
                    Être rappelé
                  </button>
                </div>
              )}
            </div>

            {/* Boutons Contact + User */}
            {(isScrolled || window.innerWidth < 1024) && (
              <>
                <button
                  onClick={() => setModalRappel(true)}
                  className={`bg-mortel-violet text-white font-normal hover:bg-mortel-violet/90 transition-all duration-300
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

      {/* Spacer */}
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

            {/* Consultant mobile */}
            {conseiller && (
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-white/20">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="w-[28px] h-[28px] rounded-full border border-white object-cover"
                    src={conseiller.image}
                    alt={`Conseiller ${conseiller.prenom}`}
                  />
                  <span className="text-white text-[10px]" style={{ fontFamily: 'Inter' }}>
                    {conseiller.prenom}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setModalRappel(true);
                    setIsOpen(false);
                  }}
                  className="px-2 py-1 text-[10px] bg-mortel-violet text-white rounded hover:bg-mortel-violet/90"
                >
                  Être rappelé
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal de rappel */}
      <ModalRappel
        open={modalRappel}
        onClose={() => setModalRappel(false)}
        conseiller={conseiller}
      />
    </div>
  );
};

export default Header;