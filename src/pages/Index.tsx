
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
import verbatim1 from '../assets/verbatim_1.jpg';
import verbatim2 from '../assets/verbatim_2.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EngagementSection />
      <NewVerbatimSection 
        quote="« Le service proposé par Mortel a transformé notre expérience. Leur approche humaine et digitale a vraiment fait la différence dans un moment difficile. »"
        authorName="Alain"
        imageSrc={verbatim1}
        imageAlt="Témoignage client Alain"
      />
      <GestionAdminSection />
      <OrganisationSection />
      <AutoPromoService />
      <SereniteProche />
      <NewVerbatimSection 
        quote="« Mortel nous a accompagnés avec une grande humanité. Le streaming des obsèques a permis à toute la famille de se rassembler malgré la distance. »"
        authorName="Marie"
        imageSrc={verbatim2}
        imageAlt="Témoignage client Marie"
      />
      <MemorySpaceNew />
      <NewFAQ />
      <Footer />
    </div>
  );
};

export default Index;
