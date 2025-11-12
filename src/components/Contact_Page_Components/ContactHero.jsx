import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#FDE68A] to-[#FFF7ED]">
      {/* Optional Background Pattern - Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-4 border-white"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border-4 border-white"></div>
      </div>

      {/* Luminous depth overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 -80px 80px rgba(255,255,255,0.3)'
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:pt-28 lg:pb-10 flex flex-col items-center justify-center text-center min-h-[40vh] md:min-h-[45vh]">
        {/* Heading - Fade in with upward motion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[42px] text-[#1E3A8A] leading-tight mb-4 md:mb-5"
          style={{ letterSpacing: '0.3px' }}
        >
          Get in Touch with Us
        </motion.h1>

        {/* Subtext - Fade in with slight delay */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="font-body text-[16px] md:text-[18px] text-[#4B5563] max-w-[700px] leading-relaxed"
          style={{ lineHeight: '1.6', letterSpacing: '0.3px' }}
        >
          We'd love to hear from you — whether you want to volunteer, donate, or just learn more.
        </motion.p>
      </div>

      {/* Wave Divider - Smooth transition to next section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.6 }}
        className="relative w-full"
      >
        <svg
          className="w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,80 480,80 720,50 C960,20 1200,20 1440,50 L1440,100 L0,100 Z"
            fill="#FFFFFF"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default ContactHero;
