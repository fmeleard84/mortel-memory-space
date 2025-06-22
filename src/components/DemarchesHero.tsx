import React, { useLayoutEffect, useState } from 'react';
import iphoneService from '../assets/iphone_service_2.png';
import { ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const DemarchesHero = () => {
  const [modalRappel, setModalRappel] = useState(false);
  const [modalCompte, setModalCompte] = useState(false);

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
                <p className="mortel-text text-white">
                  Un décès vient d'avoir lieu ou va arriver.
                </p>
                <p className="mortel-text text-white">
                  Vous êtes là. Nous aussi. Dès maintenant.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row justify-start items-start gap-3 lg:gap-4 w-full sm:w-auto">
                  
                  {/* Être rappelé */}
                  <Dialog open={modalRappel} onOpenChange={setModalRappel}>
                    <DialogTrigger asChild>
                      <Button className="btn-principal w-full md:w-auto">
                        Être rappelé
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
                      <DialogHeader>
                        <DialogTitle className="text-white text-xl font-inter font-semibold">
                          Être rappelé
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <input
                          type="tel"
                          placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                        />
                        <Button className="btn-principal w-full">
                          Demander un rappel
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Commencer l'organisation */}
                  <Dialog open={modalCompte} onOpenChange={setModalCompte}>
                    <DialogTrigger asChild>
                      <Button className="btn-secondaire group text-white h-[42px] flex items-center">
                        <span>Commencer l'organisation</span>
                        <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
                      <DialogHeader>
                        <DialogTitle className="text-white text-xl font-inter font-semibold">
                          Créer votre compte
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Votre prénom"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                        />
                        <input
                          type="text"
                          placeholder="Votre nom"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                        />
                        <input
                          type="email"
                          placeholder="votre.email@example.com"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                        />
                        <input
                          type="tel"
                          placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                        />
                        <Button className="btn-principal w-full">
                          Créer mon compte
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

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
    </section>
  );
};

export default DemarchesHero;