import React from "react";
import ImpactStats from "../components/Home_Page_Components/ImpactStats";
import HeroSection from "../components/Impact_Page_Components/HeroSection";
import StoriesGrid from "../components/Impact_Page_Components/StoriesGrid";

const Impact = () => {
  return (
    <>
      <HeroSection />
      
      <StoriesGrid />

      <section className="bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactStats />
        </div>
      </section>
    </>
  );
};

export default Impact;
