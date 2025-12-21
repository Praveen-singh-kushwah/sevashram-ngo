import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Handshake, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WaysToHelpSection = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 6 },
  };

  const cards = [
    {
      id: 1,
      icon: <Heart className="w-12 h-12 text-[#0EA5E9]" />,
      title: "Donate",
      description: "Support our mission with a secure donation. Every contribution counts.",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-50/80",
      onClick: () => navigate('/donate'),
    },
    {
      id: 2,
      icon: <Handshake className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Partner With Us",
      description: "Explore CSR and corporate collaboration opportunities.",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-50/80",
      onClick: () => navigate('/partner'),
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12 text-[#10B981]" />,
      title: "Volunteer With Us",
      description: "Join us as a volunteer. Your time can change lives.",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-50/80",
      onClick: () => navigate('/volunteer'),
    },
  ];

  return (
    <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Ways You Can Get Involved
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Choose how you would like to support our mission.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`group relative p-8 rounded-2xl border border-slate-200 bg-white cursor-pointer transition-all duration-300 ${card.hoverColor}`}
              variants={cardVariants}
              whileHover="hover"
              onClick={card.onClick}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              aria-label={`Learn more about ${card.title}`}
            >
              <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {card.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span className="mr-2">Learn more</span>
                <motion.span
                  className="inline-block"
                  variants={arrowVariants}
                >
                  →
                </motion.span>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToHelpSection;
