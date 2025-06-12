
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EngagementSection from '../components/EngagementSection';
import NewVerbatimSection from '../components/NewVerbatimSection';
import GestionAdminSection from '../components/GestionAdminSection';
import OrganisationSection from '../components/OrganisationSection';
import AutoPromoService from '../components/AutoPromoService';
import AdvantagesHeroSection from '../components/AdvantagesHeroSection';
import PillarsSection from '../components/PillarsSection';
import TestimonialSection from '../components/TestimonialSection';
import ConsultantSection from '../components/ConsultantSection';
import MemorySpaceSection from '../components/MemorySpaceSection';
import AdvantagesSection from '../components/AdvantagesSection';
import AdvantagesSection2 from '../components/AdvantagesSection2';
import VerbatimSection from '../components/VerbatimSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
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
      <AdvantagesHeroSection />
      <PillarsSection />
      <TestimonialSection />
      <ConsultantSection />
      <MemorySpaceSection />
      <AdvantagesSection />
      <AdvantagesSection2 />
      <VerbatimSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
