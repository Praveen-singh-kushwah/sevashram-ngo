import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PartnerHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center">
          {/* Optional Eyebrow Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-[#F9A826] mb-4"
          >
            CSR & Corporate Partnerships
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#1E3A8A] leading-tight max-w-4xl mx-auto"
          >
            Partner With Us to Create Meaningful Social Impact
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
          >
            Collaborate with us through CSR initiatives, employee engagement, and skill-based partnerships to drive measurable change.
          </motion.p>

          {/* Optional Trust Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-base text-[#6B7280] italic"
          >
            Trusted by individuals, institutions, and purpose-driven organizations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link to="#partnership-models">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#F9A826] text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg shadow-md hover:bg-[#F59E0B] hover:shadow-lg transition-all duration-300"
              >
                Explore Partnership Options
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link to="#inquiry-form">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-transparent border border-[#1E3A8A] text-[#1E3A8A] px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHeroSection;