
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Alain',
      location: 'Lyon',
      rating: 5,
      text: 'Le service proposé par eMortel a transformé notre expérience. Leur approche humaine et digitale a vraiment fait la différence dans un moment difficile.',
      avatar: 'AL'
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Marseille',
      rating: 5,
      text: 'Un service clair et humain, exactement ce dont nous avions besoin. Merci pour votre professionnalisme et votre empathie.',
      avatar: 'JM'
    },
    {
      name: 'Sophie Laurent',
      location: 'Paris',
      rating: 5,
      text: 'L\'espace mémoire est une idée géniale. Toute la famille peut contribuer et garder les souvenirs vivants.',
      avatar: 'SL'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 2000 familles nous ont fait confiance. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/20 p-8 rounded-2xl relative group hover:shadow-lg transition-all duration-300">
              <Quote size={24} className="text-primary/30 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating highlight */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/%3E%3Cpath fill='%2334A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/%3E%3Cpath fill='%23FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/%3E%3Cpath fill='%23EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/%3E%3C/svg%3E" alt="Google" className="w-8 h-8" />
            <div className="text-left">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">+200 avis Google</p>
            </div>
          </div>
          <p className="text-muted-foreground font-medium">
            Paiement échelonné sans frais • Service 24/7 • Transparence garantie
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
