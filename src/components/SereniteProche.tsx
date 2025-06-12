
import React from 'react';
import { ChevronRight } from 'lucide-react';

const SereniteProche = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="text-mortel-blue text-lg font-inter font-semibold leading-[27px]">
                      Sérénité
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white text-3xl md:text-5xl font-inter font-normal leading-tight">
                      Une gestion complète et centralisée de vos proches
                    </h2>
                    <p className="text-white text-lg font-inter font-normal leading-[27px]">
                      Nous offrons une solution simple pour informer vos proches du décès et des arrangements funéraires. Grâce à notre plateforme, centralisez toutes les informations essentielles en un seul endroit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-6 py-2">
                    <div className="flex-1 flex flex-col gap-4">
                      <h3 className="text-white text-xl font-inter font-normal leading-7">
                        Gestion Simplifiée
                      </h3>
                      <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                        Informez facilement vos proches des détails importants concernant les obsèques.
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <h3 className="text-white text-xl font-inter font-normal leading-7">
                        Espace Commun
                      </h3>
                      <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                        Un espace dédié pour partager souvenirs et informations avec vos proches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="px-6 py-2.5 bg-mortel-blue text-white text-base font-inter font-normal leading-6 hover:bg-mortel-blue/90 transition-colors">
                  En savoir plus
                </button>
                <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-blue transition-colors">
                  <span>S'inscrire</span>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                className="w-full h-[640px] object-cover" 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=640&fit=crop"
                alt="Gestion centralisée des proches"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SereniteProche;
