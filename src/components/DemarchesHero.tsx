
import React, { useLayoutEffect, useState } from 'react';
import hpI3 from '../assets/hp_i_3.jpg';
import hpI4 from '../assets/hp_i_4.jpg';
import { ChevronRight, Phone } from 'lucide-react';

const DemarchesHero = () => {
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
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch h-full">
          
          {/* Colonne gauche - Texte */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 className="mortel-titre-hero text-white">
                On s'occupe de tout. Vous n'avez plus à y penser.
              </h1>
              <div className="flex flex-col gap-4">
                <p className="mortel-text text-white">
                  Un décès vient d'avoir lieu ou va arriver.
                </p>
                <p className="mortel-text text-white">
                  Vous êtes là. Nous aussi. Dès maintenant.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                  <button className="btn-principal flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Être rappelé dans les 10 minutes</span>
                  </button>
                  <button className="btn-secondaire group text-white h-[42px] flex items-center">
                    <span>Commencer l'organisation</span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                
                {/* Numéro de téléphone */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                  <div className="text-white text-xl font-normal font-inter">
                    06 12 34 56 78
                  </div>
                  <div className="text-white/70 text-sm font-normal font-inter">
                    7j/7, de 8h à 22h
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full max-h-full overflow-hidden">
            <img 
              className="w-full h-full object-cover object-center" 
              src={randomImage}
              alt="Démarches administratives"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemarchesHero;
