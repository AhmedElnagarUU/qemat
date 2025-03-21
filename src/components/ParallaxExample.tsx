'use client';

import ParallaxSection from './ParallaxSection';

export default function ParallaxExample() {
  return (
    <>
      {/* Example 1: Full-height hero section with text */}
      <ParallaxSection
        imageUrl="/hero.png"
        height="h-screen"
        overlayOpacity={0.6}
        className="text-center text-white"
      >
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Our Company
          </h1>
          <p className="text-xl md:text-2xl">
            Discover excellence in construction and equipment rental
          </p>
        </div>
      </ParallaxSection>

      {/* Example 2: Mid-page section with statistics */}
      <ParallaxSection
        imageUrl="/image (2).jfif"
        height="h-[400px]"
        overlayOpacity={0.7}
        className="my-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center max-w-6xl px-4">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-lg">Equipment Types</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-lg">Years Experience</div>
          </div>
        </div>
      </ParallaxSection>

      {/* Example 3: Call to action section */}
      <ParallaxSection
        imageUrl="/image (3).jfif"
        height="h-[300px]"
        overlayOpacity={0.5}
      >
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-medium transition-colors">
            Contact Us Today
          </button>
        </div>
      </ParallaxSection>
    </>
  );
} 