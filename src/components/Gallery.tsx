import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2940&auto=format&fit=crop',
      title: 'Психологическая поддержка'
    },
    {
      url: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2940&auto=format&fit=crop',
      title: 'Массаж'
    },
    {
      url: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2940&auto=format&fit=crop',
      title: 'Йога'
    },
    {
      url: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2940&auto=format&fit=crop',
      title: 'Психотерапия'
    },
    {
      url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2940&auto=format&fit=crop',
      title: 'Релаксация'
    },
    {
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop',
      title: 'Групповая терапия'
    }
  ];

  return (
    <section id="gallery" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light mb-16 tracking-wider text-center">ГАЛЕРЕЯ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-light tracking-wider">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;