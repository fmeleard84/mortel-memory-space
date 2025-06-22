import React, { useLayoutEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import iphoneService from '../assets/iphone_service_2.png';

import { Button } from './ui/button';
import ModalRappel from './modals/Modal_rappel_tel'; // ton composant modifié
import ModalCreationCompte from './modals/Modal_creation_compte'; // composant que je t’ai fourni

const DemarchesHero = () => {
  const [modalRappelOpen, setModalRappelOpen] = useState(false);
  const [modalCompteOpen, setModalCompteOpen] = useState(false);

  useLayoutEffect(() => {
    const header = document.getElementById('site-header');
    if (header) {
      const headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }, []);

  return (
    <section className="hero w-full flex flex-col justify-start items-start">
      <div className="w-full h-full bg-[#0e0e0e]">
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch h-full">

          {/* Colonne gauche - Texte */}
          <div className="flex-1 flex items-center justify-center px-4 md:px-8 lg:pl-16 lg:pr-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 lg:gap-8">
              <h1 className="mortel-titre-hero text-white">
                On s'occupe de tout. Vous n'avez plus à y penser.
              </h1>

              <div className="flex flex-col gap-4">
                <p className="mortel-text text-white text-[1.1em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                  Un décès vient d'avoir lieu ou va arriver.
                </p>
                <p className="mortel-text text-white text-[1.1em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
                  Vous êtes là. Nous aussi. Dès maintenant.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">

                  {/* Bouton Être rappelé */}
                  <Button className="btn-principal" onClick={() => setModalRappelOpen(true)}>
                    Être rappelé
                  </Button>

                  {/* Bouton Commencer */}
                  <Button className="btn-secondaire group text-white h-[42px] flex items-center" onClick={() => setModalCompteOpen(true)}>
                    <span>Commencer l'organisation</span>
                    <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Texte en bas */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                  <div className="text-white/70 text-sm font-normal font-inter">
                    Nous sommes à votre disposition 7j/7, 24h/24
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="flex-1 h-full max-h-full overflow-hidden bg-black">
            <img
              className="w-full h-full object-contain object-center bg-black"
              src={iphoneService}
              alt="Service funéraire VĀYA"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Modales */}
      <ModalRappel open={modalRappelOpen} onClose={() => setModalRappelOpen(false)} />
      <ModalCreationCompte open={modalCompteOpen} onClose={() => setModalCompteOpen(false)} />
    </section>
  );
};

export default DemarchesHero;