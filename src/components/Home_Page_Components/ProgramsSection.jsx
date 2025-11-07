import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Heart, Shield, Users } from 'lucide-react';

const ProgramsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Programs data
  const programs = [
    {
      id: 1,
      icon: BookOpen,
      image: '/images/home/programs/education.jpeg',
      title: 'Child Shelter & Education',
      description: 'Providing food, shelter, and schooling for orphaned and abandoned children of Tamasha artists — ensuring every child gets the education they deserve.',
      link: 'Explore Program',
      color: '#F9A826'
    },
    {
      id: 2,
      icon: GraduationCap,
      image: '/images/home/programs/higher-education.jpg',
      title: 'Higher Education Sponsorship',
      description: 'Supporting 20 children in Sambhaji Nagar with funding for their college and professional studies to help them achieve independence.',
      link: 'See Success Stories',
      color: '#F9A826'
    },
    {
      id: 3,
      icon: Heart,
      image: '/images/home/programs/health.jpg',
      title: 'Health & Nutrition Program',
      description: 'Regular medical check-ups, balanced meals, and clean water — ensuring children stay healthy and active in their learning journey.',
      link: 'Learn More',
      color: '#F9A826'
    },
    {
      id: 4,
      icon: Shield,
      image: '/images/home/programs/girls-protection.jpg',
      title: 'Girls Protection & Rehabilitation',
      description: 'Rescuing and rehabilitating girl children from exploitation, providing them safety, education, and emotional care in a nurturing environment.',
      link: 'Discover More',
      color: '#F9A826'
    },
  ];

  return (
    <section className="relative bg-[#FDE68A] py-20 md:py-20 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Label */}
          <p className="font-poppins font-bold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
            Our Programs & Initiatives
          </p>

          {/* Title */}
          <h2 className="text-black font-poppins font-semibold text-lg uppercase tracking-wider mb-3">
            Building Brighter Futures Through Care,<br className="hidden md:block" /> Education, and Empowerment
          </h2>

          {/* Intro Paragraph */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Sevashram runs multiple initiatives that focus on giving orphaned and abandoned children the chance to live, learn, and dream. Each program supports a different aspect of a child's growth — from education and nutrition to health and emotional well-being.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} variants={cardVariants} />
          ))}
        </motion.div>

        {/* Optional CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 bg-[#F9A826] text-white font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#E09616] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Program Card Component
const ProgramCard = ({ program, variants }) => {
  const IconComponent = program.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
    >
      {/* Icon/Image Container */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 bg-gradient-to-br from-[#F9A826] to-[#FDE68A] rounded-2xl flex items-center justify-center shadow-md"
        >
          <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="text-center">
        {/* Title */}
        <h3 className="font-poppins font-semibold text-[#1E3A8A] text-xl md:text-2xl mb-4 leading-tight">
          {program.title}
        </h3>

        {/* Description */}
        <p className="font-open-sans text-[#1F2937] text-base leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Learn More Link */}
        <div className="inline-flex items-center gap-2 text-[#F9A826] font-poppins font-medium text-sm group-hover:gap-3 transition-all duration-300">
          <span className="relative">
            {program.link}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9A826] group-hover:w-full transition-all duration-300"></span>
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramsSection;