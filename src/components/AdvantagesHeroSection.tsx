
import React from 'react';

const AdvantagesHeroSection = () => {
  return (
    <section className="w-full px-16 py-28 bg-gradient-to-r from-[#313131] to-[#181B1F] overflow-hidden flex flex-col justify-start items-center gap-20">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
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
                  fontWeight: '400',
                  lineHeight: '48px',
                  wordWrap: 'break-word'
                }}
              >
                Découvrez nos avantages pour un service funéraire moderne et apaisant.
              </h2>
              <p 
                className="w-full break-words"
                style={{
                  color: 'var(--Gris-texte, #D4D4D4)',
                  fontSize: '18px',
                  fontFamily: 'Asap',
                  fontWeight: '400',
                  lineHeight: '27px',
                  wordWrap: 'break-word'
                }}
              >
                Nous prenons en charge toute la gestion administrative pour vous soulager dans ces moments difficiles. Organisez la cérémonie selon vos souhaits tout en préservant la mémoire du défunt grâce à notre espace numérique.
              </p>
            </div>
            
            {/* Statistiques */}
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <div className="w-full py-2 flex justify-start items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <div 
                    className="w-full break-words"
                    style={{
                      color: 'white',
                      fontSize: '48px',
                      fontFamily: 'Inter',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      lineHeight: '57.60px',
                      wordWrap: 'break-word'
                    }}
                  >
                    100%
                  </div>
                  <div 
                    className="w-full break-words"
                    style={{
                      color: 'var(--Gris-texte, #D4D4D4)',
                      fontSize: '16px',
                      fontFamily: 'Asap',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Gestion administrative simplifiée et entièrement en ligne.
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <div 
                    className="w-full break-words"
                    style={{
                      color: 'var(--Color-White, white)',
                      fontSize: '48px',
                      fontFamily: 'Inter',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      lineHeight: '57.60px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Unique
                  </div>
                  <div 
                    className="w-full break-words"
                    style={{
                      color: 'var(--Gris-texte, #D4D4D4)',
                      fontSize: '16px',
                      fontFamily: 'Asap',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Célébrez la vie avec notre mémoire numérique.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1">
            <img 
              className="w-full h-[640px] rounded-[50px] object-cover" 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=640&fit=crop"
              alt="Service funéraire moderne"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesHeroSection;
