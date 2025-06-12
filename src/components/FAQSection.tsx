
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Comment fonctionne votre service ?",
      answer: "Dès votre premier contact, un conseiller dédié prend en charge l'ensemble des démarches administratives et organisationnelles. Vous suivez l'avancement en temps réel via votre espace personnel sécurisé."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont transparents et annoncés dès le premier contact, sans surprise ni frais cachés. Nous proposons des solutions de paiement échelonné sans frais. Un devis détaillé vous est remis avant tout engagement."
    },
    {
      question: "Êtes-vous disponibles 24h/24 ?",
      answer: "Oui, nos conseillers sont joignables 24h/24, 7j/7, y compris les weekends et jours fériés. En cas d'urgence, vous obtenez une réponse en moins de 30 minutes."
    },
    {
      question: "Comment fonctionne l'espace mémoire ?",
      answer: "L'espace mémoire est un lieu numérique sécurisé où famille et amis peuvent partager photos, vidéos, messages et souvenirs. Accessible via QR code, il peut être gravé sur une plaque funéraire pour un accès permanent."
    },
    {
      question: "Vos services sont-ils conformes à la réglementation ?",
      answer: "Oui, nous respectons scrupuleusement toutes les réglementations funéraires françaises. Nos données sont hébergées en France, chiffrées selon les standards AES-256, et nous sommes conformes RGPD."
    },
    {
      question: "Puis-je modifier mes choix après signature ?",
      answer: "Oui, nous comprenons que vos souhaits peuvent évoluer. La plupart de nos services peuvent être modifiés selon les conditions prévues dans nos contrats, toujours dans votre intérêt."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Retrouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-foreground text-lg pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors font-semibold">
              Contacter un conseiller
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
