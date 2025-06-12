
import React from 'react';

const VerbatimSection = () => {
  return (
    <section className="w-screen bg-mortel-dark-secondary overflow-hidden flex flex-col justify-start items-start">
      <div className="w-full px-4 md:px-8 lg:px-16 py-16 lg:py-28 flex justify-center items-start">
        <div className="flex-1 max-w-[1280px] flex flex-col justify-start items-start gap-12 lg:gap-20">
          <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-20">
            {/* Colonne gauche - Contenu */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8">
              <div className="w-full flex flex-col justify-start items-start gap-4 lg:gap-6">
                <h2 className="w-full text-white text-2xl md:text-3xl lg:text-[40px] font-inter font-light uppercase leading-tight lg:leading-[48px] tracking-wide lg:tracking-[0.80px] break-words">
                  Transformez vos obsèques avec notre service digital
                </h2>
                <p className="w-full text-gray-300 text-base md:text-lg font-inter font-light leading-relaxed lg:leading-[27px] tracking-wide lg:tracking-[0.36px] break-words">
                  Notre plateforme vous accompagne dans chaque étape des obsèques, allégeant ainsi votre charge administrative. Optez pour une cérémonie moderne et personnalisée, tout en restant connecté à vos proches.
                </p>
              </div>
              
              {/* Boutons */}
              <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-mortel-violet rounded-xl border border-mortel-violet flex justify-center items-center gap-2 hover:bg-mortel-violet/90 transition-colors">
                  <span className="text-white text-sm lg:text-base font-inter font-normal leading-6">
                    Réserver
                  </span>
                </button>
                <button className="w-full sm:w-auto px-4 lg:px-6 py-2.5 bg-mortel-violet/70 rounded-xl flex justify-center items-center gap-2 hover:bg-mortel-violet/60 transition-colors">
                  <span className="text-white text-sm lg:text-base font-inter font-normal leading-6">
                    Estimer
                  </span>
                </button>
              </div>
            </div>

            {/* Colonne droite - Image */}
            <div className="flex-1 w-full">
              <img 
                className="w-full h-[300px] md:h-[400px] lg:h-[600px] rounded-[20px] lg:rounded-[28px] object-cover" 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=600&fit=crop"
                alt="Service funéraire digital"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerbatimSection;
