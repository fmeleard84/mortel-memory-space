
import React from 'react';
import { ChevronRight } from 'lucide-react';
import procheImg from '../assets/proche.jpg'; // Utilisation de l'image existante
import adminImg from '../assets/administratif_1.jpg'; // Utilisation de l'image existante
import bougieVideo from '../assets/bougie_bouge.mp4'; // Utilisation de l'image existante

const OrganisationSection = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 pt-12 md:pt-28 pb-20 md:pb-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-20">
          {/* En-tête */}
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Partie gauche : Titre */}
            <div className="w-full lg:w-5/12 flex items-start">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <span className="etiquette">Services</span>
                </div>
                <h2 className="mortel-titre-hero text-white text-left">Ce que nous faisons, vraiment</h2>
              </div>
            </div>

            {/* Partie droite : Texte, centré verticalement */}
            <div className="w-full lg:w-7/12 flex items-start">
              <p className="mortel-text text-white text-[1.3em] leading-[1.6em] md:text-[1.1em] md:leading-[1.3em]">
                Nous accompagnons chaque famille dans ce moment difficile, avec une organisation simple, des démarches prises en charge, et une attention particulière portée aux proches. Rien n'est laissé au hasard. Vous n'êtes pas seuls.
              </p>
            </div>
          </div>

          {/* Services en 3 colonnes */}
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Bloc 1 */}
              <div className="flex flex-col gap-8">
                <img 
                  className="w-full h-60 object-cover" 
                  src={adminImg}
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
                <a href="#demarches" className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="flex flex-col gap-8">
                <video
                  className="w-full h-60 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ><source src={bougieVideo} type="video/mp4" />
                </video>
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Organisation claire
                  </h3>
                  <p className="texte-normal">
                    <b>Des propositions lisibles, sans surprises</b>
                    <br />
                    Nos propositions sont pensées pour s'adapter à vos besoins. Claires, justes, personnalisables. Et tout est pris en charge.
                  </p>
                <a href="#organisation" className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="flex flex-col gap-6 pb-4">
                <img 
                  className="w-full h-60 object-cover" 
                  src={procheImg}
                  alt="Décorations durables"
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-white text-2xl md:text-[32px] font-inter font-normal leading-tight">
                    Soutien aux proches
                  </h3>
                  <p className="texte-normal">
                    <b>Une présence humaine et numérique</b>
                    <br />
                    Nous facilitons l'information des proches et créons un espace commun pour les souvenirs et les échanges.
                  </p>
                <a href="#proche" className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
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
