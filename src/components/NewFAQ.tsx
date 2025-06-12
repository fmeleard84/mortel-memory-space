
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const NewFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Premier item ouvert par défaut

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
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
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            <div className="w-full lg:w-[500px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-3xl md:text-5xl font-inter font-normal leading-tight">
                  FAQ
                </h2>
                <p className="text-white text-lg font-inter font-normal leading-[27px]">
                  Nous répondons à vos questions fréquentes pour vous accompagner dans cette étape difficile.
                </p>
              </div>
              <div className="flex items-center">
                <button className="px-6 py-2.5 bg-mortel-blue text-white text-base font-inter font-normal leading-6 hover:bg-mortel-blue/90 transition-colors">
                  Contact
                </button>
              </div>
            </div>
            
            <div className="flex-1 border-b border-white/20">
              <div className="flex flex-col">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-t border-white/20">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1 text-white text-lg font-inter font-normal leading-[27px]">
                        {item.question}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <ChevronUp 
                          className={`w-4 h-4 text-white transition-transform duration-200 ${
                            openItems.includes(index) ? '' : 'rotate-180'
                          }`} 
                        />
                      </div>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="pb-6">
                        <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQ;
