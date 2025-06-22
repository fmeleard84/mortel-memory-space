import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import ModalRappel from './modals/Modal_rappel_tel';
import ModalCreationCompte from './modals/Modal_creation_compte';
import { useConseiller } from './contexts/ConseillerContext';

const EtapesSimplicite = () => {
  const conseiller = useConseiller();
  const [modalRappelOpen, setModalRappelOpen] = useState(false);
  const [modalCompteOpen, setModalCompteOpen] = useState(false);

  return (
    <section className="w-full bg-[#0e0e0e] text-white py-20 px-4 md:px-16 font-heading">
      <div className="max-w-5xl mx-auto flex flex-col items-start gap-12">

        {/* Titre & sous-titre */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Organiser un départ, en toute simplicité
          </h2>
          <p className="text-white/80 text-lg max-w-3xl">
            Créez un compte pour tout gérer vous-même, ou laissez un conseiller vous accompagner à chaque étape.
            Vous êtes libre. Présents ou discrets, nous sommes là, comme vous en avez besoin.
          </p>
        </div>

        {/* Étapes */}
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <span className="text-mortel-violet text-sm">1. Créer un compte ou être rappelé</span>
              <p className="text-white mt-2">
                Créez votre compte en quelques instants, ou demandez à être rappelé.  
                Un conseiller est disponible 24h/24, 7j/7 pour vous guider avec humanité.
              </p>
            </div>
            <div className="flex-1">
              <span className="text-mortel-violet text-sm">2. Transmettre le certificat de décès</span>
              <p className="text-white mt-2">
                Si vous l’avez, vous le téléversez simplement.  
                Si ce n’est pas encore le cas, nous vous aidons à l’obtenir rapidement.
              </p>
            </div>
            <div className="flex-1">
              <span className="text-mortel-violet text-sm">3. On s’occupe du reste</span>
              <p className="text-white mt-2">
                Dès votre compte activé et le certificat transmis, nous prenons le relais.  
                Vous suivez chaque démarche en temps réel via votre espace personnel.
              </p>
            </div>
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

      {/* Modales */}
      <ModalRappel open={modalRappelOpen} onClose={() => setModalRappelOpen(false)} conseiller={conseiller} />
      <ModalCreationCompte open={modalCompteOpen} onClose={() => setModalCompteOpen(false)} />
    </section>
  );
};

export default EtapesSimplicite;