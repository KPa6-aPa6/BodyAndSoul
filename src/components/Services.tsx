import React, { useState } from 'react';
import { Brain, Sparkles, Waves, HeartPulse } from 'lucide-react';
import BookingForm from './BookingForm';

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Психологическая Помощь',
      description: 'Профессиональная поддержка от опытных психологов. Индивидуальные консультации, групповая терапия и современные методики для достижения эмоционального баланса.',
      price: 'от 5000₽',
      value: 'psychology'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Медитация',
      description: 'Групповые и индивидуальные сессии медитации для снятия стресса и обретения внутреннего спокойствия.',
      price: 'от 3000₽',
      value: 'meditation'
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Массаж',
      description: 'Различные техники массажа для расслабления тела и снятия физического напряжения.',
      price: 'от 4000₽',
      value: 'massage'
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: 'Йога',
      description: 'Практики йоги для укрепления тела и развития осознанности.',
      price: 'от 2500₽',
      value: 'yoga'
    }
  ];

  const handleBooking = (serviceValue: string) => {
    setSelectedService(serviceValue);
    setIsBookingOpen(true);
  };

  return (
    <section id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-8 tracking-wider">УСЛУГИ</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Профессиональная психологическая поддержка и практики для гармонии души и тела
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-white/10 hover:border-white/30 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="ml-4 text-xl font-light tracking-wide">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-300">{service.price}</span>
                <button 
                  onClick={() => handleBooking(service.value)}
                  className="px-6 py-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  ЗАПИСАТЬСЯ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingForm 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;