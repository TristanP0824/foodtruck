// Base layout wrapper for all pages - includes Navbar and Footer
import React from 'react';
import { Navbar } from '@/common/navbar';
import { Footer } from '@/common/footer';
import './styled.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
}
