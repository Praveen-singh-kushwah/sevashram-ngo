// src/components/Donation_Page_Components/DonationAmountSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const DonationAmountSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [500, 1000, 2500, 5000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount if preset is selected
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only numbers
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    if (!amount) return;
    // Handle form submission
    console.log('Donation amount:', amount, 'Type:', donationType);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Contribution</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us continue our mission. Every rupee makes a difference.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Preset Amounts */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {presetAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative p-6 rounded-xl border-2 text-center
                    ${
                      selectedAmount === amount
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 bg-white text-gray-800 hover:border-blue-400'
                    }
                    transition-all duration-200
                  `}
                >
                  {selectedAmount === amount && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                  <span className="text-xl font-semibold">₹{amount.toLocaleString('en-IN')}</span>
                  {amount === 500 && (
                    <p className="text-xs mt-2 text-gray-500">Helps provide learning materials</p>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="pt-4">
              <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative max-w-md mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">₹</span>
                <input
                  type="text"
                  id="customAmount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          {/* Donation Frequency */}
          <div className="pt-4">
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">Choose how often you'd like to give</p>
            <div className="flex justify-center">
              <div className="inline-flex bg-gray-100 p-1 rounded-xl">
                {['one-time', 'monthly'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDonationType(type)}
                    className={`
                      px-6 py-2 rounded-lg text-sm font-medium transition-colors
                      ${
                        donationType === type
                          ? 'bg-white shadow-sm text-blue-600'
                          : 'text-gray-600 hover:text-gray-800'
                      }
                    `}
                  >
                    {type === 'one-time' ? 'One-time' : 'Monthly'}
                  </button>
                ))}
              </div>
            </div>
            {donationType === 'monthly' && (
              <p className="text-center text-sm text-green-600 mt-2">
                Monthly donations create long-term impact.
              </p>
            )}
          </div>

          {/* CTA Button */}
          <div className="pt-8 text-center">
            <motion.button
              type="submit"
              disabled={!selectedAmount && !customAmount}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl
                ${
                  selectedAmount || customAmount
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }
                transition-colors duration-200
              `}
            >
              Continue to Payment
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonationAmountSection;