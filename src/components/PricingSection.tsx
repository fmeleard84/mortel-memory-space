
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { Check, Minus } from 'lucide-react';

const PricingSection = () => {
  const [paymentMode, setPaymentMode] = useState<'1x' | '4x' | '12x'>('4x');

  // Prix de base (en 1 fois)
  const basePrices = {
    epure: 2850,
    presence: 3650,
    signature: 4500
  };

  // Images placeholder pour les sliders
  const propositionImages = {
    epure: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    ],
    presence: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop'
    ],
    signature: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
    ]
  };

  // Calcul des prix selon le mode de paiement
  const calculatePrice = (basePrice: number) => {
    switch (paymentMode) {
      case '1x':
        return basePrice;
      case '4x':
        return Math.round((basePrice / 4) * 100) / 100;
      case '12x':
        return Math.round((basePrice / 12) * 100) / 100;
      default:
        return basePrice;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getPaymentLabel = () => {
    switch (paymentMode) {
      case '1x':
        return 'Paiement en une fois';
      case '4x':
        return 'Paiement en 4 fois';
      case '12x':
        return 'Paiement en 12 fois';
      default:
        return '';
    }
  };

  const features = {
    epure: [
      { name: 'Crémation incluse', included: true },
      { name: 'Démarches', included: true },
      { name: 'Organisation complète', included: true },
      { name: 'Suivi des proches', included: true },
      { name: 'Coordination dédiée', included: false },
      { name: 'Mur hommage numérique', included: false },
      { name: 'Lieu dédié', included: false },
      { name: 'Présence physique', included: false },
      { name: 'Personnalisation avancée', included: false }
    ],
    presence: [
      { name: 'Crémation incluse', included: true },
      { name: 'Démarches', included: true },
      { name: 'Organisation complète', included: true },
      { name: 'Suivi des proches', included: true },
      { name: 'Coordination dédiée', included: true },
      { name: 'Mur hommage numérique', included: true },
      { name: 'Lieu dédié', included: true },
      { name: 'Présence physique', included: true },
      { name: 'Personnalisation avancée', included: false }
    ],
    signature: [
      { name: 'Crémation incluse', included: true },
      { name: 'Démarches', included: true },
      { name: 'Organisation complète', included: true },
      { name: 'Suivi des proches', included: true },
      { name: 'Coordination dédiée', included: true },
      { name: 'Mur hommage numérique', included: true },
      { name: 'Lieu dédié', included: true },
      { name: 'Présence physique', included: true },
      { name: 'Personnalisation avancée', included: true }
    ]
  };

  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
          
          {/* En-tête */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-white text-3xl md:text-5xl font-heading font-normal leading-tight">
              Nos propositions claires
            </h2>
            <p className="text-gray-300 text-lg font-inter font-normal leading-[27px]">
              Une organisation lisible, des tarifs transparents.
            </p>
          </div>

          {/* Switch de paiement arrondi */}
          <div className="flex justify-center">
            <div className="flex bg-mortel-dark-secondary rounded-full p-1 border border-gray-700">
              <button
                onClick={() => setPaymentMode('1x')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  paymentMode === '1x'
                    ? 'bg-mortel-blue text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                1 fois
              </button>
              <button
                onClick={() => setPaymentMode('4x')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  paymentMode === '4x'
                    ? 'bg-mortel-blue text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                4 fois
              </button>
              <button
                onClick={() => setPaymentMode('12x')}
                className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                  paymentMode === '12x'
                    ? 'bg-mortel-blue text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                12 fois
              </button>
            </div>
          </div>

          {/* Grille des propositions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* L'Épure */}
            <div className="bg-mortel-dark-secondary rounded-[20px] p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">💠</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">L'Épure</h3>
                  
                  {/* Slider pour L'Épure */}
                  <Carousel className="w-full max-w-xs mx-auto mb-6">
                    <CarouselContent>
                      {propositionImages.epure.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`L'Épure - Image ${index + 1}`}
                            className="w-full h-40 object-cover rounded-[20px]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-gray-600" />
                    <CarouselNext className="text-white border-gray-600" />
                  </Carousel>
                  
                  <p className="text-gray-300 text-sm mb-4">L'essentiel avec soin</p>
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatPrice(calculatePrice(basePrices.epure))}
                  </div>
                  <p className="text-xs text-gray-400">{getPaymentLabel()}</p>
                </div>

                <div className="space-y-3">
                  {features.epure.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-mortel-green" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-500" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 bg-transparent border-gray-600 text-white hover:bg-gray-800"
                >
                  Choisir L'Épure
                </Button>
              </div>
            </div>

            {/* La Présence (Recommandée) */}
            <div className="bg-mortel-dark-secondary rounded-[20px] p-8 border-2 border-mortel-blue relative hover:border-opacity-80 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-mortel-blue text-white px-4 py-1 rounded-full text-xs font-medium">
                  ⭐ Notre recommandation
                </span>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚫</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">La Présence</h3>
                  
                  {/* Slider pour La Présence */}
                  <Carousel className="w-full max-w-xs mx-auto mb-6">
                    <CarouselContent>
                      {propositionImages.presence.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`La Présence - Image ${index + 1}`}
                            className="w-full h-40 object-cover rounded-[20px]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-gray-600" />
                    <CarouselNext className="text-white border-gray-600" />
                  </Carousel>
                  
                  <p className="text-gray-300 text-sm mb-4">Un accompagnement renforcé</p>
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatPrice(calculatePrice(basePrices.presence))}
                  </div>
                  <p className="text-xs text-gray-400">{getPaymentLabel()}</p>
                </div>

                <div className="space-y-3">
                  {features.presence.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-mortel-green" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-500" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full mt-6 bg-mortel-blue hover:bg-mortel-blue/90 text-white"
                >
                  Choisir La Présence
                </Button>
              </div>
            </div>

            {/* La Signature */}
            <div className="bg-mortel-dark-secondary rounded-[20px] p-8 border border-gray-700 hover:border-mortel-green transition-all duration-300">
              <div className="flex flex-col gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚪</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">La Signature</h3>
                  
                  {/* Slider pour La Signature */}
                  <Carousel className="w-full max-w-xs mx-auto mb-6">
                    <CarouselContent>
                      {propositionImages.signature.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`La Signature - Image ${index + 1}`}
                            className="w-full h-40 object-cover rounded-[20px]"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-gray-600" />
                    <CarouselNext className="text-white border-gray-600" />
                  </Carousel>
                  
                  <p className="text-gray-300 text-sm mb-4">Une cérémonie personnalisée</p>
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatPrice(calculatePrice(basePrices.signature))}
                  </div>
                  <p className="text-xs text-gray-400">{getPaymentLabel()}</p>
                </div>

                <div className="space-y-3">
                  {features.signature.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-mortel-green" />
                      ) : (
                        <Minus className="w-4 h-4 text-gray-500" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 bg-transparent border-mortel-green text-mortel-green hover:bg-mortel-green hover:text-mortel-dark"
                >
                  Choisir La Signature
                </Button>
              </div>
            </div>
          </div>

          {/* Boutons d'action globaux */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button className="px-6 py-2.5 bg-mortel-blue text-white hover:bg-mortel-blue/90 transition-colors">
              Voir le détail de chaque proposition
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white underline underline-offset-4">
              Comparer les services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
