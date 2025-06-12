
import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Des obsèques{' '}
            <span className="text-primary">sereines</span>,<br />
            sans paperasse ni stress
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Nous accompagnons plus de 2000 familles chaque année avec transparence, 
            humanité et des solutions digitales innovantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={20} />
              <span>Appel gratuit immédiat</span>
            </a>
            
            <button className="flex items-center space-x-3 bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-200 font-semibold text-lg">
              <Calendar size={20} />
              <span>Programmer un rappel</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">⭐⭐⭐⭐⭐ Google</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+2000</div>
              <div className="text-muted-foreground">familles accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">disponibilité conseiller</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
