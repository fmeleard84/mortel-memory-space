
import React from 'react';
import Navigation from '../components/Navigation';
import SimplifieDemarcheHero from '../components/SimplifieDemarcheHero';
import DynamicTimeline from '../components/DynamicTimeline';
import SimplicitéSection from '../components/SimplicitéSection';
import NewVerbatimSection from '../components/NewVerbatimSection';
import AccompagnementSection from '../components/AccompagnementSection';
import NewFAQ from '../components/NewFAQ';
import Footer from '../components/Footer';
import verbatim3 from '../assets/verbatim_3.jpg';

const SimplifieDemarches = () => {
  const demarchesFAQItems = [
    {
      question: "Quelles démarches prenez-vous en charge ?",
      answer: "Nous gérons l'ensemble des démarches administratives post-décès : déclaration de décès en mairie, demandes d'actes d'état civil, démarches auprès des organismes sociaux (CAF, Pôle emploi, retraites), résiliation des contrats (EDF, télécom, internet, assurances), succession et bien plus encore."
    },
    {
      question: "Combien de temps prennent les démarches administratives ?",
      answer: "La plupart des démarches urgentes sont traitées dans les 48h. Les démarches complètes peuvent prendre de quelques semaines à plusieurs mois selon leur complexité. Nous vous tenons informé de l'avancement en temps réel via votre espace personnel."
    },
    {
      question: "Ai-je besoin de me déplacer ?",
      answer: "Non, c'est justement notre valeur ajoutée. Toutes les démarches sont dématérialisées et gérées à distance. Vous n'avez besoin de vous déplacer nulle part. Nous nous occupons de tout depuis notre plateforme sécurisée."
    },
    {
      question: "Comment suivre l'avancement de mes démarches ?",
      answer: "Vous disposez d'un espace personnel sécurisé où vous pouvez suivre en temps réel l'état d'avancement de chaque démarche. Vous recevez également des notifications par email aux étapes importantes et pouvez nous contacter à tout moment."
    },
    {
      question: "Que se passe-t-il en cas de problème avec une administration ?",
      answer: "Nos conseillers expérimentés gèrent directement tous les échanges avec les administrations. En cas de difficulté ou de blocage, nous intervenons pour résoudre le problème et vous tenons informé des solutions mises en place."
    }
  ];

  const handleCommencerClick = () => {
    console.log("Redirection vers le formulaire de démarrage des démarches");
    // Ici on pourrait ajouter la logique de redirection
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SimplifieDemarcheHero />
      <DynamicTimeline />
      <AccompagnementSection />
      <SimplicitéSection />
      <NewVerbatimSection 
        quote="Je ne savais pas par où commencer. Tout allait trop vite. Avec Mortel, j'ai eu une réponse immédiate, un humain, pas un robot. On m'a écoutée, guidée, et surtout soulagée. Tout était clair, digne, respectueux. Pour une fois, je n'ai pas eu à me battre dans un moment déjà assez dur."
        authorName="Marylin"
        imageSrc={verbatim3}
        imageAlt="Témoignage de Marylin"
      />
      <NewFAQ 
        title="Questions sur vos démarches"
        description="Retrouvez les réponses aux questions les plus fréquentes concernant la simplification de vos démarches administratives."
        ctaText="Commencer mes démarches"
        ctaAction={handleCommencerClick}
        faqItems={demarchesFAQItems}
        defaultOpenItem={0}
      />
      <Footer />
    </div>
  );
};

export default SimplifieDemarches;
