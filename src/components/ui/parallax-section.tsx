'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  height?: string;
  overlayOpacity?: number;
  speed?: number;
  children?: React.ReactNode;
}

export const ParallaxSection = React.forwardRef<
  HTMLDivElement,
  ParallaxSectionProps
>(({ imageUrl, height = "h-[1000px]", overlayOpacity = 0.5, speed = 0.3, children, className }, _ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        height,
        className
      )}
    >
      <motion.div 
        className="absolute inset-0 w-full h-[100%] -top-[30%]"
        style={{ y }}
      >
        <Image
          src={imageUrl}
          alt="Parallax Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div 
          className="absolute inset-0 b-background/[.97]"
          style={{ 
            opacity: overlayOpacity,
            // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity * 1.2}))` 
          }}
        />
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
});

ParallaxSection.displayName = "ParallaxSection"; 