import { motion } from "framer-motion";
import { Heart, Eye, Users } from "lucide-react";

const VisionMissionSection = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cards = [
    {
      id: "mission",
      icon: Heart,
      title: "Our Mission",
      text: "To provide care, education, and a safe home for children of Tamasha artists and underprivileged families — helping them build a dignified life.",
      accentStyle: "border-t-4 border-[#F9A826]",
    },
    {
      id: "vision",
      icon: Eye,
      title: "Our Vision",
      text: "A society where every child, regardless of background, has the opportunity to learn, grow, and achieve their dreams.",
      accentStyle: "border-t-4 border-[#F9A826]",
      glow: true,
    },
    {
      id: "values",
      icon: Users,
      title: "Our Values",
      text: "Compassion, Integrity, Equality, and Empowerment — the guiding principles behind every Sevashram initiative.",
      accentStyle: "border-t-4 border-[#F9A826]",
      hasDivider: true,
    },
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 lg:py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Section Title */}
          <motion.h2
            variants={titleVariants}
            className="font-['Poppins'] font-semibold text-[28px] md:text-[32px] text-[#1E3A8A] text-center leading-[1.3] tracking-[0.5px]"
          >
            Our Mission, Vision, and Values
          </motion.h2>

          {/* Accent Divider */}
          <motion.div
            variants={dividerVariants}
            className="h-[3px] bg-[#F9A826] mt-4 mb-6"
          ></motion.div>

          {/* Intro Paragraph */}
          <motion.p
            variants={titleVariants}
            className="font-['Open_Sans'] font-normal text-[18px] text-[#4B5563] text-center max-w-[750px] leading-[1.6] mb-10 lg:mb-[40px]"
          >
            Everything we do at Sevashram stems from a simple belief — that every child deserves love, dignity, and opportunity.
          </motion.p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px] w-full">
            {cards.map((card, index) => {
              const IconComponent = card.icon;
              
              return (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  className={`
                    relative bg-white rounded-2xl p-10 md:p-[40px_30px] min-h-[300px]
                    flex flex-col items-center text-center
                    transition-all duration-300 ease-in-out
                    group cursor-pointer
                    ${card.accentStyle}
                  `}
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                    ...(card.glow && {
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08), 0 0 20px rgba(249, 168, 38, 0.1)",
                    }),
                  }}
                >
                  {/* Enhanced shadow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    }}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className="relative mb-4 text-[#F9A826] group-hover:text-[#1E3A8A] transition-colors duration-300"
                  >
                    <IconComponent size={48} strokeWidth={1.5} />
                  </motion.div>

                  {/* Card Title */}
                  <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#1E3A8A] mb-3 relative z-10">
                    {card.title}
                  </h3>

                  {/* Optional Divider for Values Card */}
                  {card.hasDivider && (
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40px" }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="h-[2px] bg-[#F9A826] mb-3"
                    ></motion.div>
                  )}

                  {/* Card Text */}
                  <p className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#1F2937] leading-[1.6] relative z-10">
                    {card.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Optional: Subtle Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #FDE68A 12%, transparent 12.5%, transparent 87%, #FDE68A 87.5%, #FDE68A),
            linear-gradient(150deg, #FDE68A 12%, transparent 12.5%, transparent 87%, #FDE68A 87.5%, #FDE68A),
            linear-gradient(30deg, #FDE68A 12%, transparent 12.5%, transparent 87%, #FDE68A 87.5%, #FDE68A),
            linear-gradient(150deg, #FDE68A 12%, transparent 12.5%, transparent 87%, #FDE68A 87.5%, #FDE68A)
          `,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
        }}
      ></div>

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

export default VisionMissionSection;
