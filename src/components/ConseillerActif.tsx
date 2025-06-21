import React, { useEffect, useState } from 'react';
import { UserCheck } from 'lucide-react';

// Exemple de base de données de conseillers
const CONSEILLERS = [
  { prenom: 'Alain', image: '/conseillers/alain.jpg' },
  { prenom: 'Marie', image: '/conseillers/marie.jpg' },
  { prenom: 'Nadia', image: '/conseillers/nadia.jpg' },
  { prenom: 'Julien', image: '/conseillers/julien.jpg' },
];

export interface Conseiller {
  prenom: string;
  image: string;
}

interface Props {
  conseiller?: Conseiller; // optionnel, si on veut imposer le même d’un parent
  withIcon?: boolean; // permet de choisir si on affiche ou non l'icône
  centered?: boolean;
  small?: boolean;
}

const ConseillerActif: React.FC<Props> = ({ conseiller, withIcon = true, centered = false, small = false }) => {
  const [selected, setSelected] = useState<Conseiller | null>(conseiller || null);

  useEffect(() => {
    if (!conseiller) {
      const random = CONSEILLERS[Math.floor(Math.random() * CONSEILLERS.length)];
      setSelected(random);
    }
  }, [conseiller]);

  if (!selected) return null;

  return (
    <div className={`flex items-center ${centered ? 'justify-center' : ''} gap-3`}>
      {withIcon && <UserCheck className="text-mortel-violet w-5 h-5" />}
      <img
        src={selected.image}
        alt={`Conseiller ${selected.prenom}`}
        className={`rounded-full object-cover ${small ? 'w-8 h-8' : 'w-12 h-12'}`}
      />
      <span className={`text-white font-inter ${small ? 'text-sm' : 'text-base'}`}>
        {selected.prenom} est actuellement disponible pour vous aider.
      </span>
    </div>
  );
};

export default ConseillerActif;