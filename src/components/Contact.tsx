import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-8 tracking-wider">КОНТАКТЫ</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light mb-2">АДРЕС</h3>
                <p className="text-gray-400">ул. Примерная, 123<br />Москва, Россия</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light mb-2">ТЕЛЕФОН</h3>
                <p className="text-gray-400">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light mb-2">EMAIL</h3>
                <p className="text-gray-400">info@teloirazum.ru</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-light mb-2">ЧАСЫ РАБОТЫ</h3>
                <p className="text-gray-400">
                  Пн-Пт: 9:00 - 21:00<br />
                  Сб-Вс: 10:00 - 20:00
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="ВАШЕ ИМЯ"
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="ВАШ EMAIL"
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="ВАШЕ СООБЩЕНИЕ"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              ></textarea>
            </div>
            <button className="w-full px-8 py-3 border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white transition-all duration-300">
              ОТПРАВИТЬ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;