import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserPlus, Smile } from 'lucide-react';

const HelpSection = () => {
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

  // Help options data
  const helpOptions = [
    {
      id: 1,
      icon: Heart,
      title: 'Donate Now',
      description: 'Your contribution helps us provide food, shelter, and education to children in need.',
      buttonText: 'Donate Now',
      link: '/donate',
      color: '#F9A826'
    },
    {
      id: 2,
      icon: UserPlus,
      title: 'Become a Volunteer',
      description: 'Share your time and skills — teach, mentor, or simply bring joy to the children.',
      buttonText: 'Join Us',
      link: '/volunteer',
      color: '#F9A826'
    },
    {
      id: 3,
      icon: Smile,
      title: 'Sponsor a Child',
      description: "Empower a child's future by supporting their complete education and care.",
      buttonText: 'Sponsor Now',
      link: '/sponsor',
      color: '#F9A826'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFF9E6] to-white py-20 md:py-20 overflow-hidden">
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
          <h2 className="font-poppins font-semibold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
            How You Can Help
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every small contribution brings hope, learning, and happiness to a child's life.
          </p>
        </motion.div>

        {/* Help Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {helpOptions.map((option) => (
            <HelpCard key={option.id} option={option} variants={cardVariants} />
          ))}
        </motion.div>

        {/* Optional Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="font-open-sans text-[#1F2937] text-base md:text-lg leading-relaxed">
            Together, we can build a brighter future for every child.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Help Card Component
const HelpCard = ({ option, variants }) => {
  const IconComponent = option.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative bg-[#F8FAFC] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-2 hover:border-[#F9A826] border-2 border-transparent flex flex-col items-center text-center min-h-[380px]"
    >
      {/* Icon Container */}
      <div className="mb-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F9A826] to-[#FDE68A] group-hover:from-[#F59E0B] group-hover:to-[#F9A826] transition-all duration-300"
        >
          <IconComponent 
            className="w-10 h-10 text-white" 
            strokeWidth={2} 
          />
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col items-center">
        {/* Title */}
        <h3 className="font-poppins font-semibold text-[#1E3A8A] text-xl md:text-2xl mb-3">
          {option.title}
        </h3>

        {/* Description */}
        <p className="font-open-sans text-[#4B5563] text-base leading-relaxed mb-6 max-w-[90%]">
          {option.description}
        </p>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-[#F9A826] text-white font-poppins font-semibold px-6 py-3 rounded-lg hover:bg-[#F59E0B] transition-all duration-300 uppercase tracking-wide shadow-md hover:shadow-lg"
      >
        {option.buttonText}
      </motion.button>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(249,168,38,0.3)]"></div>
      </div>
    </motion.div>
  );
};

export default HelpSection;