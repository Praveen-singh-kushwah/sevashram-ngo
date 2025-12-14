import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const VolunteerContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Us",
      value: "volunteers@sevashram.org",
      href: "mailto:volunteers@sevashram.org",
      subtext: "For volunteer-related questions",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98220 38974",
      href: "tel:+919822038974",
      subtext: "Mon–Fri, 10 AM – 6 PM IST",
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: "Sevashram NGO, Beed Road, Brahmanath Yelamb, Shirur Kasar, Beed – 413249, Maharashtra",
      subtext: "For official communication",
      href: null,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A] leading-tight">
          Need Help or Have Questions?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
          We’re here to help. Reach out to us anytime for volunteer-related queries or guidance.
        </p>
        <p className="mt-4 text-base text-[#6B7280] italic">
          Our team usually responds within 24–48 hours.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={index}
              href={method.href || undefined}
              target={method.href?.startsWith("http") ? "_blank" : undefined}
              rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={method.href ? { y: -6 } : {}}
              className={`
                block bg-[#FAFAFA] rounded-2xl p-8 text-center border border-gray-100
                shadow-sm hover:shadow-lg transition-all duration-400
                ${method.href ? "cursor-pointer" : "cursor-default"}
              `}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F9A826]/10 text-[#F9A826] mb-5">
                <Icon className="w-8 h-8" strokeWidth={1.8} />
              </div>
              <p className="font-medium text-[#1E3A8A] text-lg mb-2">{method.label}</p>
              <p className="font-heading font-semibold text-lg text-[#1E3A8A] mb-3 break-words">
                {method.value}
              </p>
              <p className="text-sm text-[#6B7280]">{method.subtext}</p>
            </motion.a>
          );
        })}
      </div>

      {/* Social Links (Optional) */}
      <div className="text-center">
        <p className="text-[#4B5563] mb-6">Follow us for updates and stories</p>
        <div className="flex justify-center gap-6">
          {[
            { icon: Instagram, href: "https://instagram.com/sevashram", label: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/sevashram", label: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com/company/sevashram", label: "LinkedIn" },
          ].map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#1E3A8A] hover:bg-[#F9A826] hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Final Reassurance */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16 text-[#6B7280] italic"
      >
        Your information is handled with care and confidentiality. We’re happy to guide you through the volunteering process.
      </motion.p>
    </div>
  </section>
  );
};

export default VolunteerContactSection;