import { motion } from "framer-motion";
import { Link } from "react-scroll";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-[#607ecf] via-[#1E3A8A] to-[#1E40AF] overflow-hidden">
      {/* Optional subtle gradient overlay */}
      <div className="pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 max-w-3xl text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6"
        >
          Let’s Build Impact Together
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Whether you’re exploring CSR opportunities or ready to collaborate, we’d love to hear from you.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            to="inquiry-form"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#F9A826] text-white px-10 py-4 rounded-xl font-heading font-semibold text-lg shadow-lg hover:bg-[#F59E0B] focus:outline-none focus:ring-4 focus:ring-[#F9A826]/50 transition-all duration-300 inline-block"
            >
              Start a Partnership Conversation
            </motion.button>
          </Link>
        </motion.div>

        {/* Secondary Micro-CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-sm text-white/80"
        >
          Prefer email? Reach us at{" "}
          <a
            href="mailto:partnerships@sevashram.org"
            className="text-white underline hover:text-[#F9A826] transition-colors"
          >
            partnerships@sevashram.org
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTASection;