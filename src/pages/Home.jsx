import React from "react";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import FAQs from "../components/home/FAQs";
import Tutorial from "../components/home/Tutorial";
import Features from "../components/home/Features";
import Plan from "../components/home/Plan";
import HowItWorks from "../components/home/HowItWorks";
import CoreFeature from "../components/home/CoreFeature";
import Courses from "../components/home/Courses";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CoreFeature />
      <Courses />
      <HowItWorks />
      <Plan />
      <Tutorial />
      <FAQs />
      <CTA />
    </div>
  );
};

export default Home;
