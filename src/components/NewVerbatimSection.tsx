
import React from 'react';

const NewVerbatimSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto bg-mortel-dark flex flex-col gap-8 p-8">
          <div className="w-full overflow-hidden flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 flex items-center gap-20">
              <img 
                className="flex-1 h-[623px] object-cover rounded-mortel-lg" 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=623&fit=crop"
                alt="Témoignage client"
              />
              <div className="flex-1 overflow-hidden flex flex-col gap-8">
                <blockquote className="text-white text-xl md:text-2xl font-inter font-normal leading-[33.60px]">
                  « Une approche moderne et respectueuse qui m'a vraiment aidé dans un moment difficile. »
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col">
                    <cite className="text-neutral-400 text-base font-inter font-normal leading-6 not-italic">
                      Jean Dupont
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewVerbatimSection;
