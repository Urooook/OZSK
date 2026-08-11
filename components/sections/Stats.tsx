'use client';

import { useEffect, useRef, useState } from 'react';
import { CalendarDays, Users, ShieldCheck } from 'lucide-react';
import { stats } from '@/lib/content';

const ICONS = {
  calendar: CalendarDays,
  users: Users,
  shield: ShieldCheck,
} as const;

type IconKey = keyof typeof ICONS;

/** Extract numeric part and suffix ("+", "%", etc.) from a value string. */
function parseValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

/** Counts from 0 to `target` once `isVisible` turns true. */
function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1600;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, isVisible]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    /* Outer wrapper: transparent so Hero photo and About white both show through */
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 mt-5">
      <div
        ref={ref}
        className="w-full max-w-[92%] bg-navy rounded-2xl border border-white/30 shadow-2xl py-10 px-6 sm:px-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/20">
          {stats.map((stat) => {
            const Icon = ICONS[stat.icon as IconKey];
            const { num, suffix } = parseValue(stat.value);
            return (
              <div
                key={stat.id}
                className="sm:px-8 first:sm:pl-0 last:sm:pr-0 flex flex-col items-center text-center gap-3"
              >
                <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  {stat.value && (
                    <p className="text-3xl font-bold text-white">
                      <AnimatedCounter
                        target={num}
                        suffix={suffix}
                        isVisible={isVisible}
                      />
                    </p>
                  )}
                  <p className="text-sm text-white/80 mt-1 leading-snug">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
