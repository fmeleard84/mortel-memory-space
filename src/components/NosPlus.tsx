import React from 'react';
import { ChevronRight, Heart, Users, Headphones } from 'lucide-react';

const NosPlus = () => {
  const features = [
    {
      icon: Heart,
      title: "Mur hommage digital",
      subtitle: "Un espace pour partager souvenirs et émotions.",
      description: "Partagez uniquement avec vos proches pour préserver l'intimité des souvenirs.",
      ctaText: "Découvrir"
    },
    {
      icon: Users,
      title: "Jumeau numérique",
      subtitle: "Un hommage vivant basé sur vos souvenirs.",
      description: "Un hommage respectueux et personnalisé, accessible à ceux qui le souhaitent.",
      ctaText: "Explorer"
    },
    {
      icon: Headphones,
      title: "À votre écoute 24/7",
      subtitle: "Nous allions humanité et technologie pour un hommage authentique.",
      description: "Mortel redéfinit l'hommage en intégrant des solutions numériques innovantes.",
      ctaText: "En savoir plus"
    }
  ];

  return (
    <section className="w-full bg-mortel-dark-secondary">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
          
          {/* Header */}
          <div className="flex justify-center">
            <span className="etiquette">Nos plus</span>
          </div>

          {/* Main Title */}
          <div className="w-full max-w-[768px] mx-auto">
            <h2 className="text-center mortel-titre-hero text-white">
              Un service enrichi pour créer du lien durable.
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-8">
                
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 text-center">
                  <h3 className="text-mortel-blue text-2xl font-bold font-outfit leading-loose mb-2">
                    {feature.title}
                  </h3>
                  <p className="mortel-text text-white">
                    {feature.subtitle}
                  </p>
                  <p className="texte-normal">
                    {feature.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                  <button className="btn-secondaire group">
                    <span>{feature.ctaText}</span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosPlus;
