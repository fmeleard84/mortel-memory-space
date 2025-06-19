import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Button } from './ui/button';
import { Check, Minus } from 'lucide-react';

const PricingSection = () => {
  const [paymentMode, setPaymentMode] = useState<'1x' | '4x' | '12x'>('4x');
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredKey, setHoveredKey] = useState<'epure' | 'presence' | 'signature' | null>(null);

  const basePrices = {
    epure: 2850,
    presence: 3650,
    signature: 4500,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const calculatePrice = (basePrice: number) => {
    if (paymentMode === '4x') return Math.round((basePrice / 4) * 100) / 100;
    if (paymentMode === '12x') return Math.round((basePrice / 12) * 100) / 100;
    return basePrice;
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);

  const getPaymentLabel = () => {
    return paymentMode === '1x'
      ? 'Paiement en une fois'
      : paymentMode === '4x'
      ? 'Paiement en 4 fois'
      : 'Paiement en 12 fois';
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


  const CarouselDots = ({ images }: { images: string[] }) => (
    <div className="flex justify-center gap-2 mt-4">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === activeSlide ? 'bg-mortel-blue' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );

 const renderCard = (title: string, key: 'epure' | 'presence' | 'signature') => {
    const isSelected = key === 'presence' || hoveredKey === key;

    return (
      <div
        onMouseEnter={() => setHoveredKey(key)}
        onMouseLeave={() => setHoveredKey(null)}
        className={`group relative bg-mortel-dark-secondary p-8 border transition-all duration-300
          ${isSelected ? 'border-2 border-mortel-blue shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'border-gray-700'}`}
      >
        {key === 'presence' && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-mortel-blue text-white px-4 py-1 rounded-full text-xs font-medium">
              Notre recommandation
            </span>
          </div>
        )}

        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h3 className="text-xl font-heading font-light uppercase text-white mb-4">{title}</h3>

            <Carousel className="w-full max-w-xs mx-auto mb-2">
              <CarouselContent>
                {propositionImages[key].map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt={`${title} - Image ${index + 1}`} className="w-full h-[220px] object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <CarouselDots images={propositionImages[key]} />
            <p className="text-gray-300 text-sm mt-4">
              {key === 'epure' ? "L'essentiel avec soin" : key === 'presence' ? 'Un accompagnement renforcé' : 'Une cérémonie personnalisée'}
            </p>
            <div className="text-3xl font-bold text-white mb-2">{formatPrice(calculatePrice(basePrices[key]))}</div>
            <p className="text-xs text-gray-400">{getPaymentLabel()}</p>
          </div>

          <div className="space-y-3">
            {features[key].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                {feature.included ? (
                  <Check className="w-4 h-4 text-mortel-green" />
                ) : (
                  <Minus className="w-4 h-4 text-gray-500" />
                )}
                <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>{feature.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mt-6">
            <Button variant="ghost" className={`w-full transition-all duration-200 ${isSelected ? 'btn-principal' : 'btn-inactif'}`}>
              Choisir {title}
            </Button>
            <a href={`#details-${key}`} className="text-sm text-gray-300 hover:text-white underline">
              Personnaliser {title}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="organisation" className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="mortel-titre-hero text-white">
              Des propositions claires
            </h2>
            <p className="mortel-text text-white">
              Une organisation lisible, des tarifs transparents, une personalisation sur mesure.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex bg-mortel-dark-secondary rounded-full p-1 border border-gray-700">
              {['1x', '4x', '12x'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setPaymentMode(mode as '1x' | '4x' | '12x')}
                  className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    paymentMode === mode
                      ? 'bg-mortel-blue text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {mode === '1x' ? '1 fois' : mode}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {renderCard('Épure', 'epure')}
            {renderCard('Présence', 'presence')}
            {renderCard('Signature', 'signature')}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="link" className="text-gray-300 hover:text-white underline underline-offset-4">
              Comparer les propositions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;