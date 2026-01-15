import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, GraduationCap, Activity, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProgramsHeroSection = () => {
  const navigate = useNavigate();
  
  const handleExplorePrograms = () => {
    const programsSection = document.getElementById('programs-list');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSupportProgram = () => {
    navigate('/volunteer');
  };

  const stats = [
    {
      id: 1,
      icon: Users,
      value: 120,
      suffix: "+",
      label: "Children Rescued",
      duration: 1.4,
    },
    {
      id: 2,
      icon: GraduationCap,
      value: 20,
      suffix: "+",
      label: "Students in College",
      duration: 1.4,
    },
    {
      id: 3,
      icon: Activity,
      value: 300,
      suffix: "+",
      label: "Annual Medical Checkups",
      duration: 1.4,
    },
    {
      id: 4,
      icon: Calendar,
      value: 15,
      suffix: "+",
      label: "Years of Field Work",
      duration: 1.4,
    },
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#0b1724] text-white">
      {/* Background image with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/programs/hero/hero.jpeg')" }}
        />
      </motion.div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-28 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left column: text + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-3/5 lg:w-1/2"
        >
          {/* Optional badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F9B248]/15 border border-[#F9B248]/40 mb-4">
            <span className="text-xs md:text-sm font-heading tracking-wide uppercase text-[#F9B248]">
              Our Impactful Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold leading-tight text-white mb-4">
            Programs &amp; Initiatives That Change Lives
          </h1>

          {/* Subheading */}
          <p className="font-body text-base sm:text-lg md:text-xl text-gray-100 mb-4 max-w-xl">
            Focused support for orphaned children, vulnerable girls, and families from the Tamasha community.
          </p>

          {/* Supporting line */}
          <p className="font-body text-sm sm:text-base md:text-lg text-gray-200/90 mb-8 max-w-xl">
            Our education, health, and protection programs give children the safety, dignity, and opportunities
            they deserve. Explore how each initiative transforms lives on the ground.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10"
          >
            <motion.button
              onClick={handleExplorePrograms}
              whileHover={{ scale: 1.04, boxShadow: "0 14px 35px rgba(0,0,0,0.35)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F9B248] text-[#1E293B] font-heading font-semibold text-sm sm:text-base shadow-[0_10px_28px_rgba(0,0,0,0.35)] hover:bg-[#F9A826] transition-colors duration-200"
            >
              Explore All Programs
            </motion.button>

            <motion.button
              onClick={handleSupportProgram}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/70 text-white font-heading font-semibold text-sm sm:text-base bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors duration-200"
            >
              Support a Program
            </motion.button>
          </motion.div>

          {/* Impact counters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-md sm:max-w-lg"
          >
            {stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} />
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: kept minimal so the image remains visible; reserved for future enhancements */}
        <div className="hidden md:block md:w-2/5 lg:w-1/2" />
      </div>
    </section>
  );
};

const StatItem = ({ stat }) => {
  const Icon = stat.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start;
    const duration = stat.duration * 1000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * stat.value);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(stat.value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, stat.value, stat.duration]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
      className="flex flex-col gap-1.5"
    >
      <div className="flex items-center gap-2 text-xs font-body text-[#E5E7EB]/90">
        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#F9B248]" />
        </div>
        <span>{stat.label}</span>
      </div>
      <div className="font-heading font-bold text-2xl sm:text-3xl text-[#F9B248]">
        {count}
        {stat.suffix}
      </div>
    </motion.div>
  );
};

export default ProgramsHeroSection;

