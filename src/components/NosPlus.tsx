import React from 'react';
import { HeartHandshake, Users2, Sparkles } from 'lucide-react';

const EngagementSection = () => {
  const items = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-mortel-violet" />,
      title: "Une présence significative",
      text: "Nous nous engageons à vous accompagner avec sincérité et clarté, à chaque étape.",
    },
    {
      icon: <Users2 className="w-8 h-8 text-mortel-violet" />,
      title: "Des proches informés",
      text: "Un espace privé et centralisé pour prévenir vos proches et rassembler les hommages.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-mortel-violet" />,
      title: "Un soutien qui dure",
      text: "Des ressources et un accompagnement humain, même après la cérémonie.",
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Un service enrichi pour créer du lien durable.
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Pensé pour alléger la charge, et renforcer les liens avec dignité.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-mortel-dark-secondary rounded-2xl p-8 text-left shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;