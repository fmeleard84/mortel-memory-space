import React from 'react';
import { ChevronRight } from 'lucide-react';

const GestionAdminSection = () => {
  return (
    <section className="w-full bg-mortel-dark-secondary">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="w-full h-[640px] flex flex-col md:flex-row items-center gap-20">
            {/* Colonne gauche */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <span className="etiquette">
                    Sérénité
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-white text-2xl md:text-4xl font-normal font-sans leading-tight">
                    Démarches administratives simplifiées : nous gérons tout pour vous.
                  </h2>
                  <p className="text-white text-lg font-inter font-normal leading-[27px]">
                    Une fois la déclaration de décès établie par un professionnel habilité (médecin, établissement),
                    nous prenons le relais pour organiser l’ensemble des démarches nécessaires.
                    Vous n’avez rien à faire. Tout est pris en charge, et chaque étape est suivie en toute transparence.
                  </p>

                  {/* ✅ Ajout du bloc "Ce que nous gérons" */}
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
              </div>

              {/* CTA */}
              <div className="btn-principal">
                <button className="btn-secondaire group">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                <button className="over:bg-mortel-green/90 transition-colors">
                  Contactez-nous
                </button>
              </div>
            </div>

            {/* Colonne droite - Image */}
            <div className="flex-1 h-[640px]">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=640&fit=crop"
                alt="Gestion administrative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestionAdminSection;
