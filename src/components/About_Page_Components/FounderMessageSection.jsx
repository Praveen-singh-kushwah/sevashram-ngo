import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FounderMessageSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const dividerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "60px",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const signatureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section 
      className="relative w-full py-20 lg:py-[80px] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)"
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center"
        >
          {/* Left Column - Founders' Portrait */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="relative"
            >
              {/* Circular Image Container */}
              <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-[#F9A826]">
                <LazyLoadImage
                  src="/images/about/founders/founders.jpg"
                  alt="Shri Suresh Rajhans and Mayuri Rajhans - Founders of Sevashram"
                  effect="blur"
                  className="w-full h-full object-cover"
                  wrapperClassName="w-full h-full"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
                  }}
                />
                
                {/* Optional: Soft vignette overlay for warmth */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.1)"
                  }}
                ></div>
              </div>

              {/* Decorative amber glow effect */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none opacity-20"
                style={{
                  boxShadow: "0 0 40px rgba(249, 168, 38, 0.3)"
                }}
              ></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Message Content */}
          <motion.div
            variants={textVariants}
            className="flex flex-col space-y-5 text-center lg:text-left lg:pl-[50px]"
          >
            {/* Section Heading */}
            <div>
              <h2 className="font-['Poppins'] font-semibold text-[26px] md:text-[28px] lg:text-[32px] text-[#1E3A8A] leading-[1.3] tracking-[0.5px]">
                A Message from Our Founders
              </h2>
              
              {/* Accent Divider */}
              <motion.div
                variants={dividerVariants}
                className="h-[3px] bg-[#F9A826] mt-3 mb-5 mx-auto lg:mx-0"
              ></motion.div>
            </div>

            {/* Message Paragraph - Optional Quote Box */}
            <motion.div
              variants={paragraphVariants}
              className="relative bg-[rgba(249,168,38,0.05)] border border-[rgba(249,168,38,0.2)] rounded-2xl p-6 md:p-[25px]"
            >
              <p className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#1F2937] leading-[1.7] tracking-[0.2px]">
                Sevashram is not just a shelter; it's a home built on compassion. 
                We believe that every child deserves love, dignity, and opportunity. 
                Each smile we see is a reminder that hope can change lives — one child at a time.
              </p>
            </motion.div>

            {/* Signature Line Separator */}
            <motion.div
              variants={signatureVariants}
              className="flex flex-col items-center lg:items-start space-y-3 mt-4"
            >
              {/* Small decorative line before signature */}
              <div className="w-[40px] h-[2px] bg-[#F9A826]"></div>
              
              {/* Signature */}
              <p className="font-['Open_Sans'] italic font-normal text-[16px] text-[#1E3A8A] tracking-[0.3px]">
                – Shri Suresh & Mayuri Rajhans, Founders
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional: Subtle texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A826' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Soft ambient gradient animation (optional) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
            "linear-gradient(180deg, #FFFFFF 0%, #FFF7ED 100%)",
            "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity: 0.3 }}
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

export default FounderMessageSection;
