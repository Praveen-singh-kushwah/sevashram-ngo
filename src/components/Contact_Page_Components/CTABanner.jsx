import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#F9A826] to-[#FDE68A] overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {/* Optional Background Pattern - Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        {/* Abstract heart shapes */}
        <div className="absolute top-10 left-[10%] w-16 h-16">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute bottom-16 right-[15%] w-20 h-20">
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        {/* Helping hands silhouette */}
        <div className="absolute top-1/2 left-[5%] w-24 h-24 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/3 right-[8%] w-20 h-20 rounded-full border-4 border-white"></div>
      </div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-bold text-[22px] md:text-[26px] lg:text-[28px] text-white leading-tight mb-4"
        >
          Want to make a difference?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="font-body text-[14px] md:text-[16px] text-[#FFF7ED] max-w-[700px] mx-auto mb-8 leading-relaxed"
        >
          Join our mission and bring hope to the children of Tamasha artists.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
        >
          {/* Primary Button - Become a Volunteer */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              bg-white text-[#F9A826] 
              font-heading font-semibold text-[16px]
              px-8 py-3.5 rounded-full
              shadow-lg hover:shadow-xl
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F9A826]
              w-full sm:w-auto min-w-[200px]
              group
            "
            aria-label="Become a volunteer"
          >
            <span className="group-hover:scale-105 inline-block transition-transform">
              Become a Volunteer
            </span>
          </motion.button>

          {/* Secondary Button - Donate Now */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              bg-transparent border-2 border-white text-white
              font-heading font-semibold text-[16px]
              px-8 py-3.5 rounded-full
              hover:bg-white hover:text-[#F9A826]
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F9A826]
              w-full sm:w-auto min-w-[200px]
              group
            "
            aria-label="Donate now"
          >
            <span className="group-hover:scale-105 inline-block transition-transform">
              Donate Now
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Optional: Animated gradient flow effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          animation: 'shimmer 10s infinite linear'
        }}
      ></div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
