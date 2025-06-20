import React from 'react';
import { ChevronRight, Leaf, CreditCard, Shield, Users } from 'lucide-react';

const EngagementSection = () => {
  const leftEngagements = [
    {
      icon: Leaf,
      title: "Écoresponsable",
      description: "Une approche sobre et durable, centrée sur la crémation, pour un hommage respectueux de l'environnement."
    },
    {
      icon: CreditCard,
      title: "Accessible",
      description: "Paiement en plusieurs fois sans frais cachés, pour rendre nos services accessibles à tous."
    }
  ];

  const rightEngagements = [
    {
      icon: Shield,
      title: "Sécurité & confidentialité",
      description: "Données protégées et documents centralisés pour garantir la sécurité de vos informations personnelles."
    },
    {
      icon: Users,
      title: "Présence humaine",
      description: "Un interlocuteur unique, disponible à chaque étape pour vous accompagner avec attention et empathie."
    }
  ];

  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">

          {/* Header */}
          <div className="w-full max-w-[768px] mx-auto flex flex-col gap-4">
            <div className="flex justify-center">
              <span className="etiquette">Engagements</span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-center mortel-titre-hero text-white">
                Nos convictions guident nos actions
              </h2>
              <p className="mortel-text text-white text-center">
                Nous croyons en une approche écoresponsable et humaine. Chaque étape de notre service est pensée pour respecter vos valeurs.
              </p>
            </div>
          </div>

          {/* Main Content - Three columns layout */}
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-16">
              {leftEngagements.map((engagement, index) => (
                <div key={index} className="flex flex-col items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <engagement.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-center text-white text-2xl font-outfit font-normal leading-[33.6px]">
                      {engagement.title}
                    </h3>
                    <p className="text-center texte-normal">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Image */}
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=540&h=540&fit=crop"
                alt="Nos engagements"
                className="w-[340px] h-[340px] lg:w-[540px] lg:h-[540px] object-cover rounded-[40px]"
              />
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-16">
              {rightEngagements.map((engagement, index) => (
                <div key={index} className="flex flex-col items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <engagement.icon className="w-9 h-9 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-center text-white text-2xl font-outfit font-normal leading-[33.6px]">
                      {engagement.title}
                    </h3>
                    <p className="text-center texte-normal">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="btn-principal">
              En savoir plus
            </button>
            <button className="btn-secondaire group">
              <span>Contact</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
