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
  const isVideo = imageSrc.endsWith('.mp4');

  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row">

          {/* Media (image ou vidéo) */}
          <div className="w-full md:w-1/2 aspect-square">
            {isVideo ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={imageSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                className="w-full h-full object-cover"
                src={imageSrc}
                alt={imageAlt}
              />
            )}
          </div>

          {/* Verbatim bloc noir */}
          <div className="w-full md:w-1/2 bg-mortel-dark flex flex-col justify-center gap-8 p-8">
            <blockquote className="mortel-verbatim text-white">
              {quote}
            </blockquote>
            <div className="flex items-center gap-5">
              <cite className="mortel-verbatim-name text-neutral-300">
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
