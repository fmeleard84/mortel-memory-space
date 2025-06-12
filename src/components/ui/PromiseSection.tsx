
import React from 'react';

interface Promise {
  title: string;
  description: string;
}

interface PromiseSectionProps {
  tag?: string;
  title: string;
  description: string;
  promises: Promise[];
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

const PromiseSection: React.FC<PromiseSectionProps> = ({
  tag,
  title,
  description,
  promises,
  primaryButton,
  secondaryButton,
  className = ""
}) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Colonne gauche - Contenu principal */}
          <div className="space-y-8">
            {tag && (
              <div className="mortel-tag inline-block">
                {tag}
              </div>
            )}
            
            <h2 className="mortel-title text-3xl lg:text-4xl text-foreground">
              {title}
            </h2>
            
            <p className="mortel-text text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Boutons d'action */}
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryButton && (
                  <button
                    onClick={primaryButton.onClick}
                    className="mortel-button-primary"
                  >
                    {primaryButton.text}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    onClick={secondaryButton.onClick}
                    className="mortel-button-secondary"
                  >
                    {secondaryButton.text}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Colonne droite - Les 3 promesses */}
          <div className="grid grid-cols-1 gap-8">
            {promises.map((promise, index) => (
              <div key={index} className="space-y-3">
                <h3 className="mortel-title text-xl text-foreground">
                  {promise.title}
                </h3>
                <p className="mortel-text text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
