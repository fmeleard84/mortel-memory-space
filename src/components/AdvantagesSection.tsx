
import React from 'react';
import { FileText, Clock, Shield, CheckCircle } from 'lucide-react';

const AdvantagesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Gestion administrative entièrement prise en charge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous nous occupons de l'ensemble des démarches. Vous avez un suivi en temps réel de l'avancement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Process visualization */}
          <div className="relative">
            <div className="bg-muted/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Tableau de bord en temps réel</h3>
              
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="font-medium">Déclaration de décès</span>
                  </div>
                  <span className="text-green-500 font-medium">Terminé</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-blue-500" />
                    <span className="font-medium">Acte de décès</span>
                  </div>
                  <span className="text-blue-500 font-medium">En cours</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-gray-300">
                  <div className="flex items-center space-x-3">
                    <FileText size={20} className="text-gray-400" />
                    <span className="font-medium">Démarches assurance</span>
                  </div>
                  <span className="text-gray-400 font-medium">À venir</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border-l-4 border-gray-300">
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-gray-400" />
                    <span className="font-medium">Clôture administrative</span>
                  </div>
                  <span className="text-gray-400 font-medium">À venir</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-primary font-medium">🎯 Avancement global : 45%</p>
                <div className="w-full bg-white rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full w-5/12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Benefits list */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Toutes les démarches administratives</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Déclaration de décès, actes d'état civil, démarches bancaires, assurances, organismes sociaux. 
                    Nous gérons tout de A à Z.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Suivi en temps réel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tableau de bord personnalisé avec l'avancement de chaque démarche. 
                    Notifications automatiques à chaque étape importante.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sécurité et conformité</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tous vos documents sont stockés de manière sécurisée et conforme RGPD. 
                    Accès partagé avec vos proches selon vos préférences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Accompagnement personnalisé</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Un conseiller dédié vous guide à chaque étape. Questions, doutes, 
                    conseils : nous sommes là pour vous rassurer.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle size={16} className="text-primary" />
                </div>
                <span className="font-semibold text-foreground">Garantie tranquillité</span>
              </div>
              <p className="text-muted-foreground">
                Aucune surprise, aucun oubli. Nous nous engageons à ce que toutes les démarches 
                soient effectuées dans les délais légaux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
