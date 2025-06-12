
import React from 'react';

const AdvantagesHeroSection = () => {
  return (
    <section className="w-full px-16 py-28 bg-gradient-to-r from-[#313131] to-[#181B1F] overflow-hidden flex flex-col justify-start items-center gap-20">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        <div className="w-full flex justify-start items-center gap-20">
          {/* Colonne gauche - Contenu */}
          <div className="flex-1 flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <h2 className="w-full text-white text-[40px] font-normal leading-[48px] break-words font-sans">
                Découvrez nos avantages pour un service funéraire moderne et apaisant.
              </h2>
              <p className="w-full text-[#D4D4D4] text-lg font-normal leading-[27px] break-words font-mono">
                Nous prenons en charge toute la gestion administrative pour vous soulager dans ces moments difficiles. Organisez la cérémonie selon vos souhaits tout en préservant la mémoire du défunt grâce à notre espace numérique.
              </p>
            </div>
            
            {/* Statistiques */}
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full py-2 flex justify-start items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-white text-5xl font-semibold uppercase leading-[57.6px] break-words font-sans">
                    100%
                  </div>
                  <div className="w-full text-[#D4D4D4] text-base font-normal leading-6 break-words font-mono">
                    Gestion administrative simplifiée et entièrement en ligne.
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-white text-5xl font-semibold uppercase leading-[57.6px] break-words font-sans">
                    Unique
                  </div>
                  <div className="w-full text-[#D4D4D4] text-base font-normal leading-6 break-words font-mono">
                    Célébrez la vie avec notre mémoire numérique.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1">
            <img 
              className="w-full h-[640px] rounded-[50px] object-cover" 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=640&fit=crop"
              alt="Service funéraire moderne"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesHeroSection;
