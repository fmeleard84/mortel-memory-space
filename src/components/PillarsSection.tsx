
import React from 'react';
import PromiseSection from './ui/PromiseSection';

const PillarsSection = () => {
  const promises = [
    {
      title: 'Gestion administrative simplifiée',
      description: 'Nous nous occupons de toutes les démarches administratives et vous tenons informés en temps réel de l\'avancement.'
    },
    {
      title: 'Organisation des obsèques sans souci',
      description: 'Planification complète de la cérémonie selon vos souhaits, avec accompagnement personnalisé à chaque étape.'
    },
    {
      title: 'Soutien aux proches dans cette épreuve',
      description: 'Un conseiller dédié disponible 24/7 pour vous accompagner avec empathie et professionnalisme.'
    }
  ];

  const handleLearnMore = () => {
    // Navigation vers page d'information
    console.log('En savoir plus clicked');
  };

  const handleContact = () => {
    // Navigation vers contact
    console.log('Contact clicked');
  };

  return (
    <PromiseSection
      tag="Sérénité"
      title="Notre engagement pour un service apaisé"
      description="Nous révolutionnons l'accompagnement funéraire en plaçant l'humain au cœur de notre service, avec transparence et simplicité."
      promises={promises}
      primaryButton={{
        text: "En savoir plus",
        onClick: handleLearnMore
      }}
      secondaryButton={{
        text: "Contact",
        onClick: handleContact
      }}
    />
  );
};

export default PillarsSection;
