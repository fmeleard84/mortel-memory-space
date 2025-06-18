
import React from 'react';
import { ChevronRight, Clock, Users } from 'lucide-react';

const PrevoirSection = () => {
  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            
            {/* Left Column - Content */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <span className="text-mortel-blue text-base font-normal font-mono leading-normal">
                      Prévoir
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2 className="text-white text-3xl md:text-5xl font-normal font-inter leading-tight">
                      Anticiper pour alléger ceux que vous aimez
                    </h2>
                    <p className="text-white text-lg font-normal font-inter leading-relaxed">
                      Préparer vos volontés dès maintenant permet de garantir une organisation qui vous ressemble. Cela soulage également vos proches au moment où ils en ont le plus besoin.
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <div className="py-2 flex flex-col md:flex-row gap-6">
                    {/* Feature 1 */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Clock className="w-9 h-9 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-white text-xl font-normal font-inter leading-7">
                        Préparer maintenant
                      </h3>
                      <p className="text-gray-400 text-base font-normal font-inter leading-normal">
                        Assurez-vous que vos choix soient respectés et connus.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Users className="w-10 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-white text-xl font-normal font-inter leading-7">
                        Soulager vos proches
                      </h3>
                      <p className="text-gray-400 text-base font-normal font-inter leading-normal">
                        Facilitez la gestion des formalités pour ceux que vous aimez.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <button className="px-6 py-2.5 bg-mortel-blue text-white text-base font-normal font-inter leading-normal hover:shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-200">
                  Préparer
                </button>
                <button className="flex items-center gap-2 text-white text-base font-normal font-mono leading-normal hover:text-mortel-blue transition-colors">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=640&fit=crop"
                alt="Prévoir ses obsèques"
                className="w-full h-[640px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrevoirSection;
