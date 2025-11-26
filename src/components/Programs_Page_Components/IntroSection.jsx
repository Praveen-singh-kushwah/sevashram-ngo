import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Heart, GraduationCap, Activity } from 'lucide-react';

const IntroSection = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Icons data for the enhancement row
  const icons = [
    { icon: GraduationCap, label: 'Education' },
    { icon: Shield, label: 'Protection' },
    { icon: BookOpen, label: 'Literacy' },
    { icon: Heart, label: 'Care' },
    { icon: Activity, label: 'Health' },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#F8F7F3] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          {/* Tagline */}
          <motion.span
            variants={itemVariants}
            className="inline-block text-[#1E4E79] font-heading font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Why These Programs Exist
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#1A1A1A] leading-tight mb-6"
          >
            Empowering Children & Families from the Tamasha Community
          </motion.h2>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-[#333333] text-lg leading-relaxed">
            <p>
              The children of Tamasha (folk dance) artists grow up facing challenges that most people never see—unstable homes, interrupted schooling, social neglect, abandonment, and the constant threat of exploitation. Many children are left without protection, guidance, or opportunities for a safer future.
            </p>
            <p>
              These issues are not isolated incidents; they are part of a cycle passed on through generations of marginalization. Without structured support, these children are pushed further into poverty, vulnerability, and social exclusion.
            </p>
            <p className="font-medium">
              Our programs exist to break this cycle.
            </p>
            <p>
              Through shelter, education, health support, protection, rehabilitation, and community outreach, we work to give every child dignity, safety, and a chance at a brighter future.
            </p>
          </motion.div>

          {/* Mission Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-10 relative inline-block"
          >
            <div className="absolute -inset-1 bg-[#F9B248]/20 rounded-lg blur-sm -z-10"></div>
            <p className="relative text-xl md:text-2xl font-heading font-semibold text-[#1E4E79] px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm">
              Our mission is simple: <span className="text-[#F9B248]">Protect, educate, and empower</span> every child we reach.
            </p>
          </motion.div>

          {/* Icons Row */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-hover:bg-[#1E4E79] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#F9B248] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-600 mt-1">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
