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
import NosPlus from '../components/NosPlus';
import NewFAQ from '../components/NewFAQ';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import PrevoirSection from '../components/PrevoirSection';
import verbatim1 from '../assets/verbatim_1.jpg';
import verbatim2 from '../assets/verbatim_2.jpg';
import verbatimVideo from '../assets/verbatim_1.mp4';

const Index = () => {
  const homepageFAQItems = [
    {
      question: "Comment se déroule l'organisation ?",
      answer: "Nous prenons en charge l'intégralité de la gestion administrative. Cela inclut la coordination des obsèques, de la prise en charge du défunt jusqu'à l'organisation complète. Vous êtes accompagné à chaque étape."
    },
    {
      question: "Quelles informations sont fournies ?",
      answer: "Nous fournissons toutes les informations nécessaires aux proches pour faciliter le processus. Cela inclut des mises à jour régulières et des ressources pour les aider à traverser cette période. Notre espace mémoire permet également de partager des souvenirs."
    },
    {
      question: "Comment gérer les proches ?",
      answer: "Nous offrons un soutien aux proches en leur fournissant des informations et des animations. Notre plateforme permet de créer un espace de mémoire partagé. Cela aide à fédérer les proches autour de la mémoire du défunt."
    },
    {
      question: "Quels services offrez-vous ?",
      answer: "Nous proposons une gestion complète des obsèques, y compris la prise en charge du défunt. Nos services incluent également la création de mémoriaux digitaux et le streaming des obsèques. Chaque service est conçu pour répondre aux besoins des familles."
    },
    {
      question: "Comment puis-je vous contacter ?",
      answer: "Vous pouvez nous contacter via notre formulaire en ligne. Nous sommes disponibles pour répondre à toutes vos questions. N'hésitez pas à nous solliciter, nous sommes là pour vous aider."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PricingSection />
      <OrganisationSection />
      <NewVerbatimSection 
        quote="« Le service proposé par Mortel a transformé notre expérience. Leur approche humaine et digitale a vraiment fait la différence dans un moment difficile. »"
        authorName="Alain"
        imageSrc={verbatim1}
        imageAlt="Témoignage client Alain"
      />
      <GestionAdminSection />
      <SereniteProche />
      <NewVerbatimSection 
        quote="« Mortel nous a accompagnés avec une grande humanité. Le streaming des obsèques a permis à toute la famille de se rassembler malgré la distance. »"
        authorName="Marie"
        imageSrc={verbatimVideo}
        imageAlt="Témoignage client Marie"
      />
      <MemorySpaceNew />
      <NosPlus />
      <EngagementSection />
      <PrevoirSection />
      <NewFAQ 
        faqItems={homepageFAQItems}
        defaultOpenItem={0}
      />
      <Footer />
    </div>
  );
};

export default Index;
