import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile } from 'lucide-react';

const DonateBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#F9A826] to-[#FDE68A] overflow-hidden">
      {/* Optional overlay for subtle shine */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl">
            {/* Optional Impact Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <Heart className="w-4 h-4 text-[#1E3A8A]" fill="#1E3A8A" />
              <span className="font-open-sans text-[#1E3A8A] text-sm font-medium">
                95+ children supported thanks to kind donors like you
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-poppins font-bold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-wide mb-4"
            >
              Your small contribution can bring light to a child's life.
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-open-sans text-[#1F2937] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Together, we can give children the care, education, and future they deserve.
            </motion.p>
          </div>

          {/* Right Side - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto"
          >
            {/* Primary Button - Donate Now */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto bg-white text-[#F9A826] font-poppins font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-[#FFF1C2] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Donate Now
              </span>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </motion.button>

            {/* Secondary Button - Sponsor a Child */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto bg-transparent border-2 border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-lg hover:bg-white/15 transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Smile className="w-5 h-5" />
                Sponsor a Child
              </span>
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Optional decorative sparkles */}
        <div className="absolute top-10 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-40 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-32 left-64 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300"></div>
      </div>
    </section>
  );
};

export default DonateBanner;