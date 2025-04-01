"use client"

import Hero from "@/components/Hero";
import Features from '@/components/Features';
// import Products from '@/components/Products';

// import CallToAction from "@/components/call-to-action";
// import Services from "@/components/services";
// import WhyChooseUs from "@/components/why-choose-us";
import Locations from "@/components/Locations";
import Services from "@/components/services";
import About from "@/components/about/About";
// import Branding from "@/components/Branding";
// import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
      <Hero />
      
      {/* <CallToAction /> */}
      <About />
      <Services />
      
      {/* <Branding /> */}
      {/* <WhyChooseUs /> */}
      <Features />

      {/* <Products /> */}
      <Locations />
      
    </>
  )
}
