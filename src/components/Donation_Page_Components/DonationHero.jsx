import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Lock } from 'lucide-react';

const DonationHero = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Background blob animation
  const blobVariants = {
    animate: {
      x: [0, 15, 0],
      y: [0, 15, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-white min-h-[50vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: '5s' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6"
            variants={itemVariants}
          >
            <Heart className="w-8 h-8 text-blue-600" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Your Support Creates <span className="text-blue-600">Meaningful Change</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Every contribution helps transform someone's life. Join us in making a difference.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              <span>Secure Payments</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2 text-blue-500" />
              <span>SSL Encrypted</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationHero;
