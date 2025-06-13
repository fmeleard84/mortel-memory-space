
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface NewFAQProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaAction?: () => void;
  faqItems: FAQItem[];
  defaultOpenItem?: number;
}

const NewFAQ: React.FC<NewFAQProps> = ({
  title = "FAQ",
  description = "Nous répondons à vos questions pour vous accompagner au mieux.",
  ctaText = "Contact",
  ctaAction,
  faqItems,
  defaultOpenItem = 0
}) => {
  const [openItems, setOpenItems] = useState<number[]>([defaultOpenItem]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const handleCTAClick = () => {
    if (ctaAction) {
      ctaAction();
    }
  };

  return (
    <section className="w-full bg-mortel-dark">
      <div className="w-full px-4 md:px-16 py-28">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            <div className="w-full lg:w-[500px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-3xl md:text-5xl font-inter font-normal leading-tight">
                  {title}
                </h2>
                <p className="text-white text-lg font-inter font-normal leading-[27px]">
                  {description}
                </p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={handleCTAClick}
                  className="px-6 py-2.5 bg-mortel-blue text-white text-base font-inter font-normal leading-6 hover:bg-mortel-blue/90 transition-colors"
                >
                  {ctaText}
                </button>
              </div>
            </div>
            
            <div className="flex-1 border-b border-white/20">
              <div className="flex flex-col">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-t border-white/20">
                    <button 
                      onClick={() => toggleItem(index)} 
                      className="w-full py-5 flex items-center justify-between gap-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1 text-white text-lg font-inter font-normal leading-[27px]">
                        {item.question}
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <ChevronUp className={`w-4 h-4 text-white transition-transform duration-200 ${openItems.includes(index) ? '' : 'rotate-180'}`} />
                      </div>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="pb-6">
                        <p className="text-neutral-400 text-base font-inter font-normal leading-6">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQ;
