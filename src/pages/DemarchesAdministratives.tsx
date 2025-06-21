
import React from 'react';
import Navigation from '../components/Navigation';
import DemarchesHero from '../components/DemarchesHero';
import DemarchesSection from '../components/DemarchesSection';
import Footer from '../components/Footer';

const DemarchesAdministratives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DemarchesHero />
      <DemarchesSection />
      <Footer />
    </div>
  );
};

export default DemarchesAdministratives;
