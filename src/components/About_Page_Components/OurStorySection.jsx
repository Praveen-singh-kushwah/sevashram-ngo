import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurStorySection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dividerVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60px",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="relative w-full bg-white py-20 lg:py-[80px]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 70%, #FFF7ED 100%)"
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[50px] items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F9A826]">
              <LazyLoadImage
                src="/images/about/story/founderWithChildern.webp"
                alt="Sevashram founders with children"
                effect="blur"
                className="w-full h-[250px] lg:h-[450px] object-cover"
                wrapperClassName="w-full"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            variants={textVariants}
            className="flex flex-col space-y-6"
          >
            {/* Section Title */}
            <div>
              <h2 className="font-['Poppins'] font-semibold text-[28px] md:text-[32px] text-[#1E3A8A] leading-[1.3] tracking-[0.5px]">
                Our Story
              </h2>
              
              {/* Accent Divider */}
              <motion.div
                variants={dividerVariants}
                className="h-[3px] bg-[#F9A826] mt-2 mb-4"
              ></motion.div>
            </div>

            {/* Intro Paragraph */}
            <p className="font-['Open_Sans'] font-normal text-[18px] text-[#1F2937] leading-[1.6] tracking-[0.2px]">
              Sevashram began in 2011 when Shri Suresh Rajhans and his wife Mayuri decided to provide a safe home for children of Tamasha artists and marginalized communities.
            </p>

            {/* Main Body Paragraph */}
            <p className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#4B5563] leading-[1.6] tracking-[0.2px]">
              What started in a 13x25 ft tin shed has grown into a family of 95 children — a place of love, dignity, and education. Over the years, Sevashram has become a second home for children seeking hope and care.
            </p>

            {/* Quote Block */}
            <motion.blockquote
              variants={quoteVariants}
              className="relative bg-[#FFF7ED] border-l-4 border-[#F9A826] pl-6 pr-4 py-5 rounded-r-lg mt-4"
              style={{
                boxShadow: "0 2px 8px rgba(249, 168, 38, 0.1)"
              }}
            >
              <p className="font-['Poppins'] italic font-medium text-[18px] text-[#1E3A8A] leading-[1.5] tracking-[0.3px]">
                "Every smile here is proof that love builds futures."
              </p>
            </motion.blockquote>

            {/* Optional Continue Cue */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#F9A826] font-['Open_Sans'] font-medium text-[14px] mt-4 cursor-pointer group"
            >
              <span className="group-hover:text-[#1E3A8A] transition-colors duration-300">
                Continue to our mission
              </span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                →
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Vertical Line (Visual Thread) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "60px", opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-[10%] w-[2px] bg-[#F9A826] hidden lg:block"
      ></motion.div>

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

export default OurStorySection;
