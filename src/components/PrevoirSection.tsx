
import React from 'react';
import { ChevronRight, Clock, Users } from 'lucide-react';
import anticiperImg from '../assets/anticiper.jpg'; // Utilisation de l'image existante

const PrevoirSection = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-20">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-16">
            
            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2">
              <img 
                 src={anticiperImg}
                alt="Prévoir ses obsèques"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Left Column - Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-6">
                {/* Étiquette "prévoir" stylée */}
                <div className="etiquette">
                  Prévoir
                </div>

                {/* Titre et intro */}
                <h2 className="text-white text-2xl md:text-4xl font-normal font-sans leading-tight">
                  Anticiper pour alléger ceux que vous aimez
                </h2>
                <p className="text-white text-base font-normal font-sans leading-relaxed">
                  Préparer vos volontés dès maintenant permet de garantir une organisation qui vous ressemble. Cela soulage également vos proches au moment où ils en ont le plus besoin.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Feature 1 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white text-lg font-normal font-sans leading-6">
                      Préparer maintenant
                    </h3>
                    <p className="texte-normal">
                      Assurez-vous que vos choix soient respectés et connus.
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white text-lg font-normal font-sans leading-6">
                      Soulager vos proches
                    </h3>
                    <p className="texte-normal">
                      Facilitez la gestion des formalités pour ceux que vous aimez.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <button className="btn-principal">
                  Préparer
                </button>
                <button className="btn-secondaire group">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrevoirSection;
