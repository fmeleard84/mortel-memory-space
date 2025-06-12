
import React from 'react';
import { Heart, Shield, Check } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Humanité',
      description: 'Un accompagnement personnalisé avec des conseillers dédiés qui vous comprennent et vous soutiennent à chaque étape.',
      features: ['Conseiller dédié 24/7', 'Écoute empathique', 'Soutien émotionnel']
    },
    {
      icon: Check,
      title: 'Sérénité',
      description: 'Nous gérons toutes les démarches administratives et organisationnelles pour que vous puissiez vous concentrer sur l\'essentiel.',
      features: ['Démarches simplifiées', 'Suivi en temps réel', 'Process clarifié']
    },
    {
      icon: Shield,
      title: 'Transparence',
      description: 'Des tarifs clairs dès le départ, aucun coût caché, et un suivi transparent de toutes les étapes.',
      features: ['Tarifs fixes annoncés', 'Pas de surprise', 'Communication claire']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Notre promesse en 3 piliers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche révolutionnaire qui place l'humain au cœur du service funéraire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={32} className="text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
