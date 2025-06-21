
import React from 'react';
import { CheckCircle, Phone, Upload } from 'lucide-react';

const DemarchesSection = () => {
  const demarches = [
    'Déclaration en mairie',
    'Demande d\'autorisation de crémation',
    'Rédaction et transmission des documents à vos proches',
    'Coordination autour de l\'avis de décès, du transport, etc.',
    'Lien direct avec l\'hôpital, la clinique ou l\'EHPAD'
  ];

  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 py-24">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Titre principal */}
          <h2 className="mortel-titre-hero text-white">
            Toutes les démarches administratives, prises en main.
          </h2>

          {/* Paragraphe d'introduction */}
          <p className="mortel-text text-white max-w-4xl text-[1.2em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
            Organiser les obsèques d'un proche, c'est aussi devoir gérer une série de démarches administratives, 
            souvent urgentes, parfois floues. Nous sommes là pour vous guider, étape par étape, dès que le décès est déclaré.
          </p>

          {/* Liste des démarches */}
          <div className="w-full max-w-3xl">
            <div className="space-y-4">
              {demarches.map((demarche, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-mortel-violet w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="mortel-text text-white text-left text-lg">
                    {demarche}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-3xl h-px bg-white/20"></div>

          {/* Bloc final CTA */}
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-white text-xl md:text-2xl font-inter font-semibold">
                Besoin que l'on prenne le relais ?
              </h3>
              <p className="mortel-text text-white">
                Deux options s'offrent à vous :
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <button className="btn-principal flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Nous appeler</span>
              </button>
              <button className="btn-secondaire group flex items-center gap-2 text-white">
                <Upload className="w-4 h-4" />
                <span>Transmettre un certificat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemarchesSection;
