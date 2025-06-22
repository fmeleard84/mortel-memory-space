import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import ModalRappel from './modals/Modal_rappel_tel';
import ModalCreationCompte from './modals/Modal_creation_compte';
import { useConseiller } from './contexts/ConseillerContext';
import iphoneService from '../assets/iphone_service_2.png';

const EtapesSimplicite = () => {
  const conseiller = useConseiller();
  const [modalRappelOpen, setModalRappelOpen] = useState(false);
  const [modalCompteOpen, setModalCompteOpen] = useState(false);

  return (
    <section className="w-full bg-[#0e0e0e] text-white py-20 px-4 md:px-16 font-heading">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Colonne gauche : texte + étapes */}
        <div className="flex flex-col gap-10 flex-1 w-full">
          <div className="flex flex-col gap-4">
            <div className="etiquette">
              Comment ça marche
            </div>
            <h1 className="mortel-titre-hero text-white">
              Organiser un départ, en toute simplicité
            </h1>
            <p className="mortel-text text-white text-[1.1em] leading-[1.4em] md:text-[1.4em] md:leading-[1.5em]">
              Créez un compte pour tout gérer vous-même, ou laissez un conseiller vous accompagner à chaque étape.
              Vous êtes libre. Présents ou discrets, nous sommes là, comme vous en avez besoin.
            </p>
          </div>

          {/* Étapes */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-mortel-violet">1. Créer un compte ou être rappelé</h3>
              <p className="texte-normal">
                Créez votre compte en quelques instants, ou demandez à être rappelé.
                Un conseiller est disponible 24h/24, 7j/7 pour vous guider avec humanité.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mortel-violet">2. Transmettre le certificat de décès</h3>
              <p className="texte-normal">
                Si vous l’avez, vous le téléversez simplement.
                Si ce n’est pas encore le cas, nous vous aidons à l’obtenir rapidement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mortel-violet">3. On s’occupe du reste</h3>
              <p className="texte-normal">
                Dès votre compte activé et le certificat transmis, nous prenons le relais.
                Vous suivez chaque démarche en temps réel via votre espace personnel.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="btn-principal" onClick={() => setModalRappelOpen(true)}>
              Être rappelé
            </Button>
            <button
              className="btn-secondaire group"
              onClick={() => setModalCompteOpen(true)}
            >
              <span>Commencer maintenant</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Colonne droite : image */}
        <div className="flex-1 h-full max-h-[600px] w-full">
          <img
            src={iphoneService}
            alt="Service funéraire VĀYA"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Modales */}
      <ModalRappel open={modalRappelOpen} onClose={() => setModalRappelOpen(false)} conseiller={conseiller} />
      <ModalCreationCompte open={modalCompteOpen} onClose={() => setModalCompteOpen(false)} />
    </section>
  );
};

export default EtapesSimplicite;