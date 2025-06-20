import React from 'react';
import { ChevronRight } from 'lucide-react';
import proche_video from '../assets/proche_video.mp4';

const SereniteProcheSection = () => {
  return (
    <section id="proche" className="w-full bg-black">
      <div className="w-full px-4 md:px-16 pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            {/* Colonne gauche */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Étiquette + Vidéo mobile */}
              <div className="flex flex-col gap-4">
                <span className="etiquette mb-2">Sérénité</span>

                {/* Vidéo visible uniquement en mobile */}
                <div className="w-full h-[240px] md:h-0 md:hidden relative overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={proche_video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Texte */}
              <div className="flex flex-col gap-6 pt-2">
                <h2 className="mortel-titre-hero text-white">
                  Une gestion complète et centralisée de vos proches
                </h2>
                <p className="mortel-text text-white text-[1.2em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                  Nous offrons une solution simple pour informer vos proches du décès et des arrangements funéraires.
                  Grâce à notre plateforme, centralisez toutes les informations essentielles en un seul endroit.
                </p>

                {/* Deux colonnes */}
                <div className="flex flex-col md:flex-row gap-6 py-2">
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-white text-xl font-inter font-normal leading-7">Gestion Simplifiée</h3>
                    <p className="texte-normal">Informez facilement vos proches des détails importants concernant les obsèques.</p>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-white text-xl font-inter font-normal leading-7">Espace Commun</h3>
                    <p className="texte-normal">Un espace dédié pour partager souvenirs et informations avec vos proches.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                <button className="btn-principal">Préparer</button>
                <button className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Colonne droite : vidéo visible uniquement en desktop */}
            <div className="hidden md:flex flex-1 h-[640px] overflow-hidden relative">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={proche_video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SereniteProcheSection;