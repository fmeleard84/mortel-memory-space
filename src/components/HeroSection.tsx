
import React, { useLayoutEffect, useState } from 'react';
import hpI3 from '../assets/hp_i_3.jpg';
import hpI4 from '../assets/hp_i_4.jpg';

const HeroSection = () => {
  const images = [hpI3, hpI4];
  const [randomImage, setRandomImage] = useState(images[0]);

  useLayoutEffect(() => {
    // Sélection d'une image aléatoire
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);

    // Calcul et injection de la hauteur du header dans une variable CSS
    const header = document.getElementById('site-header');
    if (header) {
      const headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }, []);

  return (
    <section className="hero w-screen flex flex-col justify-start items-start">
      <div className="w-full h-full bg-[#0e0e0e]">
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch h-full">
          
          {/* Colonne gauche - Texte */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 className="text-white text-3xl md:text-4xl lg:text-[56px] font-heading font-normal leading-tight lg:leading-[67.20px] break-words">
                VĀYA, le service funéraire clair, humain et sans détour.
              </h1>
              <p className="text-white text-base md:text-lg font-inter font-normal leading-relaxed lg:leading-[27px] break-words">
                Crémation, démarches, accompagnement : on s'occupe de tout, de A à Z.
              </p>

              <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-white border border-white rounded-none flex justify-center items-center gap-2 hover:bg-gray-100 transition-colors">
                  <span className="text-mortel-dark text-sm lg:text-base font-inter font-normal leading-6">
                    Faire une demande
                  </span>
                </button>
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-mortel-blue rounded-none flex justify-center items-center gap-2 hover:bg-mortel-blue/90 transition-colors">
                  <span className="text-white text-sm lg:text-base font-inter font-normal leading-6">
                    Être rappelé
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full max-h-full overflow-hidden">
            <img 
              className="w-full h-full object-cover object-center" 
              src={randomImage}
              alt="Service funéraire serein"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
