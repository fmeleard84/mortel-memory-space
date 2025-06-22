import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

interface ModalCreationCompteProps {
  open: boolean;
  onClose: () => void;
}

const ModalCreationCompte: React.FC<ModalCreationCompteProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-mortel-dark border-white/20 text-white rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-inter font-semibold">
            Créer votre compte
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-inter mb-2">Prénom</label>
              <input
                type="text"
                placeholder="Votre prénom"
                className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-inter mb-2">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-inter mb-2">Email</label>
            <input
              type="email"
              placeholder="votre.email@example.com"
              className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-inter mb-2">Téléphone</label>
            <input
              type="tel"
              placeholder="06 12 34 56 78"
              className="w-full px-4 py-3 bg-mortel-dark-secondary border border-white/20 rounded-[10px] text-white placeholder-white/50 focus:outline-none focus:border-mortel-violet"
            />
          </div>

          <Button className="btn-principal w-full">Créer mon compte</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCreationCompte;