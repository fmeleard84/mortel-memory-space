
import React from 'react';
import Navigation from '../components/Navigation';
import SimplifieDemarcheHero from '../components/SimplifieDemarcheHero';
import EtapesSection from '../components/EtapesSection';
import Footer from '../components/Footer';

const SimplifieDemarches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimplifieDemarcheHero />
      <EtapesSection />
      <Footer />
    </div>
  );
};

export default SimplifieDemarches;
