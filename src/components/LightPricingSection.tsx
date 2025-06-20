
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const basePrices = {
  epure: 2850,
  presence: 3650,
  signature: 4500,
};

const descriptions = {
  epure: "L'essentiel avec soin",
  presence: "Un accompagnement renforcé",
  signature: "Une cérémonie personnalisée",
};

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
  ],
};

const LightPricingSection = () => {
  const [paymentMode, setPaymentMode] = useState<'1x' | '4x' | '12x'>('4x');
  const [hoveredKey, setHoveredKey] = useState<'epure' | 'presence' | 'signature' | null>(null);

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


const renderCard = (title: string, key: 'epure' | 'presence' | 'signature') => {
  const isHovered = hoveredKey === key;
  const isRecommended = key === 'presence';
  const overrideRecommendation = hoveredKey && hoveredKey !== key;
  const displayAsWhiteCard = isHovered || (isRecommended && !hoveredKey);

  return (
    <div
      onMouseEnter={() => setHoveredKey(key)}
      onMouseLeave={() => setHoveredKey(null)}
      className={`group relative p-6 border rounded-xl cursor-pointer transition-all duration-500 ease-in-out
      ${displayAsWhiteCard
        ? 'bg-white text-black border-mortel-blue border-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
        : 'bg-mortel-dark-secondary text-white border-gray-700'}
    `}
    >
      {/* Badge "Notre recommandation" */}
      {isRecommended && !hoveredKey && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-mortel-blue text-white px-4 py-1 rounded-full text-xs font-medium">
            Notre recommandation
          </span>
        </div>
      )}

      <div className="text-center flex flex-col items-center gap-4">
        <h3 className="text-xl font-light uppercase">{title}</h3>

        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {propositionImages[key].map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`${title} - Image ${index + 1}`} className="w-full h-[200px] object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <p className="text-sm">{descriptions[key]}</p>

        <div className="text-3xl font-bold">
          {formatPrice(calculatePrice(basePrices[key]))}
        </div>

        <p className={`text-xs ${displayAsWhiteCard ? 'text-gray-500' : 'text-gray-400'}`}>
          {getPaymentLabel()}
        </p>

        {/* CTA Alignés avec chevron animé */}
        <div className="flex justify-center gap-2 mt-6 w-full">

          <Button
            variant="ghost"
            className={`btn-principal transition-all duration-300 px-4 ${
              !displayAsWhiteCard ? 'btn-inactif' : ''
            }`}
          >
            Choisir {title}
          </Button>
          <a
            href={`#details-${key}`}
            className={`btn-secondaire group ${
              displayAsWhiteCard
                ? 'text-gray-700 hover:text-black'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <span>Personnaliser</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

  return (
    <section className="w-full bg-mortel-dark py-24 px-4">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Titre */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="mortel-titre-hero text-white">Des propositions claires</h2>
          <p className="mortel-text text-white">
            Une organisation lisible, des tarifs transparents, une personnalisation sur mesure.
          </p>
        </div>

        {/* Sélecteur de paiement */}
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

        {/* Offres allégées */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {renderCard('Épure', 'epure')}
          {renderCard('Présence', 'presence')}
          {renderCard('Signature', 'signature')}
        </div>

        {/* Texte de bas de page */}
        <div className="text-center text-white max-w-4xl mx-auto text-lg leading-relaxed mt-12">
          Toutes nos propositions sont conçues avec la même exigence : qualité, dignité et respect des volontés de chacun. Elles incluent un accompagnement humain 24/7, la prise en charge complète des démarches administratives, une information fluide pour les proches, et un engagement sincère pour l'environnement. Notre transparence est totale : aucun frais caché, aucun supplément inattendu.<br />
          <a href="#valeurs" className="underline hover:text-mortel-blue transition">En savoir plus sur nos valeurs</a>.
        </div>
      </div>
    </section>
  );
};

export default LightPricingSection;
