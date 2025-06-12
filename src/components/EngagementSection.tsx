
import React from 'react';
import { ChevronRight } from 'lucide-react';

const EngagementSection = () => {
  return (
    <section className="w-full bg-mortel-dark-secondary">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          
          {/* En-tête principale */}
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center">
                <span className="text-mortel-blue text-lg font-inter font-semibold leading-[27px]">
                  Sérénité
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-inter font-normal leading-tight">
                Notre engagement pour un service apaisé
              </h2>
            </div>
            <div className="flex-1 text-white text-lg font-inter font-normal leading-[27px]">
              Nous prenons en charge l'intégralité de la gestion administrative, vous permettant de vous concentrer sur l'essentiel. De la prise en charge du défunt à l'organisation complète des obsèques, nous sommes à vos côtés à chaque étape. Nos services incluent également un soutien pour les proches, avec des informations et un espace mémoire dédié.
            </div>
          </div>

          {/* Services en 3 colonnes */}
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                  Gestion administrative complète et transparente
                </h3>
                <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                  Une gestion administrative simplifiée et complète.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                  Organisation des obsèques sans souci
                </h3>
                <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                  Nous nous occupons de chaque détail.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                  Soutenir et informer vos proches
                </h3>
                <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                  Un espace pour partager et se souvenir.
                </p>
              </div>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <button className="px-6 py-2.5 bg-mortel-blue text-white text-base font-inter font-normal leading-6 hover:bg-mortel-blue/90 transition-colors">
              En savoir plus
            </button>
            <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-blue transition-colors">
              <span>Contact</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
