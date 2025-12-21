import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { submitPartnershipInquiry } from "../../utils/partnershipApi";

const partnershipOptions = [
  "CSR Project Sponsorship",
  "Employee Volunteering Programs",
  "Skill-Based / Pro-Bono Support",
  "Strategic / Long-Term Partnership",
  "Campaign or Event Partnership",
  "Not sure / Open to discussion",
];

const PartnershipInquiryForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipInterest: "",
    message: "",
  });

  const [showOptional, setShowOptional] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-select partnership interest from hash (when user clicks "Interested?" in model cards)
  useEffect(() => {
    if (location.hash === "#inquiry-form") {
      const hash = window.location.hash;
      const urlParams = new URLSearchParams(window.location.search);
      const interest = urlParams.get("interest");
      if (interest && partnershipOptions.includes(interest)) {
        setFormData((prev) => ({ ...prev, partnershipInterest: interest }));
      }
      // Clean URL after reading
      window.history.replaceState({}, "", window.location.pathname + hash);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitPartnershipInquiry(formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  if (submitted) {
    return (
      <section id="inquiry-form" className="py-24 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center py-16"
          >
            <CheckCircle className="w-24 h-24 text-[#F9A826] mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A] mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
              Our partnerships team has received your inquiry and will contact you shortly.
            </p>
            <p className="mt-6 text-[#6B7280]">
              For urgent queries, email us at{" "}
              <a href="mailto:partnerships@sevashram.org" className="text-[#F9A826] hover:underline">
                partnerships@sevashram.org
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry-form" className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A]">
            Let’s Explore a Partnership
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Share a few details and our partnerships team will get in touch.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization & Contact Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="orgName" className="block text-sm font-medium text-[#374151] mb-2">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orgName"
                  required
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  placeholder="Your organization / company name"
                  className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] transition"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-[#374151] mb-2">
                  Contact Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Full name"
                  className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] transition"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="official email address"
                  className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Contact number"
                  className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] transition"
                />
              </div>
            </div>

            {/* Partnership Interest Dropdown */}
            <div>
              <label htmlFor="partnershipInterest" className="block text-sm font-medium text-[#374151] mb-2">
                Partnership Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="partnershipInterest"
                  required
                  value={formData.partnershipInterest}
                  onChange={(e) => setFormData({ ...formData, partnershipInterest: e.target.value })}
                  className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] appearance-none cursor-pointer transition"
                >
                  <option value="" disabled>
                    Select partnership model
                  </option>
                  {partnershipOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-2">
                Message / Brief Requirement <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your partnership idea or requirements"
                className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]/20 focus:border-[#F9A826] transition resize-none"
              />
            </div>

            {/* Optional Fields Toggle */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="text-[#F9A826] font-medium hover:underline"
              >
                {showOptional ? "Hide" : "Add more details"} (optional)
              </button>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="bg-[#F9A826] text-white px-12 py-4 rounded-xl font-heading font-semibold text-lg shadow-md hover:bg-[#F59E0B] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 w-full md:w-auto"
              >
                {loading ? "Submitting..." : "Submit Partnership Inquiry"}
              </motion.button>

              <p className="mt-4 text-xs text-gray-500">
                We respect your privacy. Your information will only be used to contact you regarding partnerships.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipInquiryForm;