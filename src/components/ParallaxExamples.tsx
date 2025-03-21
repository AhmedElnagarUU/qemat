'use client';

import { ParallaxSection } from "@/components/ui/parallax-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export default function ParallaxExamples() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Parallax */}
      <ParallaxSection
        imageUrl="/hero.png"
        height="h-screen"
        overlayOpacity={0.4}
        speed={0.3}
        className="text-center"
      >
        <div className="max-w-4xl px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {t('Hero.title')}
          </h1>
          <p className="text-xl text-white/90">
            {t('Hero.description')}
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            {t('Hero.cta')}
          </Button>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Achievements</h2>
        </div>
      </section>

      {/* Mid-page Parallax */}
      <ParallaxSection
        imageUrl="/image (2).jfif"
        height="h-[400px]"
        overlayOpacity={0.6}
        speed={0.4}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Projects Completed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-lg opacity-90">Happy Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        </div>
      </section>

      {/* Call to Action Parallax */}
      <ParallaxSection
        imageUrl="/image (3).jfif"
        height="h-[450px]"
        overlayOpacity={0.5}
        speed={0.3}
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let&apos;s work together to bring your vision to life. Contact us today for a consultation.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Contact Us Now
          </Button>
        </div>
      </ParallaxSection>

      {/* Equipment Showcase */}
      <ParallaxSection
        imageUrl="/image (4).jfif"
        height="h-[350px]"
        overlayOpacity={0.7}
        speed={0.2}
        className="mt-20"
      >
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Premium Equipment Fleet
          </h2>
          <p className="text-lg text-white/90">
            Access our wide range of modern construction equipment and machinery
          </p>
        </div>
      </ParallaxSection>
    </>
  );
} 