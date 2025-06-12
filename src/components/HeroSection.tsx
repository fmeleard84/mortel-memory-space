
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-full flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch h-[900px] bg-[#191919] overflow-hidden flex flex-col justify-start items-center gap-20">
        <div className="self-stretch flex-1 flex justify-start items-start">
          <div className="flex-1 self-stretch pl-16 pr-20 flex flex-col justify-center items-end gap-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <h1 
                  className="self-stretch break-words"
                  style={{
                    color: 'white',
                    fontSize: '56px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '67.20px',
                    wordWrap: 'break-word'
                  }}
                >
                  Des obsèques sans tracas, en toute sérénité.
                </h1>
                <p 
                  className="self-stretch break-words"
                  style={{
                    color: 'white',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '27px',
                    wordWrap: 'break-word'
                  }}
                >
                  Nous vous accompagnons dans chaque étape de l'organisation des obsèques. Dites adieu à la paperasse et concentrez-vous sur l'essentiel.
                </p>
              </div>
              
              <div className="flex justify-start items-start gap-4">
                <button 
                  className="px-6 py-2.5 bg-white rounded-none border border-white flex justify-center items-center gap-2"
                >
                  <span 
                    style={{
                      color: 'black',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    En savoir plus
                  </span>
                </button>
                <button 
                  className="px-6 py-2.5 bg-[#30B0C7] rounded-none flex justify-center items-center gap-2"
                >
                  <span 
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '24px',
                      wordWrap: 'break-word'
                    }}
                  >
                    Urgence : Rappel immédiat
                  </span>
                </button>
              </div>
              
              <div className="flex justify-start items-center gap-9">
                <div className="w-[42.85px] h-[58.25px] relative">
                  <img 
                    className="w-[57px] h-[57px] absolute left-0 top-0 rounded-full border-2 border-white object-cover" 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=57&h=57&fit=crop&crop=face"
                    alt="Aline, conseillère disponible"
                  />
                </div>
                <div 
                  className="w-[359.36px] h-[29.63px] break-words"
                  style={{
                    color: 'white',
                    fontSize: '16px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}
                >
                  Aline, est actuellement disponible pour vous écouter
                </div>
              </div>
            </div>
          </div>
          <img 
            className="flex-1 self-stretch object-cover" 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=720&h=900&fit=crop"
            alt="Service funéraire serein"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
