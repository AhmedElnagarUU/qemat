'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function ParallaxSection({
  imageUrl,
  height = "h-[500px]",
  overlayOpacity = 0.5,
  children,
  className = ""
}: ParallaxSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const scrolled = window.scrollY;
          setScrollPosition(scrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${height} ${className}`}
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
        }}
      >
        <Image
          src={imageUrl}
          alt="Parallax Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
} 