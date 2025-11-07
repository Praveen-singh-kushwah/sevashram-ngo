import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Heart, Calendar, Globe } from 'lucide-react';

const ImpactStats = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Statistics data
  const stats = [
    {
      id: 1,
      icon: Users,
      value: 95,
      suffix: '+',
      title: 'Children Supported',
      description: 'Given access to food, shelter, and education',
      duration: 2.5
    },
    {
      id: 2,
      icon: Heart,
      value: 35,
      suffix: '',
      title: 'Girls Rescued',
      description: 'Provided protection and rehabilitation',
      duration: 2.2
    },
    {
      id: 3,
      icon: Calendar,
      value: 14,
      suffix: '',
      title: 'Years of Service',
      description: 'Working since 2011',
      duration: 2.0
    },
    {
      id: 4,
      icon: Globe,
      value: 253,
      suffix: '+',
      title: 'Families Surveyed',
      description: 'Identified children in need through outreach',
      duration: 2.5
    }
  ];

  return (
    <section className="relative bg-[#FFF7E6] py-20 md:py-25 overflow-hidden">
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
            Our Impact in Numbers
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every number tells a story of hope, growth, and transformation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Stat Card Component
const StatCard = ({ stat, variants }) => {
  const IconComponent = stat.icon;
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = stat.duration * 1000; // Convert to milliseconds
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Ease out function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * stat.value);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(stat.value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, stat.value, stat.duration]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="group relative text-center p-6 md:p-8 rounded-xl bg-white border-2 border-[#FDE68A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#F9A826]"
    >
      {/* Icon Container */}
      <div className="flex justify-center mb-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F9A826] to-[#FDE68A]"
        >
          <IconComponent 
            className="w-10 h-10 md:w-12 md:h-12 text-white" 
            strokeWidth={2} 
          />
        </motion.div>
      </div>

      {/* Counter */}
      <div className="mb-2">
        <h3 className="font-poppins font-bold text-[#F9A826] text-4xl md:text-5xl lg:text-6xl leading-tight">
          {count}{stat.suffix}
        </h3>
      </div>

      {/* Title */}
      <h4 className="font-poppins font-medium text-[#1E3A8A] text-lg md:text-xl mb-2 tracking-wide">
        {stat.title}
      </h4>

      {/* Description */}
      <p className="font-open-sans text-[#4B5563] text-sm md:text-base leading-relaxed max-w-[220px] mx-auto">
        {stat.description}
      </p>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F9A826] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-full"></div>
    </motion.div>
  );
};

export default ImpactStats;