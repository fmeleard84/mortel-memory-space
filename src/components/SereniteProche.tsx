
import React from 'react';
import { ChevronRight } from 'lucide-react';
import proche_video from '../assets/proche_video.mp4'; // Utilisation de l'image existante

const SereniteProche = () => {
  return (
    <section id="proche" className="w-full bg-black">
  <div className="w-full px-4 md:px-16 py-16"> {/* Réduction des marges */}
    <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16"> {/* Réduction du gap */}
      
      <div className="flex flex-col gap-10">
        {/* Étiquette + titre + texte */}
        <div className="flex flex-col gap-4">
          <span className="etiquette">Sérénité</span>
          <h2 className="mortel-titre-hero text-white">
            Une gestion complète et centralisée de vos proches
          </h2>
          <p className="mortel-text text-white">
            Nous offrons une solution simple pour informer vos proches du décès et des arrangements funéraires. Grâce à notre plateforme, centralisez toutes les informations essentielles en un seul endroit.
          </p>
        </div>

        {/* Vidéo placée sous le titre */}
        <div className="w-full">
          <video
            className="w-full h-full object-cover scale-[1.2] rounded-xl overflow-hidden"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={proche_video} type="video/mp4" />
          </video>
        </div>

        {/* 2 colonnes texte */}
        <div className="flex flex-col md:flex-row gap-6 py-2">
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-white text-xl font-inter font-normal leading-7">Gestion Simplifiée</h3>
            <p className="texte-normal">Informez facilement vos proches des détails importants concernant les obsèques.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-white text-xl font-inter font-normal leading-7">Espace Commun</h3>
            <p className="texte-normal">Un espace dédié pour partager souvenirs et informations avec vos proches.</p>
          </div>
        </div>

        {/* Boutons alignés à gauche */}
        <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
          <button className="btn-principal">Préparer</button>
          <button className="btn-secondaire group">
            <span>En savoir plus</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
    </div>
  </div>
</section>
  );
};

export default SereniteProche;
