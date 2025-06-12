
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AdvantagesHeroSection from '../components/AdvantagesHeroSection';
import PillarsSection from '../components/PillarsSection';
import TestimonialSection from '../components/TestimonialSection';
import ConsultantSection from '../components/ConsultantSection';
import MemorySpaceSection from '../components/MemorySpaceSection';
import AdvantagesSection from '../components/AdvantagesSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AdvantagesHeroSection />
      <PillarsSection />
      <TestimonialSection />
      <ConsultantSection />
      <MemorySpaceSection />
      <AdvantagesSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
