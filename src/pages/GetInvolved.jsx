// In GetInvolved.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import HeroSection from '../components/GetInvolved_Page_Components/HeroSection';
import WaysToHelpSection from '../components/GetInvolved_Page_Components/WaysToHelpSection';
import StoriesGrid from '../components/Impact_Page_Components/StoriesGrid'

const GetInvolved = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ways to Help Section */}
      <WaysToHelpSection />

      <StoriesGrid/>
      
      {/* Other sections will be added here */}
    </motion.div>
  );
};

export default GetInvolved;