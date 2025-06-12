
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SimplicitéSection = () => {
  return (
    <section className="w-full bg-mortel-dark py-28 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
        {/* Header section */}
        <div className="w-full max-w-[768px] flex flex-col gap-4">
          <div className="flex items-center">
            <span 
              className="text-mortel-green text-lg leading-[27px]"
              style={{ fontFamily: 'Inter' }}
            >
              Simplicité
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 
              className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[57.60px]"
              style={{ fontFamily: 'Inter' }}
            >
              Notre démarche à vos côtés
            </h2>
            <p 
              className="text-neutral-400 text-lg leading-[27px]"
              style={{ fontFamily: 'Inter' }}
            >
              Gérer un décès peut être difficile, déstabilisant ou confus lors des moments de deuil. <br/>
              C'est pour cela que nous sommes présents, pour vous accompagner avec le plus de simplicité et de bienveillance possible. Nous vous proposons une gestion entièrement externalisée de toutes les démarches administratives. <br/>
              Qu'il s'agisse de l'officialisation, de l'organisation des obsèques ou de la gestion des résiliations de contrats EDF, télécom, internet... nous nous en chargeons.
            </p>
          </div>
        </div>

        {/* Three columns section */}
        <div className="w-full flex flex-col gap-16">
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-12">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-6">
              <h3 
                className="text-mortel-green text-2xl lg:text-3xl font-normal leading-tight lg:leading-[41.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Une gestion simple et rapide
              </h3>
              <p 
                className="text-neutral-400 text-base leading-6"
                style={{ fontFamily: 'Inter' }}
              >
                Gestion administrative entièrement dématérialisée, comprenant des modèles de lettres, un suivi en temps réel, ainsi qu'une gestion des alertes en cas de nécessité. C'est facile et clair.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-6">
              <h3 
                className="text-mortel-green text-2xl lg:text-3xl font-normal leading-tight lg:leading-[41.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Assistance rapide et personnalisée
              </h3>
              <p 
                className="text-neutral-400 text-base leading-6"
                style={{ fontFamily: 'Inter' }}
              >
                Vous avez une interrogation ? Nous sommes disponibles 24 heures sur 24, 7 jours sur 7 si vous en avez besoin. Nous sommes à vos côtés.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-6">
              <h3 
                className="text-mortel-green text-2xl lg:text-3xl font-normal leading-tight lg:leading-[41.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Nous sommes là,<br/>même après...
              </h3>
              <p 
                className="text-neutral-400 text-base leading-6"
                style={{ fontFamily: 'Inter' }}
              >
                Notre gestion administrative ne se limite pas à la prise en charge du décès, nous sommes à vos côtés même par la suite, en nous occupant de la clôture administrative des divers contrats (EDF, télécom, internet...).
              </p>
            </div>
          </div>
        </div>

        {/* Buttons section */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <button 
            className="px-6 py-2.5 bg-mortel-green flex justify-center items-center gap-2 hover:bg-mortel-green/90 transition-all duration-300 hover:scale-105"
          >
            <span 
              className="text-gray-100 text-base font-normal leading-6"
              style={{ fontFamily: 'Inter' }}
            >
              Commencer
            </span>
          </button>
          <button className="py-2.5 bg-transparent flex justify-center items-center gap-3 hover:bg-white/5 transition-colors group">
            <span 
              className="text-white text-base font-normal leading-6 group-hover:text-mortel-green transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              En savoir plus
            </span>
            <ArrowRight className="w-6 h-6 text-white group-hover:text-mortel-green group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimplicitéSection;
