
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const PricingSection = () => {
  const [paymentMode, setPaymentMode] = useState<'1x' | '4x' | '12x'>('4x');

  // Prix de base (en 1 fois)
  const basePrices = {
    epure: 2850,
    presence: 3650,
    signature: 4500
  };

  // Calcul des prix selon le mode de paiement
  const calculatePrice = (basePrice: number) => {
    switch (paymentMode) {
      case '1x':
        return basePrice;
      case '4x':
        return Math.round((basePrice / 4) * 100) / 100;
      case '12x':
        return Math.round((basePrice / 12) * 100) / 100;
      default:
        return basePrice;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getPaymentLabel = () => {
    switch (paymentMode) {
      case '1x':
        return 'Paiement en une fois';
      case '4x':
        return 'Paiement en 4 fois';
      case '12x':
        return 'Paiement en 12 fois';
      default:
        return '';
    }
  };

  return (
    <section className="w-full bg-background">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-12">
          
          {/* En-tête */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-foreground text-3xl md:text-5xl font-heading font-normal leading-tight">
              Nos propositions claires
            </h2>
            <p className="text-muted-foreground text-lg font-inter font-normal leading-[27px]">
              Une organisation lisible, des tarifs transparents.
            </p>
          </div>

          {/* Switch de paiement */}
          <div className="flex justify-center">
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setPaymentMode('1x')}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  paymentMode === '1x'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                1 fois
              </button>
              <button
                onClick={() => setPaymentMode('4x')}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  paymentMode === '4x'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                4 fois
              </button>
              <button
                onClick={() => setPaymentMode('12x')}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  paymentMode === '12x'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                12 fois
              </button>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] font-heading font-semibold"></TableHead>
                  <TableHead className="text-center font-heading font-semibold text-foreground">
                    💠 L'Épure
                  </TableHead>
                  <TableHead className="text-center font-heading font-semibold text-foreground bg-primary/5 border-l-2 border-r-2 border-primary/20">
                    ⚫ La Présence
                  </TableHead>
                  <TableHead className="text-center font-heading font-semibold text-foreground">
                    ⚪ La Signature
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Accroche</TableCell>
                  <TableCell className="text-center">L'essentiel avec soin</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Un accompagnement renforcé</TableCell>
                  <TableCell className="text-center">Une cérémonie personnalisée</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prix TTC</TableCell>
                  <TableCell className="text-center font-bold text-lg">
                    {formatPrice(calculatePrice(basePrices.epure))}
                    <br />
                    <span className="text-xs text-muted-foreground">{getPaymentLabel()}</span>
                  </TableCell>
                  <TableCell className="text-center font-bold text-lg bg-primary/5 border-l-2 border-r-2 border-primary/20">
                    {formatPrice(calculatePrice(basePrices.presence))}
                    <br />
                    <span className="text-xs text-muted-foreground">{getPaymentLabel()}</span>
                  </TableCell>
                  <TableCell className="text-center font-bold text-lg">
                    {formatPrice(calculatePrice(basePrices.signature))}
                    <br />
                    <span className="text-xs text-muted-foreground">{getPaymentLabel()}</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pour qui</TableCell>
                  <TableCell className="text-center text-sm">Pour ceux qui souhaitent une solution simple et digne.</TableCell>
                  <TableCell className="text-center text-sm bg-primary/5 border-l-2 border-r-2 border-primary/20">Pour les familles souhaitant être accompagnées à chaque étape.</TableCell>
                  <TableCell className="text-center text-sm">Pour ceux qui veulent un hommage sur mesure.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Délais</TableCell>
                  <TableCell className="text-center">48 à 72h</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">48 à 72h</TableCell>
                  <TableCell className="text-center">72h à 5 jours selon souhaits</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Recommandation</TableCell>
                  <TableCell className="text-center">Pour les budgets maîtrisés</TableCell>
                  <TableCell className="text-center font-semibold text-primary bg-primary/5 border-l-2 border-r-2 border-primary/20">⭐ Notre recommandation</TableCell>
                  <TableCell className="text-center">Pour un hommage fort et personnalisé</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Crémation incluse</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Démarches</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Organisation complète</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Suivi des proches</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coordination dédiée</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mur hommage numérique</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lieu dédié</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Présence physique</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center bg-primary/5 border-l-2 border-r-2 border-primary/20">Oui</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Personnalisation avancée</TableCell>
                  <TableCell className="text-center text-muted-foreground">-</TableCell>
                  <TableCell className="text-center text-muted-foreground bg-primary/5 border-l-2 border-r-2 border-primary/20">-</TableCell>
                  <TableCell className="text-center">Oui</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-6 py-2.5 bg-primary text-primary-foreground text-base font-inter font-normal leading-6 hover:bg-primary/90 transition-colors">
              Voir le détail de chaque proposition
            </button>
            <button className="flex items-center gap-2 text-foreground text-base font-inter font-normal leading-6 hover:text-primary transition-colors underline underline-offset-4">
              Comparer les services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
