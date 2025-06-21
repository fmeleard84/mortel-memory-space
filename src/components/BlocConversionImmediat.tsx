
import React, { useState } from 'react';
import { UserCheck, Phone, Clock, Computer, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const BlocConversionImmediat = () => {
  const [modalRappel, setModalRappel] = useState(false);
  const [modalPlanifier, setModalPlanifier] = useState(false);
  const [modalCompte, setModalCompte] = useState(false);
  const [ongletRappel, setOngletRappel] = useState('maintenant');

  return (
    <section className="w-full relative overflow-hidden">
      {/* Effet glow violet doux */}
      <div className="absolute inset-0 bg-mortel-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-mortel-violet/5 via-transparent to-mortel-violet/5"></div>
      </div>
      
      <div className="relative w-full max-w-[1024px] mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Titre principal */}
          <h2 className="mortel-titre-hero text-white">
            Un décès vient d'avoir lieu ? Vous souhaitez anticiper ?
          </h2>

          {/* Sous-titre */}
          <p className="mortel-text text-white text-xl md:text-2xl">
            Notre équipe est à votre écoute, 24h/24, 7j/7.
          </p>

          {/* Encadré conseiller disponible */}
          <div className="bg-mortel-dark-secondary/50 border border-white/10 rounded-[20px] p-8 max-w-2xl w-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <UserCheck className="text-mortel-violet w-6 h-6" />
              <span className="text-white text-lg font-inter font-medium">
                Alain est actuellement disponible pour vous aider.
              </span>
            </div>
            
            <div className="mortel-text text-white text-center space-y-2">
              <p>Vous pouvez :</p>
              <div className="space-y-1">
                <p>👉 être rappelé immédiatement,</p>
                <p>👉 choisir un moment,</p>
                <p>👉 ou commencer les démarches en ligne.</p>
              </div>
            </div>
          </div>

          {/* 3 boutons CTA */}
          <div className="flex flex-col md:flex-row gap-4 items-center w-full max-w-3xl">
            {/* Être rappelé */}
            <Dialog open={modalRappel} onOpenChange={setModalRappel}>
              <DialogTrigger asChild>
                <Button className="btn-principal flex items-center gap-2 w-full md:w-auto">
                  <Phone className="w-4 h-4" />
                  <span>Être rappelé</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl font-inter font-semibold">
                    Être rappelé
                  </DialogTitle>
                </DialogHeader>
                
                {/* Onglets */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setOngletRappel('maintenant')}
                    className={`px-4 py-2 rounded-[10px] transition-all ${
                      ongletRappel === 'maintenant' 
                        ? 'bg-mortel-violet text-white' 
                        : 'bg-mortel-dark-secondary text-white/70 hover:text-white'
                    }`}
                  >
                    Maintenant
                  </button>
                  <button
                    onClick={() => setOngletRappel('plus-tard')}
                    className={`px-4 py-2 rounded-[10px] transition-all ${
                      ongletRappel === 'plus-tard' 
                        ? 'bg-mortel-violet text-white' 
                        : 'bg-mortel-dark-secondary text-white/70 hover:text-white'
                    }`}
                  >
                    Plus tard
                  </button>
                </div>

                {ongletRappel === 'maintenant' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Votre numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                    <Button className="btn-principal w-full">
                      Demander un rappel immédiat
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-inter mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white focus:outline-none focus:border-mortel-violet"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-inter mb-2">
                          Heure
                        </label>
                        <input
                          type="time"
                          className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white focus:outline-none focus:border-mortel-violet"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Votre numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                    <Button className="btn-principal w-full">
                      Planifier le rappel
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Planifier un rappel */}
            <Dialog open={modalPlanifier} onOpenChange={setModalPlanifier}>
              <DialogTrigger asChild>
                <Button className="btn-inactif flex items-center gap-2 w-full md:w-auto">
                  <Clock className="w-4 h-4" />
                  <span>Planifier un rappel</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl font-inter font-semibold">
                    Planifier un rappel
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Heure souhaitée
                      </label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-inter mb-2">
                      Votre numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                    />
                  </div>
                  <Button className="btn-principal w-full">
                    Confirmer le rendez-vous
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Commencer mes démarches */}
            <Dialog open={modalCompte} onOpenChange={setModalCompte}>
              <DialogTrigger asChild>
                <Button className="btn-secondaire group flex items-center gap-2 text-white w-full md:w-auto border border-white/20 px-6 py-2.5 rounded-[10px] hover:bg-white/10">
                  <Computer className="w-4 h-4" />
                  <span>Commencer mes démarches</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
                <DialogHeader>
                  <DialogTitle className="text-white text-xl font-inter font-semibold">
                    Créer votre compte
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        placeholder="Votre prénom"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-inter mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-inter mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre.email@example.com"
                      className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-inter mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
                    />
                  </div>
                  <Button className="btn-principal w-full">
                    Créer mon compte
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Promesse de service */}
          <div className="text-center space-y-2">
            <p className="mortel-text text-white">
              Créer un compte prend moins d'une minute.
            </p>
            <p className="mortel-text text-white">
              Un conseiller vous rappelle en moins de 5 minutes.
            </p>
            <p className="text-white/70 text-sm font-inter mt-4">
              C'est gratuit et sans engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlocConversionImmediat;
