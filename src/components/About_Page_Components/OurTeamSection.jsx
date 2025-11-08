import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurTeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Shri Suresh Rajhans",
      role: "Founder & Director",
      quote: "Every child deserves a chance to dream.",
      image: "/images/about/team/teacher-1.jpg",
    },
    {
      id: 2,
      name: "Mayuri Rajhans",
      role: "Co-Founder & Managing Director",
      quote: "Love is the foundation of all we do.",
      image: "/images/about/team/teacher-2.jpg",
    },
    {
      id: 3,
      name: "Rohit Deshmukh",
      role: "Operations Head",
      quote: "Every small act of kindness counts.",
      image: "/images/about/team/teacher-3.webp",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Education Coordinator",
      quote: "Education opens doors to endless possibilities.",
      image: "/images/about/team/teacher-4.jpg",
    },
    {
      id: 5,
      name: "Amit Patil",
      role: "Child Welfare Officer",
      quote: "Their smiles fuel my purpose every day.",
      image: "/images/about/team/teacher-5.avif",
    },
    {
      id: 6,
      name: "Sneha Kulkarni",
      role: "Healthcare Coordinator",
      quote: "Healing begins with compassion and care.",
      image: "/images/about/team/teacher-4.jpg",
    },
  ];

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

  return (
    <section className="relative w-full py-20 lg:py-[80px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Section Title */}
          <h2 className="font-['Poppins'] font-semibold text-[28px] md:text-[30px] lg:text-[32px] text-[#1E3A8A] leading-[1.3] tracking-[0.5px] mb-4">
            Our Team
          </h2>

          {/* Accent Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-[3px] bg-[#F9A826] mx-auto mb-5"
          ></motion.div>

          {/* Subtitle */}
          <p className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#4B5563] leading-[1.6] max-w-[700px] mx-auto">
            Meet the compassionate individuals who dedicate their time and heart to nurturing the children of Sevashram.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px]"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white rounded-2xl p-8 md:p-[30px] flex flex-col items-center text-center transition-all duration-300"
              style={{
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Hover Border Top - Amber */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F9A826] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-all duration-400 transform scale-x-0 group-hover:scale-x-100 origin-center"></div>

              {/* Enhanced Shadow on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                }}
              ></div>

              {/* Team Member Photo */}
              <div className="relative mb-5 lg:mb-6">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="relative w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border-2 border-[#F9A826]"
                  style={{
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <LazyLoadImage
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    effect="blur"
                    className="w-full h-full object-cover"
                    wrapperClassName="w-full h-full"
                  />
                </motion.div>
              </div>

              {/* Team Member Info */}
              <div className="relative z-10 flex flex-col items-center space-y-2">
                {/* Name */}
                <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#1E3A8A] leading-[1.4] tracking-[0.3px]">
                  {member.name}
                </h3>

                {/* Role/Designation */}
                <p className="font-['Open_Sans'] font-medium text-[15px] text-[#4B5563] leading-[1.5]">
                  {member.role}
                </p>

                {/* Quote */}
                <p className="font-['Open_Sans'] italic font-normal text-[14px] text-[#1F2937] leading-[1.6] mt-3 max-w-[250px]">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Subtle Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A826' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

export default OurTeamSection;
