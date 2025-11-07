import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = () => {
  const images = [
    "/images/home/hero/hero-bg-1.jpg",
    "/images/home/hero/hero-bg-2.jpg",
    "/images/home/hero/hero-bg-3.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const intervalMs = 2000; // time each image shows
  const fadeDuration = 1.2; // seconds

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden top-10"
    >
      {/* Background Crossfade */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: fadeDuration, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <LazyLoadImage
              src={src}
              alt={`Hero background ${i + 1}`}
              effect="blur"
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center text-white">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            font-heading 
            text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] 
            font-bold 
            leading-relaxed
          "
        >
          Bringing Hope and Education <br className="hidden sm:block" /> to the
          Children of Tamasha Artists
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-100"
        >
          Since 2011, Sevashram has been home to{" "}
          <span className="text-primary font-semibold">95 children</span>,
          empowering them with love, care, and learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Donate Now Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              bg-[#F9A826] text-white px-8 py-3 rounded-md
              font-heading font-semibold tracking-tight text-base md:text-lg
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              transition-colors duration-300 ease-in-out
              hover:bg-[#F59E0B]
            "
          >
            Donate Now
          </motion.button>

          {/* Become a Volunteer */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              bg-white text-[#F9A826] px-8 py-3 rounded-md
              font-heading font-semibold text-base md:text-lg
              border border-[#F9A826]
              shadow-[0_6px_16px_rgba(0,0,0,0.12)]
              transition-colors duration-300 ease-in-out
              hover:bg-gray-100
            "
          >
            Become a Volunteer
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              bg-[#F9A826] text-white px-8 py-3 rounded-md
              font-heading font-semibold tracking-tight text-base md:text-lg
              shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              transition-colors duration-300 ease-in-out
              hover:bg-[#F59E0B]
            "
          >
            Our Story
          </motion.button>
        </motion.div>

        {/* Impact Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center"
        >
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary">
              95+
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">
              Children Supported
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary">
              14
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">
              Years of Service
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary">
              0
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">
              Government Aid
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
