'use client';

import { cn } from '@/lib/utils';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // px per second
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 60,
  speed = 60,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 3;
    let moveBy = (speed * delta) / 1000;

    if (reverse) moveBy *= -1;

    let current = x.get();
    current -= moveBy;

    if (Math.abs(current) >= totalWidth) {
      current = 0;
    }

    x.set(current);
  });

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: x,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: `${gap}px`,
        }}
        ref={containerRef}
      >
        {/* Tripled content for smooth wraparound */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-[60px]">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
