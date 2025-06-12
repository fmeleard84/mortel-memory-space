
import React from 'react';
import { ChevronRight } from 'lucide-react';

const OrganisationSection = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          
          {/* En-tête */}
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center">
                <span className="text-mortel-green text-lg font-inter font-semibold leading-[27px]">
                  Services
                </span>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-inter font-normal leading-tight">
                Organisation des obsèques sans souci
              </h2>
            </div>
            <div className="flex-1 text-white text-lg font-inter font-normal leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </div>
          </div>

          {/* Services en 3 colonnes */}
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1544967882-f3d985ac39a6?w=395&h=240&fit=crop"
                  alt="Coordination et logistique"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Coordination et logistique sans stress
                  </h3>
                  <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                    Nous gérons tous les intervenants pour un déroulement fluide.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=395&h=240&fit=crop"
                  alt="Hommages mémorables"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Création d'hommages mémorables et touchants
                  </h3>
                  <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                    Des hommages créatifs qui racontent une histoire.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=395&h=240&fit=crop"
                  alt="Décorations durables"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Décorations durables et respectueuses de l'environnement
                  </h3>
                  <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                    Nous utilisons des fleurs locales et compostables.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-6 py-2.5 bg-mortel-green text-white text-base font-inter font-normal leading-6 hover:bg-mortel-green/90 transition-colors">
              En savoir plus
            </button>
            <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-green transition-colors">
              <span>Contact</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationSection;
