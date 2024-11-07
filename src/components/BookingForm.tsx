import React, { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

const BookingForm = ({ isOpen, onClose, service }: { 
  isOpen: boolean; 
  onClose: () => void;
  service?: string;
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: service || ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-white/10 p-8 max-w-md w-full">
        <h2 className="text-2xl font-light mb-6 tracking-wider text-center">ЗАПИСАТЬСЯ НА ПРИЁМ</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ВАШЕ ИМЯ"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="ВАШ ТЕЛЕФОН"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors [color-scheme:dark]"
              required
            />
          </div>

          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none [&>option]:bg-black"
              required
            >
              <option value="" className="bg-black text-white">ВЫБЕРИТЕ ВРЕМЯ</option>
              {Array.from({ length: 13 }, (_, i) => i + 9).map(hour => (
                <option key={hour} value={`${hour}:00`} className="bg-black text-white">{`${hour}:00`}</option>
              ))}
            </select>
          </div>

          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors [&>option]:bg-black"
            required
          >
            <option value="" className="bg-black text-white">ВЫБЕРИТЕ УСЛУГУ</option>
            <option value="psychology" className="bg-black text-white">ПСИХОЛОГИЧЕСКАЯ КОНСУЛЬТАЦИЯ</option>
            <option value="meditation" className="bg-black text-white">МЕДИТАЦИЯ</option>
            <option value="massage" className="bg-black text-white">МАССАЖ</option>
            <option value="yoga" className="bg-black text-white">ЙОГА</option>
          </select>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-white/30 hover:border-white bg-transparent text-white transition-all duration-300"
            >
              ОТМЕНА
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              ЗАПИСАТЬСЯ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;