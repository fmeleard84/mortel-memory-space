
import React from 'react';

const AccompagnementSection = () => {
  return (
    <section className="w-full bg-white py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[1280px] mx-auto bg-mortel-dark-secondary p-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          {/* Colonne gauche - Contenu */}
          <div className="flex-1 px-6 md:px-12 lg:px-12 py-8 lg:py-12 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 
                className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[57.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Accompagnement funéraire personnalisé
              </h2>
              <p 
                className="text-white text-lg leading-[27px]"
                style={{ fontFamily: 'Inter' }}
              >
                Inscrivez-vous pour bénéficier d'un soutien adapté à vos besoins administratifs après un décès.
              </p>
            </div>
            
            {/* Formulaire d'inscription */}
            <div className="max-w-[513px] flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="flex-1 h-11 px-3 py-2 bg-white/10 text-white placeholder:text-white/60 text-base leading-6 outline-none border border-transparent focus:border-mortel-green transition-colors"
                  style={{ fontFamily: 'Inter' }}
                />
                <button 
                  className="px-6 py-2.5 bg-mortel-green text-white text-base font-normal leading-6 hover:bg-mortel-green/90 transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'Inter' }}
                >
                  S'inscrire
                </button>
              </div>
              <p 
                className="text-neutral-400 text-xs leading-[18px]"
                style={{ fontFamily: 'Inter' }}
              >
                En cliquant sur S'inscrire, vous confirmez votre accord avec nos Conditions Générales.
              </p>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full min-h-[410px]">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=615&h=410&fit=crop"
              alt="Accompagnement funéraire personnalisé"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompagnementSection;
