
import React, { useLayoutEffect, useState } from 'react';
import hpI3 from '../assets/hp_i_3.jpg';
import hpI4 from '../assets/hp_i_4.jpg';
import { ChevronRight, Clock, Users } from 'lucide-react';

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
    <section className="hero w-full flex flex-col justify-start items-start">
      <div className="w-full h-full bg-[#0e0e0e]">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-stretch h-full">
          
          {/* Colonne gauche - Texte */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8 mt-5 lg:mt-0">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 className="mortel-titre-hero text-white">
                VĀYA, le service funéraire clair, humain et sans détour.
              </h1>
              <p className="mortel-text text-white text-[1.1em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                Crémation, démarches, accompagnement : on s'occupe de tout, de A à Z.
              </p>

              <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                <button className="btn-principal">
                  <span>
                    Être rappelé
                  </span>
                </button>
                <button className="btn-secondaire group text-white h-[42px] flex items-center">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
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
