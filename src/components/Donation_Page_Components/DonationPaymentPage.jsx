import React, { useState } from 'react';
import { ArrowRight, CreditCard, Building2, Smartphone, Shield, Lock, CheckCircle2, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const DonationPaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'upi',
      title: 'UPI',
      subtitle: 'PhonePe, GPay, Paytm & more',
      icon: Smartphone,
      color: 'text-purple-600'
    },
    {
      id: 'card',
      title: 'Credit/Debit Card',
      subtitle: 'Visa, Mastercard, RuPay',
      icon: CreditCard,
      color: 'text-blue-600'
    },
    {
      id: 'netbanking',
      title: 'Net Banking',
      subtitle: 'All major banks supported',
      icon: Building2,
      color: 'text-green-600'
    }
  ];

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
      setError('');
    }
  };

  const validateAmount = () => {
    if (!amount) {
      setError('Please enter a donation amount');
      return false;
    }
    if (parseInt(amount) < 50) {
      setError('Minimum donation amount is ₹50');
      return false;
    }
    setError('');
    return true;
  };

  const handleProceedToPay = () => {
    if (validateAmount() && selectedPayment) {
      setIsProcessing(true);
      setTimeout(() => {
        alert(`Processing payment of ₹${amount} via ${selectedPayment.toUpperCase()}`);
        setIsProcessing(false);
      }, 1500);
    } else if (!selectedPayment) {
      alert('Please select a payment method');
    }
  };

  const isFormValid = amount && parseInt(amount) >= 50 && selectedPayment && !error;

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-orange-50 via-[#FFF9F3] to-orange-50 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 w-full" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-3 sm:mb-4">
            Choose Donation Amount & Payment Method
          </h1>
          <p className="text-base sm:text-lg text-[#5A5A5A] max-w-2xl mx-auto px-4">
            Your generosity makes a meaningful impact. Please select an amount and a payment option.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 opacity-0 animate-[fadeInUp_0.7s_ease-out_0.1s_forwards] flex flex-col gap-10 items-center">
          
          {/* Donation Amount Section */}
          <div className="w-full max-w-lg">
            <label htmlFor="amount" className="block text-base sm:text-lg font-semibold text-[#444] mb-3 text-center">
              Donation Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative max-w-md">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-[#5A5A5A] pointer-events-none">
                ₹
              </div>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                onBlur={validateAmount}
                placeholder="500"
                className={`w-full h-14 sm:h-16 pl-12 pr-6 text-xl sm:text-2xl font-semibold rounded-2xl border-2 ${
                  error 
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                    : 'border-[#E0E0E0] focus:border-[#FF914D] focus:ring-[#FF914D]/20'
                } focus:ring-4 focus:outline-none transition-all duration-200 hover:border-[#FF914D]/50`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">!</span>
                  {error}
                </p>
              )}
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="mb-10">
            <h2 className="text-base sm:text-lg font-semibold text-[#444] mb-4">
              Select Payment Method <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                const isSelected = selectedPayment === method.id;
                return (
                  <motion.button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                      isSelected
                        ? 'border-[#FF914D] bg-[#FFF2E7] shadow-lg scale-[1.02]'
                        : 'border-[#EAEAEA] bg-white hover:border-[#FF914D]/50 hover:shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-[#FF914D] rounded-full flex items-center justify-center animate-[scaleIn_0.3s_ease-out]">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="flex flex-col items-start gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-white' : 'bg-gray-50 group-hover:bg-gray-100'
                      } transition-colors`}>
                        <Icon className={`w-6 h-6 ${isSelected ? method.color : 'text-gray-600'} transition-colors`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D2D2D] mb-1">{method.title}</h3>
                        <p className="text-sm text-[#676767]">{method.subtitle}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-[#676767]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#8E8E8E]" />
                <span className="font-medium">100% Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#8E8E8E]" />
                <span className="font-medium">SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8E8E8E]" />
                <span className="font-medium">Your Data is Safe</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
            <button
              onClick={handleProceedToPay}
              disabled={!isFormValid || isProcessing}
              className={`w-full sm:w-auto sm:min-w-[320px] h-14 px-8 flex items-center justify-center gap-3 rounded-2xl font-semibold text-base sm:text-lg text-white transition-all duration-300 ${
                isFormValid && !isProcessing
                  ? 'bg-[#FF914D] hover:bg-[#FF7A24] shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isProcessing ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Proceed to Pay
                  {amount && ` ₹${parseInt(amount).toLocaleString('en-IN')}`}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-[#5A5A5A] px-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.7s_forwards]">
          <p>By proceeding, you agree to our terms of service and privacy policy</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default DonationPaymentPage;