
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMortel from '../assets/Mortel_logo_little.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="w-full">
      <div className="w-full px-16 py-20 bg-foreground overflow-hidden flex flex-col justify-start items-center gap-20">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
          {/* Main Content */}
          <div className="w-full h-[248px] justify-start items-start gap-32 inline-flex">
            {/* Newsletter Section */}
            <div className="w-[500px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[84px] h-9 relative overflow-hidden">
                <img 
                  src={logoMortel} 
                  alt="Logo Mortel" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="self-stretch text-white text-base font-normal leading-6">
                Inscrivez-vous à notre newsletter pour rester informé des nouveautés et des fonctionnalités.
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <form onSubmit={handleNewsletterSubmit} className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="flex-1 px-3 py-2 bg-white/10 outline outline-1 outline-transparent justify-start items-center gap-2 flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre email"
                      className="flex-1 bg-transparent text-white placeholder:text-white/60 text-base font-normal leading-6 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white/50 outline outline-1 outline-transparent justify-center items-center gap-2 flex hover:bg-white/60 transition-colors"
                  >
                    <span className="text-black text-base font-normal leading-6">S'abonner</span>
                  </button>
                </form>
                <div className="self-stretch text-white text-xs font-normal leading-[18px]">
                  En vous abonnant, vous acceptez notre politique de confidentialité et recevez des mises à jour.
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 justify-start items-start gap-10 flex">
              {/* Anticiper */}
              <div className="flex-1 overflow-hidden flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-6">Anticiper</div>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Garanties obsèque</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Volontés</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Mémoire numérique</div>
                  </Link>
                </div>
              </div>

              {/* Organiser */}
              <div className="flex-1 overflow-hidden flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-6">Organiser</div>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Vos démarches</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Vos obsèques</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Vos proches</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Espace mémoire</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Lien numérique</div>
                  </Link>
                </div>
              </div>

              {/* Remercier */}
              <div className="flex-1 overflow-hidden flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-6">Remercier</div>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Fleurs</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Bijoux</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Bougies</div>
                  </Link>
                  <Link to="#" className="self-stretch py-2 justify-start items-start inline-flex">
                    <div className="flex-1 text-white text-sm font-normal leading-[21px]">Correspondance</div>
                  </Link>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex-1 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-white text-base font-normal leading-6">Suivez-nous</div>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <a href="#" className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <Facebook size={24} className="text-white" />
                    <div className="text-white text-sm font-normal leading-[21px]">Facebook</div>
                  </a>
                  <a href="#" className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <Instagram size={24} className="text-white" />
                    <div className="text-white text-sm font-normal leading-[21px]">Instagram</div>
                  </a>
                  <a href="#" className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <Twitter size={24} className="text-white" />
                    <div className="text-white text-sm font-normal leading-[21px]">X</div>
                  </a>
                  <a href="#" className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <Linkedin size={24} className="text-white" />
                    <div className="text-white text-sm font-normal leading-[21px]">LinkedIn</div>
                  </a>
                  <a href="#" className="self-stretch py-2 justify-start items-center gap-3 inline-flex">
                    <Youtube size={24} className="text-white" />
                    <div className="text-white text-sm font-normal leading-[21px]">Youtube</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-0 border border-white/20"></div>
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-white text-sm font-normal leading-[21px]">
                © 2025 Mortel. Tous droits réservés.
              </div>
              <div className="justify-start items-start gap-6 flex">
                <Link to="#" className="text-white text-sm font-normal underline leading-[21px]">
                  Politique de confidentialité
                </Link>
                <Link to="#" className="text-white text-sm font-normal underline leading-[21px]">
                  Conditions de service
                </Link>
                <Link to="#" className="text-white text-sm font-normal underline leading-[21px]">
                  Paramètres des cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
