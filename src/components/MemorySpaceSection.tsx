
import React from 'react';
import { Heart, Image, Video, Calendar, Shield } from 'lucide-react';

const MemorySpaceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Heart size={16} className="text-primary" />
              <span className="text-primary font-medium">Innovation émotionnelle</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Un espace mémoire qui fait vivre les souvenirs, pour toujours
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Invitez famille & amis à partager photos, vidéos et messages dans un lieu 
              numérique sécurisé. Accès illimité pour que la mémoire ne s'éteigne jamais.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Image, text: 'Galerie photos & vidéos illimitée' },
                { icon: Video, text: 'Messages vocaux et vidéo personnalisés' },
                { icon: Calendar, text: 'Capsules temporelles programmées' },
                { icon: Shield, text: 'Chiffrement AES-256, hébergement français' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold">
                Créer mon espace gratuit
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-200 font-semibold">
                Voir un exemple
              </button>
            </div>
          </div>

          {/* Right Content - Mock-up */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              {/* Mock interface */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                    <Heart size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">En mémoire de Marie</h3>
                    <p className="text-sm text-muted-foreground">1952 - 2024</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg"></div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">"Un message d'amour de sa fille..."</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">"Souvenirs partagés par la famille..."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white px-3 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-primary">+24 contributions</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white px-3 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium text-primary">🔒 Sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemorySpaceSection;
