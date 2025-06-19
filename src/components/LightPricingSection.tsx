import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Button } from './ui/button';

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

const calculatePrice = (base: number) => {
  const divided = base / 4;
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(divided);
};

const LightPricingSection = () => {
  return (
    <section className="w-full bg-mortel-dark py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['epure', 'presence', 'signature'].map((key) => (
            <div key={key} className="bg-mortel-dark-secondary p-6 border border-gray-700 flex flex-col items-center text-center">
              <h3 className="text-xl font-light uppercase text-white mb-4">{key === 'epure' ? 'Épure' : key === 'presence' ? 'Présence' : 'Signature'}</h3>

              <Carousel className="w-full max-w-xs mx-auto mb-2">
                <CarouselContent>
                  {propositionImages[key].map((img, idx) => (
                    <CarouselItem key={idx}>
                      <img src={img} alt={`image ${idx}`} className="w-full h-[200px] object-cover" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <p className="text-gray-300 text-sm mt-4">{descriptions[key]}</p>
              <div className="text-2xl font-bold text-white mt-2">{calculatePrice(basePrices[key])}</div>
              <p className="text-xs text-gray-400 mb-6">Paiement en 4 fois</p>

              <div className="flex flex-col gap-2 w-full">
                <Button variant="ghost" className="w-full btn-principal">Choisir {key === 'epure' ? 'Épure' : key === 'presence' ? 'Présence' : 'Signature'}</Button>
                <a href={`#details-${key}`} className="text-sm text-gray-300 hover:text-white underline">Personnaliser</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-white max-w-4xl mx-auto text-lg leading-relaxed mt-12">
          Toutes nos propositions sont conçues avec la même exigence : qualité, dignité et respect des volontés de chacun. Elles incluent un accompagnement humain 24/7, la prise en charge complète des démarches administratives, une information fluide pour les proches, et un engagement sincère pour l’environnement. Notre transparence est totale : aucun frais caché, aucun supplément inattendu. <a href="#valeurs" className="underline hover:text-mortel-blue transition">En savoir plus sur nos valeurs</a>.
        </div>
      </div>
    </section>
  );
};

export default LightPricingSection;