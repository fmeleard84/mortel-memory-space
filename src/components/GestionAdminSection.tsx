import React from 'react';
import { ChevronRight } from 'lucide-react';
import admin_video from '../assets/admini_simple.mp4';

const GestionAdminSection = () => {
  return (
    <section id="demarches" className="w-full bg-mortel-dark-secondary">
      <div className="w-full px-4 md:px-16 pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            {/* Colonne gauche */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Étiquette + Vidéo */}
              <div className="flex flex-col gap-4">
                <span className="etiquette mb-2">Sérénité</span>

                {/* Vidéo en mobile uniquement */}
                <div className="w-full h-[240px] md:h-0 md:hidden relative overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={admin_video} type="video/mp4" />
                  </video>
                </div>

                </div>
              </div>

              {/* Texte + Liste */}
              <div className="flex flex-col gap-6 pt-2">
                <h2 className="mortel-titre-hero text-white">
                  Démarches administratives simplifiées : nous gérons tout pour vous.
                </h2>
                <p className="mortel-text text-white text-[1.2em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                  Une fois la déclaration de décès établie par un professionnel habilité (médecin, établissement),
                  nous prenons le relais pour organiser l’ensemble des démarches nécessaires.
                  Vous n’avez rien à faire. Tout est pris en charge, et chaque étape est suivie en toute transparence.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <p className="text-white text-lg font-inter font-semibold">Ce que nous gérons :</p>
                  <ul className="texte-normal list-disc list-inside space-y-1">
                    <li>Transport du défunt</li>
                    <li>Demandes d’autorisations (crémation, inhumation…)</li>
                    <li>Coordination avec les mairies et services concernés</li>
                    <li>Suivi et documentation claire, au fil du processus</li>
                  </ul>
                </div>
              </div>

              {/* CTA bien espacés */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                <button className="btn-principal">Préparer</button>
                <button className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* En desktop uniquement : déplace la vidéo à droite */}
            <div className="hidden md:flex flex-1 h-[640px] overflow-hidden relative rounded-xl">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={admin_video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestionAdminSection;
