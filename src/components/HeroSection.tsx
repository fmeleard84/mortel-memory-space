
import React, { useState, useEffect } from 'react';
import hpI3 from '../assets/hp_i_3.jpg';
import hpI4 from '../assets/hp_i_4.jpg';

const HeroSection = () => {
  const images = [hpI3, hpI4];
  const [randomImage, setRandomImage] = useState(images[0]);
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
    console.log('Image sélectionnée:', images[randomIndex]);
  }, []);

  // 🔍 Récupérer la hauteur du header s’il a un ID
    const header = document.getElementById('site-header');
    if (header) {
      const headerHeight = header.offsetHeight;
      setHeroHeight(`calc(100vh - ${headerHeight}px)`);
    }

  return (
    <section className="w-screen h-full flex flex-col justify-start items-start">
      <div className="w-full style={{ height: heroHeight }}">
        <div className="w-full flex-1 flex flex-col lg:flex-row justify-center items-stretch">
          
          {/* Colonne gauche - Contenu centré verticalement */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 className="text-white text-3xl md:text-4xl lg:text-[56px] font-inter font-normal leading-tight lg:leading-[67.20px] break-words">
                Des obsèques sans tracas, en toute sérénité.
              </h1>
              <p className="text-white text-base md:text-lg font-inter font-normal leading-relaxed lg:leading-[27px] break-words">
                Nous vous accompagnons dans chaque étape de l'organisation des obsèques. Dites adieu à la paperasse et concentrez-vous sur l'essentiel.
              </p>
          
              <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-white rounded-none border border-white flex justify-center items-center gap-2 hover:bg-gray-100 transition-colors">
                  <span className="text-mortel-dark text-sm lg:text-base font-inter font-normal leading-6">
                    En savoir plus
                  </span>
                </button>
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-mortel-blue rounded-none flex justify-center items-center gap-2 hover:bg-mortel-blue/90 transition-colors">
                  <span className="text-white text-sm lg:text-base font-inter font-normal leading-6">
                    Urgence : Rappel immédiat
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full max-h-screen overflow-hidden">
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
