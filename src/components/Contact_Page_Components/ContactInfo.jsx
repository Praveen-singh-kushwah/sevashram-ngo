import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: "Sevashram, Beed Road, Brahmanath Yelamb, Tal Shirur Kasar, Dist. Beed, Maharashtra – 413249",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9822038974",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sevashramfoundation@gmail.com",
    },
    {
      icon: Clock,
      label: "Visiting Hours",
      value: "Mon–Sat, 9:00 AM – 6:00 PM",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "#",
      ariaLabel: "Visit our Facebook page",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      ariaLabel: "Visit our Instagram page",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "#",
      ariaLabel: "Visit our YouTube channel",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {/* Section Heading */}
      <div className="mb-8 text-left lg:text-left md:text-center sm:text-center">
        <h2 className="font-heading font-semibold text-[28px] md:text-[32px] text-[#1E3A8A] mb-3">
          Contact Information
        </h2>
        {/* Amber Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
          className="h-[3px] bg-[#F9A826] mb-8"
        ></motion.div>
      </div>

      {/* Contact Details */}
      <div className="space-y-5">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              className="flex items-start gap-4 text-left lg:text-left md:text-center sm:text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.2 + 0.1 * index,
                  type: "spring",
                  stiffness: 200,
                }}
                className="flex-shrink-0 mt-1"
              >
                <IconComponent
                  size={24}
                  className="text-[#F9A826]"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="font-body font-medium text-[14px] text-[#4B5563] mb-1">
                  {detail.label}
                </p>
                <p className="font-body text-[16px] md:text-[18px] text-[#1F2937] leading-relaxed">
                  {detail.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="mt-10 pt-8 border-t border-[#E5E7EB]"
      >
        <h3 className="font-heading font-semibold text-[20px] text-[#1E3A8A] mb-5 text-left lg:text-left md:text-center sm:text-center">
          Follow Us
        </h3>

        <div className="flex items-center gap-5 lg:justify-start md:justify-center sm:justify-center">
          {socialLinks.map((social, index) => {
            const SocialIcon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.5 + 0.1 * index,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  filter: "drop-shadow(0 4px 8px rgba(249, 168, 38, 0.3))",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-[#1E3A8A] hover:text-[#F9A826] transition-colors duration-300"
              >
                <SocialIcon size={32} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
