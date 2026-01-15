import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'primary' | 'dark';
  fullWidth?: boolean;
}

export function Section({
  children,
  className = '',
  bgColor = 'dark',
  fullWidth = false,
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-dark-bg',
    dark: 'bg-dark-bg',
  };

  return (
    <section className={`${bgColors[bgColor]} ${className}`}>
      <div
        className={`${fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}`}
      >
        {children}
      </div>
    </section>
  );
}
