
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Organiser des obsèques', path: '/organiser' },
    { name: 'Anticiper', path: '/anticiper' },
    { name: 'Boutique hommage', path: '/remercier' },
    { name: 'Espace mémoire', path: '/espace-memoire' },
  ];

  const company = [
    { name: 'Pourquoi Mortel', path: '/pourquoi-mortel' },
    { name: 'Notre manifeste', path: '/notre-manifeste' },
    { name: 'En savoir plus', path: '/en-savoir-plus' },
    { name: 'Professionnels', path: '/espace-pour-les-professionnels' },
  ];

  const legal = [
    { name: 'Mentions légales', path: '#' },
    { name: 'Conditions générales', path: '#' },
    { name: 'Politique de confidentialité', path: '#' },
    { name: 'Cookies', path: '#' },
  ];

  return (
    <footer className="bg-foreground text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold mb-6 block">
              Mortel
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Des obsèques sereines, transparentes et profondément humaines. 
              Nous accompagnons plus de 2000 familles chaque année.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@mortel.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@mortel.fr
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-gray-300">
                  123 Avenue de la Paix<br />
                  75001 Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Nos services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6">L'entreprise</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Emergency */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <div className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                <p className="text-primary font-semibold mb-2">Urgence 24/7</p>
                <a
                  href="tel:+33123456789"
                  className="text-white hover:text-primary transition-colors font-medium"
                >
                  01 23 45 67 89
                </a>
              </div>
              
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-300 text-sm">
                © 2024 Mortel. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Certifié:</span>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-700 px-3 py-1 rounded text-xs font-medium">RGPD</div>
                  <div className="bg-gray-700 px-3 py-1 rounded text-xs font-medium">ISO 27001</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Données hébergées en France</span>
              <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
              <div className="w-6 h-4 bg-white rounded-sm"></div>
              <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
