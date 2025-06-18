import React from 'react';

interface NewVerbatimSectionProps {
  quote: string;
  authorName: string;
  imageSrc: string;
  imageAlt: string;
}

const NewVerbatimSection: React.FC<NewVerbatimSectionProps> = ({
  quote,
  authorName,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="w-full md:w-1/2 aspect-square">
            <img 
              className="w-full h-full object-cover" 
              src={imageSrc}
              alt={imageAlt}
            />
          </div>

          {/* Verbatim bloc noir */}
          <div className="w-full md:w-1/2 bg-mortel-dark flex flex-col justify-center gap-8 p-8">
            <blockquote className="text-white text-xl md:text-2xl font-outfit font-normal leading-[33.6px]">
              {quote}
            </blockquote>
            <div className="flex items-center gap-5">
              <cite className="text-neutral-400 text-base font-outfit font-normal leading-6 not-italic">
                {authorName}
              </cite>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewVerbatimSection;
