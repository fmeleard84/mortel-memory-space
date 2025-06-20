import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import videoBackground from '../assets/proche_video.mp4';

const values = [
  'Écoresponsable',
  'Accessible',
  'Humain',
  'Sécurisé',
  'Présence sincère',
  'Clarté des choix',
  'Respect du rythme',
];

const EngagementSection = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="relative w-full h-full bg-black text-white overflow-hidden">
      {/* Fond vidéo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoBackground} type="video/mp4" />
      </video>

      {/* Contenu par-dessus */}
      <div className="relative z-10 w-full min-h-[600px] flex flex-col items-center justify-center px-6 py-20 bg-black/30 backdrop-blur-sm rounded-t-[60px]">
        {/* Bloc titre + texte */}
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Nos convictions guident nos actions
          </h2>
          <p className="text-lg md:text-xl">
            Nous croyons en une approche écoresponsable et humaine. Chaque étape de notre service est pensée pour respecter vos valeurs.
          </p>
        </div>

        {/* Liste des valeurs */}
        <div className="flex flex-col gap-10 w-full max-w-3xl">
          {values.map((value, index) => {
            const isVisible = visibleIndexes.includes(index);
            const alignment = 'text-center'; // centré partout

            return (
              <p
                key={index}
                data-index={index}
                ref={(el) => (refs.current[index] = el)}
                className={`transition-all duration-1000 ease-out transform text-2xl md:text-3xl font-light ${alignment}
                  ${isVisible ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-md translate-y-12'}
                `}
              >
                {value}
              </p>
            );
          })}
        </div>

        {/* Lien bas */}
        <div className="mt-16">
          <button className="btn-secondaire group">
            <span>Nos valeurs</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;