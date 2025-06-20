
import React from 'react';
import Navigation from '../components/Navigation';
import DemarchesHero from '../components/DemarchesHero';
import Footer from '../components/Footer';

const DemarchesAdministratives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DemarchesHero />
      <Footer />
    </div>
  );
};

export default DemarchesAdministratives;
