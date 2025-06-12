
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SimplifieDemarcheHero = () => {
  return (
    <section className="w-screen h-full flex flex-col justify-start items-start">
      <div className="w-full min-h-screen bg-mortel-dark flex flex-col justify-center">
        <div className="w-full flex-1 flex flex-col lg:flex-row justify-center items-stretch">
          
          {/* Colonne gauche - Contenu centré verticalement */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 
                className="text-white text-3xl md:text-4xl lg:text-[56px] font-inter font-normal leading-tight lg:leading-[67.20px] break-words"
                style={{ fontFamily: 'Inter' }}
              >
                Simplifiez vos démarches administratives.
              </h1>
              <p 
                className="text-white text-base md:text-lg font-normal leading-relaxed lg:leading-[27px] break-words"
                style={{ fontFamily: 'Source Sans 3', fontSize: '18px' }}
              >
                Nous sommes à vos côtés pour simplifier vos démarches, avant, pendant et après un décès. Nous vous soutenons à chaque étape, qu'elle soit administrative ou organisationnelle.
              </p>
          
              <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-5 w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto px-6 py-2.5 bg-mortel-blue rounded-none flex justify-center items-center gap-2 hover:bg-mortel-blue/90 transition-colors"
                  style={{ backgroundColor: '#2CC7E2' }}
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
                <button className="w-full sm:w-auto px-0 py-2.5 bg-transparent rounded-none flex justify-center items-center gap-3 hover:bg-white/5 transition-colors">
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
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full max-h-screen overflow-hidden">
            <img 
              className="w-full h-full object-cover object-center" 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop"
              alt="Simplification des démarches administratives"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifieDemarcheHero;
