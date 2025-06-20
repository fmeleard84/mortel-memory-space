import React from 'react';
import { ChevronRight } from 'lucide-react';
import memory_video from '../assets/memory_video.mp4';

const MemorySpaceNew = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-16">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start gap-16">
          {/* Vidéo à droite sur desktop, en haut sur mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <video
              className="w-full h-full object-cover scale-[1.2] rounded-xl overflow-hidden"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={memory_video} type="video/mp4" />
            </video>
          </div>

          {/* Texte à gauche sur desktop, en bas sur mobile */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1">
            <span className="etiquette">Espace mémoire</span>

            <h2 className="mortel-titre-hero text-white">
              Invitez famille & amis à partager photos, vidéos et messages.
            </h2>

            <p className="mortel-text text-white">
              Partagez des photos, des vidéos, des enregistrements audio et des messages pour que la mémoire vive éternellement.
            </p>

            <div className="flex flex-col gap-4 py-2">
              {[
                "Accès sécurisé et illimité à votre espace mémoire.",
                "Invitez vos proches à partager leurs souvenirs.",
                "Créez votre espace en moins de 90 secondes.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-neutral-400"></div>
                  </div>
                  <span className="texte-normal">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
              <button className="btn-principal">Préparer</button>
              <button className="btn-secondaire group">
                <span>Voir un exemple</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySpaceNew;