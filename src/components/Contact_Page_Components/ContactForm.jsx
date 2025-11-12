import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 3) return "Name must be at least 3 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";

      case "phone":
        // Phone is optional, but if provided, validate format
        if (value.trim() && !/^[\d+\s-()]+$/.test(value)) {
          return "Please enter a valid phone number";
        }
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Please enter a brief message (at least 10 characters)";
        return "";

      default:
        return "";
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle blur (mark field as touched)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "phone") {
        // Phone is optional
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    // Validate form
    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTouched({});
      setErrors({});

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.name.trim().length >= 3 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim().length >= 10
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="w-full max-w-[600px] bg-[#F8FAFC] rounded-xl p-6 md:p-10 shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
    >
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block font-body font-medium text-[14px] text-[#4B5563] mb-2"
          >
            Name <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className={`
              w-full font-body text-[16px] text-[#1F2937] bg-white
              border rounded-lg px-4 py-3
              placeholder:text-[#9CA3AF]
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-opacity-50
              ${
                errors.name && touched.name
                  ? "border-[#DC2626] focus:border-[#DC2626]"
                  : "border-[#E5E7EB] focus:border-[#F9A826]"
              }
            `}
            aria-invalid={errors.name && touched.name ? "true" : "false"}
            aria-describedby={errors.name && touched.name ? "name-error" : undefined}
          />
          {errors.name && touched.name && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              id="name-error"
              className="text-[#DC2626] text-[13px] mt-1.5 font-body"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-body font-medium text-[14px] text-[#4B5563] mb-2"
          >
            Email <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="your.email@example.com"
            className={`
              w-full font-body text-[16px] text-[#1F2937] bg-white
              border rounded-lg px-4 py-3
              placeholder:text-[#9CA3AF]
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-opacity-50
              ${
                errors.email && touched.email
                  ? "border-[#DC2626] focus:border-[#DC2626]"
                  : "border-[#E5E7EB] focus:border-[#F9A826]"
              }
            `}
            aria-invalid={errors.email && touched.email ? "true" : "false"}
            aria-describedby={errors.email && touched.email ? "email-error" : undefined}
          />
          {errors.email && touched.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              id="email-error"
              className="text-[#DC2626] text-[13px] mt-1.5 font-body"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block font-body font-medium text-[14px] text-[#4B5563] mb-2"
          >
            Phone <span className="text-[#9CA3AF] text-[13px]">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+91 9822038974"
            className={`
              w-full font-body text-[16px] text-[#1F2937] bg-white
              border rounded-lg px-4 py-3
              placeholder:text-[#9CA3AF]
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-opacity-50
              ${
                errors.phone && touched.phone
                  ? "border-[#DC2626] focus:border-[#DC2626]"
                  : "border-[#E5E7EB] focus:border-[#F9A826]"
              }
            `}
            aria-invalid={errors.phone && touched.phone ? "true" : "false"}
            aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
          />
          {errors.phone && touched.phone && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              id="phone-error"
              className="text-[#DC2626] text-[13px] mt-1.5 font-body"
            >
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-body font-medium text-[14px] text-[#4B5563] mb-2"
          >
            Message <span className="text-[#DC2626]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            placeholder="Tell us how we can help you..."
            className={`
              w-full font-body text-[16px] text-[#1F2937] bg-white
              border rounded-lg px-4 py-3
              placeholder:text-[#9CA3AF]
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-opacity-50
              resize-none min-h-[120px]
              ${
                errors.message && touched.message
                  ? "border-[#DC2626] focus:border-[#DC2626]"
                  : "border-[#E5E7EB] focus:border-[#F9A826]"
              }
            `}
            aria-invalid={errors.message && touched.message ? "true" : "false"}
            aria-describedby={errors.message && touched.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && touched.message && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              id="message-error"
              className="text-[#DC2626] text-[13px] mt-1.5 font-body"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center">
          <motion.button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            whileHover={isFormValid() && !isSubmitting ? { scale: 1.05 } : {}}
            whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : {}}
            className={`
              font-heading font-semibold text-[16px] text-white
              bg-[#F9A826] rounded-full px-9 py-3.5
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-offset-2
              ${
                isFormValid() && !isSubmitting
                  ? "hover:shadow-lg cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }
            `}
            aria-label="Send message"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success Message */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center"
            >
              <p className="text-[#10B981] font-body text-[15px] font-medium">
                ✓ Thank you for contacting us! We'll get back to you soon.
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center"
            >
              <p className="text-[#DC2626] font-body text-[15px] font-medium">
                Please fill in all required fields correctly.
              </p>
            </motion.div>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
