import React, { createContext, useContext, useState, useEffect } from 'react';

const CONSEILLERS = [
  { prenom: 'Alain', image: '/conseillers/alain.jpg' },
  { prenom: 'Marie', image: '/conseillers/marie.jpg' },
  { prenom: 'Nadia', image: '/conseillers/nadia.jpg' },
  { prenom: 'Julien', image: '/conseillers/julien.jpg' },
];

export const ConseillerContext = createContext(null);

export const useConseiller = () => useContext(ConseillerContext);

export const ConseillerProvider = ({ children }) => {
  const [conseiller, setConseiller] = useState(null);

  useEffect(() => {
    const random = CONSEILLERS[Math.floor(Math.random() * CONSEILLERS.length)];
    setConseiller(random);
  }, []);

  return (
    <ConseillerContext.Provider value={conseiller}>
      {children}
    </ConseillerContext.Provider>
  );
};