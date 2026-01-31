  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { ArrowRight, Shield, Lock, Heart } from 'lucide-react';
  import { submitDonorDetails } from "../../utils/donationApi";

  const DonorDetailsForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      purpose: 'Education Support',
      organization: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData(prev => ({ ...prev, [name]: value }));

      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    };

    const validateForm = () => {
      const newErrors = {};
      const requiredFields = ['fullName', 'email', 'phone', 'country'];

      requiredFields.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = 'This field is required';
        }
      });

      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        const response = await submitDonorDetails(formData);

        const donationRef = response?.data?.documentId;

        navigate(`/donate/payment?ref=${donationRef}`);   
      } catch (error) {
        console.error("Donation submission failed:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };


    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Tell Us About Yourself
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Your support helps us continue our mission. Please share your details to make your donation seamless.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left Image Section */}
              <div className="hidden lg:block lg:col-span-2 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex flex-col justify-center items-center p-8 text-white">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Heart className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold">Making a Difference Together</h3>
                    <p className="text-orange-50 text-sm leading-relaxed">
                      Every contribution creates ripples of positive change in our community. Thank you for being part of this journey.
                    </p>

                    <div className="pt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <span className="text-sm">Secure & Encrypted</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Lock className="w-4 h-4" />
                        </div>
                        <span className="text-sm">100% Safe Payments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Section */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 rounded-lg border-2 ${errors.fullName ? 'border-red-400' : 'border-gray-300'
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full h-12 px-4 rounded-lg border-2 ${errors.email ? 'border-red-400' : 'border-gray-300'
                          }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full h-12 px-4 rounded-lg border-2 ${errors.phone ? 'border-red-400' : 'border-gray-300'
                          }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 rounded-lg border-2 ${errors.country ? 'border-red-400' : 'border-gray-300'
                        }`}
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1.5">{errors.country}</p>}
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Purpose <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border-2 border-gray-300"
                    >
                      <option value="Education Support">Education Support</option>
                      <option value="Healthcare Program">Healthcare Program</option>
                      <option value="Women Empowerment">Women Empowerment</option>
                      <option value="Community Development">Community Development</option>
                      <option value="Other / General Fund">Other / General Fund</option>
                    </select>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization Name <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border-2 border-gray-300"
                      placeholder="Organization Name"
                    />
                  </div>

                  {/* Trust Badges for Mobile */}
                  <div className="lg:hidden bg-blue-50 rounded-xl p-4 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" />
                      <span>Secure & Encrypted</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-500" />
                      <span>100% Safe Payments</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  export default DonorDetailsForm;
