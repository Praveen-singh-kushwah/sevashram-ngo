import { motion } from "framer-motion";

const CTASection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="relative w-full min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden py-20 lg:py-[80px]"
      style={{
        background: "linear-gradient(90deg, #F9A826 0%, #FDE68A 100%)",
      }}
    >
      {/* Animated Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(90deg, #F9A826 0%, #FDE68A 100%)",
            "linear-gradient(90deg, #FDE68A 0%, #F9A826 100%)",
            "linear-gradient(90deg, #F9A826 0%, #FDE68A 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity: 0.3 }}
      ></motion.div>

      {/* Optional: Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30 L50 70 M30 50 L70 50' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='50' cy='50' r='15' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      ></div>

      {/* Optional: Floating Hand Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white opacity-5 text-6xl"
            initial={{ y: "100%", x: `${20 + i * 20}%` }}
            animate={{
              y: "-100%",
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          >
            ✋
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-[1100px] px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            className="font-['Poppins'] font-bold text-[26px] md:text-[32px] lg:text-[36px] text-white leading-[1.3] tracking-[0.5px] max-w-[800px]"
          >
            Join Hands with Us
          </motion.h2>

          {/* Subtext / Description */}
          <motion.p
            variants={subtextVariants}
            className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#FFF7ED] leading-[1.7] max-w-[700px]"
          >
            Every small act of kindness brings a child closer to hope, education, and a brighter future. Together, we can transform lives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 sm:gap-6 mt-8"
            variants={containerVariants}
          >
            {/* Primary Button - Donate Now */}
            <motion.a
              href="/donate"
              custom={0}
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-[#F9A826] font-['Poppins'] font-semibold text-[15px] md:text-[16px] px-8 py-3.5 md:px-10 md:py-4 rounded-full transition-all duration-300"
              style={{
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              Donate Now
            </motion.a>

            {/* Secondary Button - Become a Volunteer */}
            <motion.a
              href="/volunteer"
              custom={1}
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FFFFFF",
                color: "#F9A826",
                borderColor: "#FFFFFF",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-transparent text-white font-['Poppins'] font-semibold text-[15px] md:text-[16px] px-8 py-3.5 md:px-10 md:py-4 rounded-full border-2 border-white transition-all duration-300"
              style={{
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
              }}
            >
              Become a Volunteer
            </motion.a>
          </motion.div>

          {/* Optional: Pulsing Glow Effect on Primary Button */}
          <style>{`
            @keyframes pulse-glow {
              0%, 100% {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              }
              50% {
                box-shadow: 0 4px 20px rgba(249, 168, 38, 0.4), 0 0 30px rgba(249, 168, 38, 0.2);
              }
            }
          `}</style>
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

export default CTASection;
