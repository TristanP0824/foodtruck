import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

export function CTA() {
  return (
    <section id="find-us" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-heavy rounded-neon-lg p-12 text-center max-w-3xl mx-auto border-gradient-neon">
          <h2 className="text-4xl md:text-5xl font-black text-gradient-neon mb-6">
            Ready to taste the street?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Join us for an unforgettable culinary experience
          </p>
          <Link href="/order">
            <Button size="lg" variant="primary" className="animate-pulse-glow">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
