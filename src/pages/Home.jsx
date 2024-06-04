import React from "react";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import FAQs from "../components/home/FAQs";
import Tutorial from "../components/home/Tutorial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Tutorial />
      <FAQs />
      <CTA />
    </div>
  );
};

export default Home;
