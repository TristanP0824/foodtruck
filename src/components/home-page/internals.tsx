import React from 'react';
import { Navbar } from '@/common/navbar';
import { Footer } from '@/common/footer';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
