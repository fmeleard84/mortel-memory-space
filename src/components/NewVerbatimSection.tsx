
import React from 'react';

const NewVerbatimSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex">
          <div className="flex-1 aspect-square">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
              alt="Témoignage client"
            />
          </div>
          <div className="flex-1 bg-mortel-dark flex flex-col justify-center gap-8 p-8">
            <blockquote className="text-white text-xl md:text-2xl font-inter font-normal leading-[33.60px]">
              « Le service proposé par eMortel a transformé notre expérience. Leur approche humaine et digitale a vraiment fait la différence dans un moment difficile. »
            </blockquote>
            <div className="flex items-center gap-5">
              <div className="flex flex-col">
                <cite className="text-neutral-400 text-base font-inter font-normal leading-6 not-italic">
                  Alain
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewVerbatimSection;
