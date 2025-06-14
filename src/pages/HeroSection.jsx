import React from 'react';
import heroImage from '../assets/images/h.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-16 md:pt-20 min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="OfNet Farms organic fertilizer production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start w-full">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="inline-block bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl">
                Organic Fertilizers for Ghana's Future
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium tracking-wide backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10 shadow-2xl">
                <span className="text-green-300 font-semibold">Transforming</span> agricultural waste into{' '}
                <span className="text-yellow-300 font-semibold">premium organic solutions</span> that enhance soil health and boost{' '}
                <span className="text-emerald-300 font-semibold">crop yields sustainably.</span>
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-ping delay-1000"></div>
            </div>
            
            
          </div>

          {/* Empty div to maintain grid structure */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;