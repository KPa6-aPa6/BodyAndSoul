import React from 'react';
import { Brain, Heart, Flower } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА',
      description: 'Индивидуальные консультации и групповые сессии для достижения внутренней гармонии'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'ХОЛИСТИЧЕСКИЙ ПОДХОД',
      description: 'Комплексная забота о физическом и ментальном здоровье'
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: 'ДУХОВНЫЕ ПРАКТИКИ',
      description: 'Древние техники медитации и современные методики релаксации'
    }
  ];

  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-8 tracking-wider">О НАС</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы создаем пространство, где тело и разум находят гармонию через холистические практики и современные методики психологической поддержки.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-light mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;