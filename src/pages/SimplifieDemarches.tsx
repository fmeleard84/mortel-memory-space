
import React from 'react';
import Navigation from '../components/Navigation';
import SimplifieDemarcheHero from '../components/SimplifieDemarcheHero';
import DynamicTimeline from '../components/DynamicTimeline';
import Footer from '../components/Footer';

const SimplifieDemarches = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimplifieDemarcheHero />
      <DynamicTimeline />
      <Footer />
    </div>
  );
};

export default SimplifieDemarches;
