'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Flame, Zap, MapPin } from 'lucide-react';

// Default location coordinates (update with actual food truck location)
const LOCATION = {
  lat: 40.7128,
  lng: -74.006,
  name: 'Street Eats Food Truck',
};

export function Features() {
  const router = useRouter();

  const openMaps = () => {
    const { lat, lng, name } = LOCATION;
    const encodedName = encodeURIComponent(name);

    // Detect if user is on iOS/macOS
    const isApple =
      /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) &&
      'ontouchend' in document;

    if (isApple) {
      // Apple Maps
      window.open(
        `maps://maps.apple.com/?q=${encodedName}&ll=${lat},${lng}`,
        '_blank'
      );
    } else {
      // Google Maps
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodedName}`,
        '_blank'
      );
    }
  };

  const features = [
    {
      icon: 'flame',
      title: 'Fresh & Hot',
      description: 'Made to order with the freshest ingredients',
      onClick: () => router.push('/order'),
    },
    {
      icon: 'zap',
      title: 'Bold Flavors',
      description: 'Authentic recipes with a modern twist',
      onClick: () => router.push('/menu'),
    },
    {
      icon: 'mappin',
      title: 'Find Us',
      description: 'Check our schedule for locations near you',
      onClick: openMaps,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={feature.onClick}
              className="glass rounded-neon-lg p-8 border-gradient-neon hover:scale-105 transition-all duration-300 animate-scale-in text-center cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                {feature.icon === 'flame' && (
                  <Flame
                    size={64}
                    className="text-neon-pink"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))',
                    }}
                  />
                )}
                {feature.icon === 'zap' && (
                  <Zap
                    size={64}
                    className="text-neon-cyan"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))',
                    }}
                  />
                )}
                {feature.icon === 'mappin' && (
                  <MapPin
                    size={64}
                    className="text-neon-lime"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.6))',
                    }}
                  />
                )}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
