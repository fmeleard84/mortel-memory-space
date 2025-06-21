
import React from 'react';
import Navigation from '../components/Navigation';
import DemarchesHero from '../components/DemarchesHero';
import DemarchesSection from '../components/DemarchesSection';
import BlocConversionImmediat from '../components/BlocConversionImmediat';
import Footer from '../components/Footer';

const DemarchesAdministratives = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DemarchesHero />
      <DemarchesSection />
      <BlocConversionImmediat />
      <Footer />
    </div>
  );
};

export default DemarchesAdministratives;
