import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, UserPlus, Upload, Cog, Heart } from 'lucide-react';

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  step, 
  title, 
  description, 
  isActive, 
  isLast = false 
}) => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${
          isActive 
            ? 'bg-mortel-blue scale-110 shadow-lg shadow-mortel-blue/30' 
            : 'bg-white/10 scale-100'
        }`}>
          <div className={`transition-all duration-300 ${
            isActive ? 'text-white scale-110' : 'text-white/60'
          }`}>
            <span className="text-white font-bold text-lg">{step}</span>
          </div>
        </div>
        {!isLast && (
          <div className={`w-0 h-25 border-l-2 transition-all duration-700 ${
            isActive 
              ? 'border-mortel-blue shadow-sm' 
              : 'border-white/20'
          }`}></div>
        )}
      </div>
      <div className={`flex-1 flex flex-col gap-4 transition-all duration-500 ${
        isActive ? 'transform translate-x-0 opacity-100' : 'transform translate-x-2 opacity-70'
      }`}>
        <h3 
          className={`text-xl font-bold leading-7 transition-colors duration-300 ${
            isActive ? 'text-mortel-blue' : 'text-white'
          }`}
          style={{ fontFamily: 'Inter' }}
        >
          {title}
        </h3>
        <p 
          className="text-white text-base font-normal leading-6"
          style={{ fontFamily: 'Inter' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const DynamicTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      step: 1,
      title: "S'incrire",
      description: "Inscrivez vous, en 1 clic",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Transmettre", 
      description: "Transmettez nous votre justificatif de décès en 2 clics. Si vous ne l'avez pas, nous vous assitons dans les démarches",
      icon: <Upload className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Suivre l'avancement",
      description: "C'est fini, nous prenons le relais, vous n'avez plus à vous en soucier. Nous vous tenons informé en temps réel de l'avancement administratif.",
      icon: <Cog className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Choisir votre hommage",
      description: "Vous choisissez et personnalisez l'hommage que vous souhaitez adresser à votre proche, parmi notre sélection respectueuse de l'environnement et économiquement adaptée à chaque budget.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev >= 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-mortel-dark-secondary py-28 px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Colonne gauche - Contenu principal */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <span 
                  className="text-mortel-blue text-lg leading-[27px]"
                  style={{ fontFamily: 'Inter' }}
                >
                  Étapes
                </span>
              </div>
              <h2 
                className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight lg:leading-[57.60px]"
                style={{ fontFamily: 'Inter' }}
              >
                Notre objectif,<br/>vous aider
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                className="px-6 py-2.5 bg-mortel-blue flex justify-center items-center gap-2 hover:bg-mortel-blue/90 transition-all duration-300 hover:scale-105"
              >
                <span 
                  className="text-base font-normal leading-6 text-white"
                  style={{ fontFamily: 'Inter' }}
                >
                  Commencer
                </span>
              </button>
              <button className="px-0 py-2.5 bg-transparent flex justify-center items-center gap-3 hover:bg-white/5 transition-colors group">
                <span 
                  className="text-white text-base font-normal leading-6 group-hover:text-mortel-blue transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  En savoir plus
                </span>
                <ArrowRight className="w-6 h-6 text-white group-hover:text-mortel-blue group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Colonne droite - Timeline dynamique */}
          <div className="flex-1 flex flex-col gap-8" ref={timelineRef}>
            {steps.map((stepData, index) => (
              <TimelineItem
                key={stepData.step}
                step={stepData.step}
                title={stepData.title}
                description={stepData.description}
                icon={stepData.icon}
                isActive={activeStep === stepData.step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index + 1 
                  ? 'bg-mortel-blue scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTimeline;
