import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TimelineSection = () => {
  // Timeline milestones data
  const milestones = [
    {
      id: 1,
      year: "2011",
      title: "Sevashram Founded",
      description:
        "Sevashram was founded by Shri Suresh Rajhans and Mayuri Rajhans to support children of Tamasha artists.",
      side: "left",
    },
    {
      id: 2,
      year: "2013",
      title: "First 10 Children Enrolled",
      description:
        "The shelter expanded to include its first batch of 10 children — marking the beginning of hope.",
      side: "right",
    },
    {
      id: 3,
      year: "2017",
      title: "New Permanent Shelter Home",
      description:
        "With growing support, Sevashram established its permanent residence to accommodate more children.",
      side: "left",
    },
    {
      id: 4,
      year: "2020",
      title: "60 Children in Full Care",
      description:
        "Despite challenges, the NGO continued operations, educating and caring for 60+ children.",
      side: "right",
    },
    {
      id: 5,
      year: "2025",
      title: "95+ Children Supported",
      description:
        "Today, Sevashram provides holistic care — food, education, and love — to over 95 children.",
      side: "left",
    },
  ];

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  // Animation variants
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full py-20 lg:py-[80px] bg-[#F8FAFC] overflow-hidden">
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
            Our Journey
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
            A story of growth, resilience, and compassion through the years.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative max-w-[1000px] mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-[51.2%] transform -translate-x-1/2 w-1 bg-[#1E3A8A] rounded-full hidden lg:block"
            style={{
              top: "40px",
              bottom: "40px",
            }}
          ></motion.div>

          {/* Mobile Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-[20px] w-1 bg-[#1E3A8A] rounded-full lg:hidden"
            style={{
              top: "40px",
              bottom: "40px",
            }}
          ></motion.div>

          {/* Timeline Milestones */}
          <div className="relative space-y-16 lg:space-y-20">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`relative flex items-center ${
                  milestone.side === "left"
                    ? "lg:flex-row-reverse lg:justify-end"
                    : "lg:flex-row lg:justify-start"
                } flex-row justify-start`}
              >
                {/* Timeline Node (Circle) */}
                <motion.div
                  custom={index}
                  variants={nodeVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute left-[20px] lg:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#F9A826] rounded-full border-4 border-white z-10"
                  style={{
                    boxShadow: "0 0 10px rgba(249, 168, 38, 0.3)",
                  }}
                ></motion.div>

                {/* Spacer for Desktop (to push card to correct side) */}
                <div className="hidden lg:block lg:w-[calc(50%-40px)]"></div>

                {/* Timeline Card */}
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial={
                    milestone.side === "left" ? "hiddenLeft" : "hiddenRight"
                  }
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className={`bg-white rounded-xl p-6 lg:p-[24px] border-l-4 border-[#F9A826] ml-12 lg:ml-0 ${
                    milestone.side === "left"
                      ? "lg:mr-[60px] lg:text-right"
                      : "lg:ml-[90px] lg:text-left"
                  } w-full lg:w-[calc(50%-40px)] transition-all duration-300`}
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Enhanced Shadow on Hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                    }}
                  ></div>

                  {/* Year */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.6 + index * 0.2 },
                          }
                        : {}
                    }
                    className="font-['Poppins'] font-semibold text-[20px] text-[#F9A826] leading-[1.4] mb-2"
                  >
                    {milestone.year}
                  </motion.h3>

                  {/* Title */}
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.7 + index * 0.2 },
                          }
                        : {}
                    }
                    className="font-['Poppins'] font-semibold text-[18px] text-[#1E3A8A] leading-[1.4] mb-3"
                  >
                    {milestone.title}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.8 + index * 0.2 },
                          }
                        : {}
                    }
                    className="font-['Open_Sans'] font-normal text-[15px] md:text-[16px] text-[#1F2937] leading-[1.6]"
                  >
                    {milestone.description}
                  </motion.p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="font-['Poppins'] font-medium text-[18px] md:text-[20px] text-[#1E3A8A] leading-[1.6] mb-6">
            Our journey continues — join us in shaping tomorrow.
          </p>

          <motion.a
            href="/get-involved"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(249, 168, 38, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#F9A826] text-white font-['Poppins'] font-semibold text-[16px] px-8 py-3 rounded-full transition-all duration-300"
            style={{
              boxShadow: "0 4px 12px rgba(249, 168, 38, 0.2)",
            }}
          >
            Get Involved
          </motion.a>
        </motion.div>
      </div>

      {/* Optional: Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

export default TimelineSection;
