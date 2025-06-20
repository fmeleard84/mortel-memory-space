import React from 'react';
import { ChevronRight } from 'lucide-react';
import memory_video from '../assets/memory_video.mp4';

const MemorySpaceSection = () => {
  return (
    <section id="espace-memoire" className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            {/* Colonne gauche */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Étiquette + Vidéo mobile */}
              <div className="flex flex-col gap-4">
                <span className="etiquette mb-2">Espace mémoire</span>

                {/* Vidéo visible uniquement sur mobile */}
                <div className="w-full h-[240px] md:h-0 md:hidden relative overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={memory_video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Titre, texte, liste */}
              <div className="flex flex-col gap-6 pt-2">
                <h2 className="mortel-titre-hero text-white">
                  Invitez famille & amis à partager photos, vidéos et messages.
                </h2>
                <p className="mortel-text text-white text-[1.2em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                  Partagez des photos, des vidéos, des enregistrements audio et des messages pour que la mémoire vive éternellement.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <ul className="texte-normal list-disc list-inside space-y-1">
                    <li>Accès sécurisé et illimité à votre espace mémoire.</li>
                    <li>Invitez vos proches à partager leurs souvenirs.</li>
                    <li>Créez votre espace en moins de 90 secondes.</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                <button className="btn-principal">Préparer</button>
                <button className="btn-secondaire group">
                  <span>Voir un exemple</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Colonne droite : vidéo desktop uniquement */}
            <div className="hidden md:flex flex-1 h-[640px] overflow-hidden relative">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={memory_video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySpaceSection;