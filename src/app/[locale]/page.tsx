"use client"

import Hero from "@/components/Hero";
import Features from '@/components/Features';
// import Products from '@/components/Products';
import Footer from '@/components/Footer';
// import CallToAction from "@/components/call-to-action";
import Services from "@/components/services";
// import WhyChooseUs from "@/components/why-choose-us";
import Locations from "@/components/Locations";
import CompanyMessage from "@/components/CompanyMessage";
import Branding from "@/components/Branding";
export default function Home() {
  return (
    <>
      <Hero />
      <CompanyMessage />
      {/* <CallToAction /> */}

      <Services />
      <Branding />
      {/* <WhyChooseUs /> */}
      <Features />

      {/* <Products /> */}
      <Locations />
      <Footer />
    </>
  )
}
