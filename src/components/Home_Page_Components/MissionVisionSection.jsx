import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVisionSection = () => {
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

  // Cards data
  const cards = [
    {
      id: 1,
      icon: Target,
      title: 'Our Mission',
      description: 'To provide care, education, and a safe home for children of Tamasha artists, empowering them to live with dignity and purpose.',
      color: '#F9A826'
    },
    {
      id: 2,
      icon: Eye,
      title: 'Our Vision',
      description: 'A society where every child — regardless of their background — has access to learning, growth, and the chance to achieve their dreams.',
      color: '#F9A826'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Our Values',
      description: 'Compassion, Integrity, Equality, and Empowerment guide every action we take at Sevashram, nurturing a culture of respect and hope.',
      color: '#F9A826'
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-20 overflow-hidden">
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
          {/* Title */}
          <h2 className="font-poppins font-semibold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-wide mb-4">
            Our Mission, Vision, and Values
          </h2>

          {/* Optional Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Guided by compassion, driven by education, and rooted in equality.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <MVVCard key={card.id} card={card} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Mission, Vision, Values Card Component
const MVVCard = ({ card, variants }) => {
  const IconComponent = card.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative bg-[#F8FAFC] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] min-h-[340px] flex flex-col items-center"
    >
      {/* Icon Container with Circular Background */}
      <div className="flex justify-center mb-5">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative w-20 h-20 flex items-center justify-center"
        >
          {/* Circular backdrop */}
          <div className="absolute inset-0 bg-[#FDE68A] opacity-30 rounded-full"></div>
          
          {/* Icon */}
          <IconComponent 
            className="relative z-10 w-12 h-12 text-[#F9A826]" 
            strokeWidth={2} 
          />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="text-center flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-poppins font-semibold text-[#1E3A8A] text-lg md:text-xl mb-3 tracking-wide">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-open-sans text-[#1F2937] text-base leading-relaxed max-w-[340px] mx-auto">
          {card.description}
        </p>
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F9A826] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default MissionVisionSection;