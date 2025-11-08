import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[70vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <LazyLoadImage
          src="/images/about/hero/studentandteacher.webp"
          alt="Sevashram children and founders"
          effect="blur"
          className="w-full h-full object-cover"
          wrapperClassName="w-full h-full"
        />
      </motion.div>

      {/* Deep Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(rgba(30, 58, 138, 0.55), rgba(30, 58, 138, 0.55))"
        }}
      ></div>

      {/* Breadcrumb Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-6 left-6 md:left-12 z-20"
      >
        <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
          <a 
            href="/" 
            className="text-white/80 hover:text-white transition-colors duration-200 font-['Open_Sans']"
          >
            Home
          </a>
          <span className="text-white/60">/</span>
          <span className="text-white font-['Open_Sans']">About Us</span>
        </nav>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-8 text-center">
        {/* Title with Fade-in Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-['Poppins'] font-bold text-white text-[26px] md:text-[32px] lg:text-[42px] leading-[1.3] tracking-[0.5px]"
          style={{ letterSpacing: "0.5px" }}
        >
          About Us
        </motion.h1>

        {/* Subtitle with Fade-in Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 font-['Open_Sans'] font-normal text-[#F8FAFC] text-[14px] md:text-[16px] lg:text-[18px] max-w-[700px] mx-auto leading-relaxed"
        >
          Building a brighter future for children of Tamasha artists since 2011.
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mx-auto mt-6 h-[2px] w-[60px] bg-[#F9A826]"
        ></motion.div>

        {/* Optional CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-8"
        >
          <motion.a
            href="#our-story"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block bg-white text-[#1E3A8A] font-['Poppins'] font-semibold text-[16px] px-7 py-3 rounded-lg shadow-lg hover:bg-[#F9A826] hover:text-white transition-all duration-300"
            style={{ 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Accessibility: Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeroSection;
