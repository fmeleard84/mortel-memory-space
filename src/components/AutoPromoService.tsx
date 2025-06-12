
import React from 'react';

const AutoPromoService = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-16 py-[70px]">
        <div className="w-full max-w-[1280px] mx-auto p-10 bg-mortel-dark flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col gap-[5px]">
              <h2 className="text-white text-[32px] md:text-[40px] font-inter font-normal leading-[48px]">
                Découvrez nos services funéraires
              </h2>
              <p className="text-neutral-400 text-lg font-inter font-normal leading-[27px]">
                Nous sommes là pour vous accompagner dans cette épreuve.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2.5 bg-mortel-violet text-gray-100 text-base font-inter font-normal leading-6 hover:bg-mortel-violet/90 transition-colors">
                En savoir plus
              </button>
              <button className="px-6 py-2.5 bg-white/10 text-white text-base font-inter font-normal leading-6 hover:bg-white/20 transition-colors">
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoPromoService;
