import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-[85vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/impact/hero/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h3 className="text-[#FFD166] text-lg md:text-xl font-poppins mb-3 tracking-wider uppercase">
          Stories of Change
        </h3>
        <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold leading-tight mb-4">
          Transforming Lives, Inspiring Futures
        </h1>
        <p className="text-gray-200 text-base md:text-lg font-open-sans mb-8">
          Every story reflects our shared commitment to make the world a better place.
        </p>
        <a
          href="#stories"
          className="inline-block px-8 py-3 bg-[#F4A261] hover:bg-[#E76F51] text-white rounded-full transition-all duration-300 font-poppins font-medium"
        >
          Explore Stories
        </a>
      </motion.div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="w-1.5 h-8 rounded-full bg-white/40 overflow-hidden">
          <div className="w-full h-2 bg-white/90 animate-bounce rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
