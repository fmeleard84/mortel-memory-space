
import React from 'react';
import Navigation from '../components/Navigation';
import SimplifieDemarcheHero from '../components/SimplifieDemarcheHero';
import DynamicTimeline from '../components/DynamicTimeline';
import SimplicitéSection from '../components/SimplicitéSection';
import NewVerbatimSection from '../components/NewVerbatimSection';
import AccompagnementSection from '../components/AccompagnementSection';
import Footer from '../components/Footer';
import verbatim3 from '../assets/verbatim_3.jpg';

const SimplifieDemarches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimplifieDemarcheHero />
      <DynamicTimeline />
      <SimplicitéSection />
      <NewVerbatimSection 
        quote="Je ne savais pas par où commencer. Tout allait trop vite. Avec Mortel, j'ai eu une réponse immédiate, un humain, pas un robot. On m'a écoutée, guidée, et surtout soulagée. Tout était clair, digne, respectueux. Pour une fois, je n'ai pas eu à me battre dans un moment déjà assez dur."
        authorName="Marylin"
        imageSrc={verbatim3}
        imageAlt="Témoignage de Marylin"
      />
      <AccompagnementSection />
      <Footer />
    </div>
  );
};

export default SimplifieDemarches;
