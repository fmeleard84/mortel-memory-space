
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const EtapesSection = () => {
  return (
    <section className="w-full bg-mortel-dark-secondary py-28 px-16">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Colonne gauche - Contenu principal */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <span 
                  className="text-mortel-blue text-lg leading-[27px]"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  Étapes
                </span>
              </div>
              <h2 
                className="text-white text-5xl font-normal leading-[57.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Notre objectif,<br/>vous aider
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                className="px-6 py-2.5 bg-mortel-blue flex justify-center items-center gap-2 hover:bg-mortel-blue/90 transition-colors"
              >
                <span 
                  className="text-base font-normal leading-6"
                  style={{ 
                    fontFamily: 'Source Sans 3',
                    color: '#E9E9E9'
                  }}
                >
                  Commencer
                </span>
              </button>
              <button className="px-0 py-2.5 bg-transparent flex justify-center items-center gap-3 hover:bg-white/5 transition-colors">
                <span 
                  className="text-white text-base font-normal leading-6"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  En savoir plus
                </span>
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Colonne droite - Étapes */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Étape 1 */}
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FileText className="w-9 h-10 text-white" />
                </div>
                <div className="w-0 h-25 border-l border-white/20"></div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 
                  className="text-white text-xl font-normal leading-7"
                  style={{ fontFamily: 'Inter' }}
                >
                  Étape 1
                </h3>
                <p 
                  className="text-white text-base font-normal leading-6"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  Inscrivez vous, en 1 clic
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FileText className="w-9 h-10 text-white" />
                </div>
                <div className="w-0 h-25 border-l border-white/20"></div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 
                  className="text-white text-xl font-normal leading-7"
                  style={{ fontFamily: 'Inter' }}
                >
                  Étape 2
                </h3>
                <p 
                  className="text-white text-base font-normal leading-6"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  Transmettez nous votre justificatif de décès en 2 clics
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FileText className="w-9 h-10 text-white" />
                </div>
                <div className="w-0 h-25 border-l border-white/20"></div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 
                  className="text-white text-xl font-normal leading-7"
                  style={{ fontFamily: 'Inter' }}
                >
                  Étape 3
                </h3>
                <p 
                  className="text-white text-base font-normal leading-6"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  C'est fini, nous prenons le relais, vous n'avez plus à vous en soucier.<br/>
                  Nous vous tenons informé en temps réel de l'avancement administratif.
                </p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <FileText className="w-9 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 
                  className="text-white text-xl font-normal leading-7"
                  style={{ fontFamily: 'Inter' }}
                >
                  Étape 4
                </h3>
                <p 
                  className="text-white text-base font-normal leading-6"
                  style={{ fontFamily: 'Source Sans 3' }}
                >
                  Vous choisissez et personnalisez l'hommage que vous souhaitez adresser à votre proche, parmi notre sélection respectueuse de l'environnement et économiquement adaptée à chaque budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesSection;
