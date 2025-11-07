import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-stretch">
          {/* Left Column - Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
            <motion.img
              src="/images/home/about/founder.jpg"
              alt="Shri Suresh Rajhans & Mayuri - Founders of Sevashram"
              className="w-full h-[450px] object-contain rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-transform duration-500"
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-left lg:text-left text-center"
          >
            {/* Section Label */}
            <p className="text-[#F9A826] font-heading font-semibold text-[18px] uppercase tracking-[1px] mb-3">
              About Sevashram
            </p>

            {/* Main Heading */}
            <h2 className="text-[#1E3A8A] font-heading font-bold text-2xl md:text-3xl lg:text-[32px] leading-[1.4] mb-6">
              A Home of Hope and Education for the Children of Tamasha Artists
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-6">
              <p className="font-body text-[#1F2937] text-base md:text-[17px] lg:text-[18px] leading-[1.7] max-w-[550px] mx-auto lg:mx-0">
                Founded in 2011 by <span className="font-semibold">Shri Suresh Rajhans</span> and his wife <span className="font-semibold">Mayuri</span>, Sevashram began in a small 13×25 ft tin shed with a simple yet powerful vision — to provide shelter, care, and education to children who had none.
              </p>
              <p className="font-body text-[#1F2937] text-base md:text-[17px] lg:text-[18px] leading-[1.7] max-w-[550px] mx-auto lg:mx-0">
                Today, Sevashram shelters and educates <span className="font-semibold text-[#F9A826]">95 children</span> of Tamasha artists, beggars, and marginalized families — helping them find dignity, education, and a future full of possibilities.
              </p>
            </div>

            {/* Learn More Button */}
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="
                  bg-[#F9A826] text-white px-7 py-3 rounded-lg
                  font-heading font-semibold text-[16px]
                  shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                  hover:bg-[#F59E0B] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-offset-2
                "
              >
                Read Our Full Story
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
