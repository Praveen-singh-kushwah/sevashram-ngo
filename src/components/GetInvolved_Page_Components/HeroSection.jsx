import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.03,
      y: -4,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Community illustration component for the right side
  const CommunityIllustration = () => (
    <div className="hidden lg:block absolute right-0  -translate-y-1/2 w-1/2 h-full">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Background circles */}
        <motion.circle
          cx="450"
          cy="300"
          r="200"
          fill="#E6F0FF"
          initial={{ scale: 0.9, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Abstract people shapes */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Person 1 */}
          <circle cx="450" cy="250" r="20" fill="#0EA5E9" />
          <rect x="445" y="270" width="10" height="40" rx="5" fill="#0EA5E9" />
          <rect x="430" y="280" width="40" height="10" rx="5" fill="#0EA5E9" />

          {/* Person 2 */}
          <circle cx="500" cy="280" r="18" fill="#F9A826" />
          <rect x="495" y="300" width="8" height="50" rx="4" fill="#F9A826" />
          <rect x="480" y="320" width="35" height="8" rx="4" fill="#F9A826" />

          {/* Person 3 */}
          <circle cx="400" cy="320" r="22" fill="#10B981" />
          <rect x="395" y="340" width="12" height="45" rx="6" fill="#10B981" />
          <rect x="375" y="360" width="45" height="10" rx="5" fill="#10B981" />

          {/* Abstract connection lines */}
          <line x1="450" y1="270" x2="500" y2="298" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="450" y1="270" x2="400" y2="320" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

          {/* Abstract shapes */}
          <motion.circle
            cx="380"
            cy="250"
            r="8"
            fill="#F9A826"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              type: 'spring',
              stiffness: 200
            }}
          />
          <motion.circle
            cx="520"
            cy="320"
            r="6"
            fill="#0EA5E9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              type: 'spring',
              stiffness: 200
            }}
          />
          <motion.circle
            cx="420"
            cy="380"
            r="5"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
              type: 'spring',
              stiffness: 200
            }}
          />
        </motion.g>

        {/* Floating elements */}
        <motion.g>
          <motion.circle
            cx="350"
            cy="200"
            r="4"
            fill="#94A3B8"
            animate={{
              y: [0, -15, 0],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.circle
            cx="550"
            cy="400"
            r="3"
            fill="#94A3B8"
            animate={{
              y: [0, 10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );

  return (
    <section className="relative bg-[#e5eef7] min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      {/* Community illustration */}
      <CommunityIllustration />

      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px] relative z-10 py-16 md:py-20">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6"
            variants={itemVariants}
          >
            Get Involved and Make a Difference
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Whether you choose to donate, partner, or volunteer — your support helps us uplift communities and create meaningful change.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 flex items-center group"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              Explore Ways to Contribute
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
