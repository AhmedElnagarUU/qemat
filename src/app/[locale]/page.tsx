"use client"

import Hero from "@/components/Hero";
import Features from '@/components/Features';
// import Products from '@/components/Products';
import Footer from '@/components/Footer';
// import CallToAction from "@/components/call-to-action";
import Services from "@/components/services";
// import WhyChooseUs from "@/components/why-choose-us";
import Locations from "@/components/Locations";
import ParallaxSection from "@/components/ParallaxSection";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <CallToAction /> */}
      <Services />
      <ParallaxSection imageUrl={"image (3).jfif"} />
      {/* <WhyChooseUs /> */}
      <Features />
      {/* <Products /> */}
      <Locations />
      <Footer />
    </>
  )
}
