
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EngagementSection from '../components/EngagementSection';
import NewVerbatimSection from '../components/NewVerbatimSection';
import GestionAdminSection from '../components/GestionAdminSection';
import OrganisationSection from '../components/OrganisationSection';
import AutoPromoService from '../components/AutoPromoService';
import SereniteProche from '../components/SereniteProche';
import MemorySpaceNew from '../components/MemorySpaceNew';
import NewFAQ from '../components/NewFAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EngagementSection />
      <NewVerbatimSection />
      <GestionAdminSection />
      <OrganisationSection />
      <AutoPromoService />
      <SereniteProche />
      <NewVerbatimSection />
      <MemorySpaceNew />
      <NewFAQ />
      <Footer />
    </div>
  );
};

export default Index;
