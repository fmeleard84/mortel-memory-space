import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import videoBackground from '../assets/proche_video.mp4'; // ou ton propre .mp4

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
    }, 3000); // change toutes les 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white w-full py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Titre */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black text-center">
          Nos convictions guident nos actions
        </h2>

        {/* Vidéo + overlay animé */}
        <div className="relative w-full max-w-[1280px] aspect-video rounded-3xl overflow-hidden shadow-lg">
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
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500">
            <p className="text-white text-2xl md:text-4xl font-medium opacity-100 animate-fade-in">
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
    </section>
  );
};

export default EngagementSection;