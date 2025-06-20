"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const TestimonialsColumn = ({
  testimonials,
  className,
  speed = 30, // px/sec
}: {
  testimonials: Array<{ image: string }>;
  className?: string;
  speed?: number;
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [cycle, setCycle] = useState(0);

  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!listRef.current) return;

    const itemHeight = listRef.current.scrollHeight / 2;
    const duration = itemHeight / speed;

    const animate = async () => {
      await controls.start({
        y: `-${itemHeight}px`,
        transition: {
          duration,
          ease: "linear",
        },
      });
      // reset position to 0 instantly after full scroll, then repeat
      controls.set({ y: 0 });
      setCycle((c) => c + 1);
    };

    animate();
    const interval = setInterval(animate, duration * 1000);

    return () => clearInterval(interval);
  }, [cycle, controls, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={listRef}
        animate={controls}
        className="flex flex-col gap-3 md:gap-6"
      >
        {extendedTestimonials.map(({ image }, i) => (
          <div
            key={`${i}-${cycle}`}
            className="sm:p-4 lg:p-6 rounded-3xl border shadow-lg bg-background shadow-primary/10 w-full"
          >
            <img
              width={80}
              height={80}
              src={image}
              alt={`testimonial-${i}`}
              className="sm:w-28 sm:h-28 lg:w-24 lg:h-24"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
