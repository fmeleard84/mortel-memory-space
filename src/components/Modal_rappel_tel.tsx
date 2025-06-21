import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

interface ModalRappelProps {
  open: boolean;
  onClose: () => void;
  conseiller: {
    prenom: string;
    image: string;
  };
}

const ModalRappel: React.FC<ModalRappelProps> = ({ open, onClose, conseiller }) => {
 if (!open || !conseiller) return null; // ✅ évite l'erreur si conseiller est null

  const [onglet, setOnglet] = useState<'maintenant' | 'plus-tard'>('maintenant');

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-inter font-semibold">
            Être rappelé
          </DialogTitle>
        </DialogHeader>

        {/* Conseiller actif */}
        <div className="flex items-center gap-3 mb-4 mt-2">
          <img
            src={conseiller.image}
            alt={conseiller.prenom}
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
          <p className="text-sm font-inter text-white">
            Vous serez rappelé(e) par <strong>{conseiller.prenom}</strong>, notre conseiller actuellement disponible.
          </p>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setOnglet('maintenant')}
            className={`px-4 py-2 rounded-[10px] transition-all ${
              onglet === 'maintenant'
                ? 'bg-mortel-violet text-white'
                : 'bg-mortel-dark-secondary text-white/70 hover:text-white'
            }`}
          >
            Maintenant
          </button>
          <button
            onClick={() => setOnglet('plus-tard')}
            className={`px-4 py-2 rounded-[10px] transition-all ${
              onglet === 'plus-tard'
                ? 'bg-mortel-violet text-white'
                : 'bg-mortel-dark-secondary text-white/70 hover:text-white'
            }`}
          >
            Plus tard
          </button>
        </div>

        {/* Formulaire selon l'onglet */}
        {onglet === 'maintenant' ? (
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
  );
};

export default ModalRappel;