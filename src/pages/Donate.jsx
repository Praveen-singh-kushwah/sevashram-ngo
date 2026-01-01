import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import DonationHero from '../components/Donation_Page_Components/DonationHero';
import DonorDetailsForm from '../components/Donation_Page_Components/DonorDetailsForm ';
import DonationPaymentPage from '../components/Donation_Page_Components/DonationPaymentPage';

const Donate = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!location.pathname.endsWith('/payment') && <DonationHero />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <DonorDetailsForm />
              </motion.div>
            }
          />
          <Route
            path="payment"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='pt-10'
              >
                <DonationPaymentPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      
      {/* Other sections will be added here */}
    </motion.div>
  );
};

export default Donate;