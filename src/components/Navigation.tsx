import React, { useState, useEffect } from 'react';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMortel from '../assets/logo_png.png';
import avatarConsultant from '../assets/call_homme.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalPlanifier, setModalPlanifier] = useState(false);

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
            {/* Consultant desktop (non scrollé) */}
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

            {/* Boutons Contact + User */}
            {(isScrolled || window.innerWidth < 1024) && (
              <>
                <button
                  onClick={() => setModalPlanifier(true)}
                  className={`btn-principal transition-all duration-300
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

      {/* Modal de rappel */}
      {modalPlanifier && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 text-black relative">
            <button
              onClick={() => setModalPlanifier(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Être rappelé</h3>
            <p className="text-sm mb-4">
              Un conseiller vous rappellera dans les 5 minutes suivant votre demande.
            </p>
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModalPlanifier(false)}
                className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
              >
                Annuler
              </button>
              <button className="px-4 py-2 text-sm bg-mortel-violet text-white hover:bg-mortel-violet/90 rounded">
                Être rappelé maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;