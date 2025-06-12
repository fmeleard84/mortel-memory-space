
import React from 'react';
import Navigation from '../components/Navigation';
import SimplifieDemarcheHero from '../components/SimplifieDemarcheHero';
import Footer from '../components/Footer';

const SimplifieDemarches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimplifieDemarcheHero />
      <Footer />
    </div>
  );
};

export default SimplifieDemarches;
