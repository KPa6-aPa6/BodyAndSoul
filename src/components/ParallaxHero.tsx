import React, { useEffect, useState, useRef } from 'react';

const ParallaxHero = () => {
  const [offset, setOffset] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
          <source
            src="assets/massage.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">
            ТЕЛО И РАЗУМ
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">
            ГАРМОНИЯ ДУШИ И ТЕЛА В КАЖДОМ МОМЕНТЕ
          </p>
          <a 
            href="#services"
            className="inline-block px-8 py-3 border border-white/30 hover:border-white bg-black/30 hover:bg-black/50 text-white transition-all duration-300 backdrop-blur-sm"
          >
            УЗНАТЬ БОЛЬШЕ
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;