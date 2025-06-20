import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import videoBackground from '../assets/proche_video.mp4';

const values = [
  'Écoresponsable',
  'Accessible',
  'Humain',
  'Sécurisé'
];

const EngagementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl px-6 md:px-20 py-20 flex flex-col items-center gap-12 shadow-2xl">
          
          {/* Titre et texte */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Nos convictions guident nos actions
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Nous croyons en une approche écoresponsable et humaine. Chaque étape de notre service est pensée pour respecter vos valeurs.
            </p>
          </div>

          {/* Vidéo + overlay animé */}
          <div className="relative w-full max-w-[1280px] h-[400px] rounded-[40px] overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={videoBackground} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay texte animé */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <p className="text-white text-2xl md:text-4xl font-medium animate-fade-in">
                {values[currentIndex]}
              </p>
            </div>
          </div>

          {/* Lien bas */}
          <div className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
            <span className="text-mortel-violet text-lg font-medium">
              Découvrir nos valeurs
            </span>
            <ChevronRight className="text-mortel-violet w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;