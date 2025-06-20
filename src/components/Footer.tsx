
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMortel from '../assets/logo_png.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="w-full bg-[#191919] text-white px-4 md:px-16 py-20">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
    
    {/* Haut du footer */}
    <div className="flex flex-col lg:flex-row gap-16 w-full">
      
      {/* Newsletter */}
      <div className="w-full lg:w-[40%] flex flex-col gap-6">
        <div className="w-[84px]">
          <img src={logoMortel} alt="Logo Mortel" className="w-full h-auto object-contain" />
        </div>
        <p className="text-base leading-6">
          Inscrivez-vous à notre newsletter pour rester informé des nouveautés et des fonctionnalités.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white/10 px-3 py-[10px] flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="w-full bg-transparent text-white placeholder:text-white/60 text-base outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-[10px] bg-white/50 hover:bg-white/60 transition-colors text-black text-base"
          >
            S'abonner
          </button>
        </form>
        <p className="text-xs leading-5">
          En vous abonnant, vous acceptez notre politique de confidentialité et recevez des mises à jour.
        </p>
      </div>

      {/* Navigation */}
      <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8">
        {/* Anticiper */}
        <div>
          <h4 className="text-base mb-2">Anticiper</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="#">Garanties obsèques</Link></li>
            <li><Link to="#">Volontés</Link></li>
            <li><Link to="#">Mémoire numérique</Link></li>
          </ul>
        </div>

        {/* Organiser */}
        <div>
          <h4 className="text-base mb-2">Organiser</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="#">Vos démarches</Link></li>
            <li><Link to="#">Vos obsèques</Link></li>
            <li><Link to="#">Vos proches</Link></li>
            <li><Link to="#">Espace mémoire</Link></li>
            <li><Link to="#">Lien numérique</Link></li>
          </ul>
        </div>

        {/* Remercier */}
        <div>
          <h4 className="text-base mb-2">Remercier</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="#">Fleurs</Link></li>
            <li><Link to="#">Bijoux</Link></li>
            <li><Link to="#">Bougies</Link></li>
            <li><Link to="#">Correspondance</Link></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-base mb-2">Suivez-nous</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Facebook size={16} /> Facebook</li>
            <li className="flex items-center gap-2"><Instagram size={16} /> Instagram</li>
            <li className="flex items-center gap-2"><Twitter size={16} /> X</li>
            <li className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn</li>
            <li className="flex items-center gap-2"><Youtube size={16} /> Youtube</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bas du footer */}
    <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
      <p>© 2025 Mortel. Tous droits réservés.</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 underline">
        <Link to="#">Politique de confidentialité</Link>
        <Link to="#">Conditions de service</Link>
        <Link to="#">Paramètres des cookies</Link>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
