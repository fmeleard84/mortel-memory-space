
import React from 'react';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';

const ConsultantSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Phone size={16} className="text-primary" />
              <span className="text-primary font-medium">Contact immédiat</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nos conseillers vous accompagnent immédiatement
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Disponibles 24/7, nos experts vous guident avec empathie et professionnalisme. 
              Nous venons à vous ou organisons un rendez-vous à l'heure et au jour de votre choix.
            </p>

            {/* Service highlights */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Disponibilité 24/7</h3>
                  <p className="text-muted-foreground">Joignables à tout moment, jour et nuit, weekends et jours fériés</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Déplacement à domicile</h3>
                  <p className="text-muted-foreground">Nous venons chez vous ou dans le lieu de votre choix</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Rendez-vous flexible</h3>
                  <p className="text-muted-foreground">Choisissez l'heure et le jour qui vous conviennent le mieux</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33123456789"
                className="flex items-center justify-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold"
              >
                <Phone size={20} />
                <span>Contact immédiat</span>
              </a>
              <button className="flex items-center justify-center space-x-3 border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-200 font-semibold">
                <Calendar size={20} />
                <span>Demander un rappel</span>
              </button>
            </div>
          </div>

          {/* Right - Consultant Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Main consultant card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">AM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Anne-Marie Dubois</h3>
                    <p className="text-muted-foreground">Conseillère senior</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Je vous accompagne avec empathie et professionnalisme dans cette période difficile."
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Disponible maintenant</span>
                  </span>
                  <span>15+ ans d'expérience</span>
                </div>
              </div>

              {/* Secondary consultant card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-muted rounded-full flex items-center justify-center">
                    <span className="text-foreground font-semibold text-lg">PL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Pierre Lefèvre</h3>
                    <p className="text-muted-foreground">Conseiller spécialisé</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Expert en démarches administratives et organisation de cérémonies."
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Disponible maintenant</span>
                  </span>
                  <span>10+ ans d'expérience</span>
                </div>
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
              En ligne 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantSection;
