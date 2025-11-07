import HeroSection from "../components/Home_Page_Components/HeroSection";
import AboutSection from "../components/Home_Page_Components/AboutSection";
import MissionVisionSection from "../components/Home_Page_Components/MissionVisionSection";
import ProgramsSection from "../components/Home_Page_Components/ProgramsSection";
import ImpactStats from "../components/Home_Page_Components/ImpactStats";
import StoriesSection from "../components/Home_Page_Components/StoriesSection";
import EventsSection from "../components/Home_Page_Components/EventsSection";
import HelpSection from "../components/Home_Page_Components/HelpSection";
import GallerySection from "../components/Home_Page_Components/GallerySection";
import TestimonialsSection from "../components/Home_Page_Components/TestimonialsSection";
import DonateBanner from "../components/Home_Page_Components/DonateBanner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ProgramsSection />
      <ImpactStats />
      <StoriesSection />
      <EventsSection />
      <HelpSection />
      <GallerySection />
      <TestimonialsSection />
      <DonateBanner />
      {/* <Footer /> */}
    </>
  );
};

export default Home;