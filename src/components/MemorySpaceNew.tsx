
import React from 'react';
import { ChevronRight } from 'lucide-react';

const MemorySpaceNew = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="etiquette">
                      Espace mémoire
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="mortel-titre-hero text-white">
                      Invitez famille & amis à partager photos, vidéos et messages.
                    </h2>
                    <p className="mortel-text text-white">
                      Partagez des des photos, des vidéos des enregistrement audio et des messages pour que la mémoire vive éternellement.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-2">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-3 h-3 bg-neutral-400"></div>
                    </div>
                    <span className="texte-normal">
                      Accès sécurisé et illimité à votre espace mémoire.
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-3 h-3 bg-neutral-400"></div>
                    </div>
                    <span className="texte-normal">
                      Invitez vos proches à partager leurs souvenirs.
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-3 h-3 bg-neutral-400"></div>
                    </div>
                    <span className="texte-normal">
                      Créez votre espace en moins de 90 secondes.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="btn-principal">
                    Préparer
                  </button>
                  <button className="btn-secondaire group">
                    <span>Voir un exemple</span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                className="w-full h-[640px] object-cover" 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=640&fit=crop"
                alt="Espace mémoire"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySpaceNew;
