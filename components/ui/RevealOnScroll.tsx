'use client';

import { useEffect, useRef } from 'react';

type Direction = 'left' | 'right' | 'bottom';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const TRANSLATE: Record<Direction, string> = {
  left: 'translateX(-60px)',
  right: 'translateX(60px)',
  bottom: 'translateY(50px)',
};

export default function RevealOnScroll({
  children,
  direction = 'bottom',
  delay = 0,
  className = '',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = TRANSLATE[direction];
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
