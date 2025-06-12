
import React from 'react';

const VerbatimSection = () => {
  return (
    <section className="w-full bg-[#1F1B23] overflow-hidden flex flex-col justify-start items-start">
      <div className="w-full px-16 py-28 flex justify-center items-start gap-20">
        <div className="flex-1 max-w-[1280px] flex flex-col justify-start items-start gap-20">
          <div className="w-full flex justify-start items-center gap-20">
            {/* Colonne gauche - Contenu */}
            <div className="flex-1 flex flex-col justify-start items-start gap-8">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <h2 
                  className="w-full break-words"
                  style={{
                    color: 'white',
                    fontSize: '40px',
                    fontFamily: 'Inter',
                    fontWeight: '300',
                    textTransform: 'uppercase',
                    lineHeight: '48px',
                    letterSpacing: '0.80px',
                    wordWrap: 'break-word'
                  }}
                >
                  Transformez vos obsèques avec notre service digital
                </h2>
                <p 
                  className="w-full break-words"
                  style={{
                    color: 'var(--Gris-texte, #D4D4D4)',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: '300',
                    lineHeight: '27px',
                    letterSpacing: '0.36px',
                    wordWrap: 'break-word'
                  }}
                >
                  Notre plateforme vous accompagne dans chaque étape des obsèques, allégeant ainsi votre charge administrative. Optez pour une cérémonie moderne et personnalisée, tout en restant connecté à vos proches.
                </p>
              </div>
              
              {/* Boutons */}
              <div className="flex justify-start items-start gap-4">
                <button 
                  className="px-6 py-2.5 bg-[#8A2BE2] rounded-xl border border-[#8A2BE2] flex justify-center items-center gap-2"
                  style={{
                    outline: '1px #8A2BE2 solid'
                  }}
                >
                  <span 
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Asap',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Réserver
                  </span>
                </button>
                <button 
                  className="px-6 py-2.5 bg-[#AD6AEA] rounded-xl flex justify-center items-center gap-2"
                  style={{
                    outline: '1px rgba(255, 255, 255, 0) solid'
                  }}
                >
                  <span 
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Asap',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Estimer
                  </span>
                </button>
              </div>
            </div>

            {/* Colonne droite - Image */}
            <div className="flex-1">
              <img 
                className="w-full h-[600px] rounded-[28px] object-cover" 
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
