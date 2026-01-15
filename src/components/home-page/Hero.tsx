'use client';

import React from 'react';
import { Button } from '@/components/ui';

export function Hero() {
  const handleViewMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFindUs = () => {
    const findUsSection = document.getElementById('find-us');
    findUsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

      {/* Animated RGB Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,240,255,0.3) 0%, rgba(255,0,255,0.3) 100%)',
          backgroundSize: '200% 200%',
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center p-8 md:p-12 max-w-5xl mx-4 animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-neon-animated mb-6 tracking-tight">
          Street Eats
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-10 max-w-3xl mx-auto font-medium">
          Authentic street food that brings the flavor of the city to your plate
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="primary"
            onClick={handleViewMenu}
            className="w-full sm:w-auto min-w-[200px] text-lg animate-pulse-glow"
          >
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleFindUs}
            className="w-full sm:w-auto min-w-[200px] text-lg"
          >
            Find Us
          </Button>
        </div>
      </div>
    </section>
  );
}
