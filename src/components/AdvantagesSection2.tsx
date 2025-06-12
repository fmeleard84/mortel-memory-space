
import React from 'react';

const AdvantagesSection2 = () => {
  return (
    <section className="w-screen bg-mortel-dark-secondary overflow-hidden flex flex-col justify-start items-start">
      <div className="w-full px-4 md:px-8 lg:px-16 py-16 lg:py-28 flex flex-col justify-start items-center">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-12 lg:gap-20">
          <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-8 lg:gap-20">
            {/* Colonne gauche - Image */}
            <div className="flex-1 w-full">
              <img 
                className="w-full h-[300px] md:h-[400px] lg:h-[640px] rounded-[20px] lg:rounded-[28px] object-cover" 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=640&fit=crop"
                alt="Service funéraire moderne"
              />
            </div>

            {/* Colonne droite - Contenu */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8">
              <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-6">
                <h2 className="w-full text-gray-200 text-2xl md:text-3xl lg:text-[40px] font-inter font-light uppercase leading-tight lg:leading-[48px] tracking-wide lg:tracking-[0.80px] break-words">
                  Découvrez nos avantages pour un service funéraire moderne et apaisant.
                </h2>
                <p className="w-full text-white text-base md:text-lg font-inter font-light leading-relaxed lg:leading-[27px] tracking-wide lg:tracking-[0.36px] break-words">
                  Nous prenons en charge toute la gestion administrative pour vous soulager dans ces moments difficiles. Organisez la cérémonie selon vos souhaits tout en préservant la mémoire du défunt grâce à notre espace numérique.
                </p>
              </div>
              
              {/* Statistiques */}
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full py-2 flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-6">
                  <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <div className="w-full text-mortel-blue text-3xl md:text-4xl lg:text-[48px] font-inter font-semibold uppercase leading-tight lg:leading-[57.60px] break-words">
                      100%
                    </div>
                    <div className="w-full text-gray-300 text-xs md:text-sm font-inter font-light leading-6 tracking-wide lg:tracking-[0.32px] break-words">
                      Gestion administrative simplifiée et entièrement en ligne.
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <div className="w-full text-mortel-blue text-3xl md:text-4xl lg:text-[48px] font-inter font-semibold uppercase leading-tight lg:leading-[57.60px] break-words">
                      Unique
                    </div>
                    <div className="w-full text-gray-300 text-xs md:text-sm font-inter font-light leading-6 tracking-wide lg:tracking-[0.32px] break-words">
                      Célébrez la vie avec notre mémoire numérique.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection2;
