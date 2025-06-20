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

export function SecInfiniteSlider({
  children,
  gap = 60,
  speed = 60,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);

useAnimationFrame((_, delta) => {
  const container = containerRef.current;
  if (!container) return;

  const totalLength = direction === 'horizontal'
    ? container.scrollWidth / 3
    : container.scrollHeight / 3;

  let moveBy = (speed * delta) / 1000;
  if (reverse) moveBy *= -1;

  let current = motionVal.get();
  current -= moveBy;

  // 🔧 FIXED: Correct reset logic based on direction
  if (!reverse && Math.abs(current) >= totalLength) {
    current = 0;
  } else if (reverse && current >= 0) {
    current = -totalLength;
  }

  motionVal.set(current);
});


  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={containerRef}
        className={cn('flex w-max', direction === 'vertical' && 'flex-col')}
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: motionVal,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: `${gap}px`,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex',
              direction === 'horizontal' ? 'flex-row' : 'flex-col',
              `gap-[${gap}px]`
            )}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
