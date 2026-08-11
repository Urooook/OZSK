import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function Button({
  children,
  href = '#contacts',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold transition-colors duration-200 cursor-pointer';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    outline: 'border border-white text-white hover:bg-white/10',
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
