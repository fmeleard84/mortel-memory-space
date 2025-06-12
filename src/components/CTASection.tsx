
import React from 'react';
import { Phone, Calendar, Clock, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à vous faire accompagner avec sérénité ?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Nos conseillers sont disponibles immédiatement pour vous guider dans cette période difficile. 
            Contactez-nous dès maintenant ou programmez un rappel.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="tel:+33123456789"
              className="flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg"
            >
              <Phone size={20} />
              <span>Appel gratuit immédiat</span>
            </a>
            
            <button className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 font-semibold text-lg">
              <Calendar size={20} />
              <span>Programmer un rappel</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Disponible 24/7</h3>
              <p className="text-white/80 text-sm">Réponse garantie en moins de 30 minutes</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Sans engagement</h3>
              <p className="text-white/80 text-sm">Premier échange gratuit et confidentiel</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">4.9</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Excellence reconnue</h3>
              <p className="text-white/80 text-sm">+2000 familles satisfaites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
