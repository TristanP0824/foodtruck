import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold rounded-neon-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg transform hover:scale-105';

  const variants = {
    primary:
      'bg-gradient-neon text-white hover:bg-gradient-neon-hover shadow-glow-neon hover:shadow-glow-neon-lg focus:ring-neon-cyan',
    secondary:
      'bg-dark-card text-white border-2 border-neon-cyan hover:border-neon-pink hover:shadow-glow-cyan focus:ring-neon-pink',
    outline:
      'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white hover:shadow-glow-pink focus:ring-neon-pink',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
