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
                <span className="etiquette">Services</span>
              </div>
              <h2 className="mortel-titre-hero text-white">Ce que nous faisons, vraiment</h2>
            </div>
            <div className="mortel-text text-white">
              Nous accompagnons chaque famille dans ce moment difficile, avec une organisation simple, des démarches prises en charge, et une attention particulière portée aux proches. Rien n’est laissé au hasard. Vous n’êtes pas seuls.
            </div>
          </div>

          {/* Services en 3 colonnes */}
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Bloc 1 */}
              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1544967882-f3d985ac39a6?w=395&h=240&fit=crop"
                  alt="Coordination et logistique"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Démarches simplifiées
                  </h3>
                  <p className="texte-normal">
                    <b>Zéro paperasse, zéro stress</b>
                    <br />
                    Nous nous chargeons de toutes les formalités administratives, autorisations, et documents nécessaires. En toute transparence.
                  </p>
                  <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-green transition-colors">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=395&h=240&fit=crop"
                  alt="Hommages mémorables"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Organisation claire
                  </h3>
                  <p className="texte-normal">
                    <b>Des propositions lisibles, sans surprises</b>
                    <br />
                    Nos propositions sont pensées pour s’adapter à vos besoins. Claires, justes, personnalisables. Et tout est pris en charge.
                  </p>
                  <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-green transition-colors">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=395&h=240&fit=crop"
                  alt="Décorations durables"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Soutien aux proches
                  </h3>
                  <p className="texte-normal">
                    <b>Une présence humaine et numérique</b>
                    <br />
                    Nous facilitons l’information des proches et créons un espace commun pour les souvenirs et les échanges.
                  </p>
                  <button className="flex items-center gap-2 text-white text-base font-inter font-normal leading-6 hover:text-mortel-green transition-colors">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationSection;