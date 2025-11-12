import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Quick links data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/sevashram' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/sevashram' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@sevashram' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/sevashram' }
  ];

  return (
    <footer className="relative bg-[#1E3A8A] text-white overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Column 1 - Logo & About */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F9A826] to-[#FDE68A] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-white">
                Sevashram
              </h3>
            </div>

            {/* Tagline */}
            <p className="font-open-sans text-[#E2E8F0] text-sm md:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              A Shelter for the Children of Tamasha Artists.
            </p>

            {/* Optional Donate Link */}
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-2 bg-[#F9A826] text-white font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-[#F59E0B] transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-open-sans text-sm text-white hover:text-[#FDE68A] transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Contact Information */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {/* Address */}
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-[#FDE68A] flex-shrink-0 mt-0.5" />
                <span className="font-open-sans text-sm text-[#E2E8F0] leading-relaxed text-left">
                  Sevashram NGO<br />
                  Beed Road, Brahmanath Yelamb<br />
                  Tal Shirur Kasar, Dist Beed – 413249
                </span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+919822038974"
                  className="flex items-center justify-center md:justify-start gap-3 font-open-sans text-sm text-[#E2E8F0] hover:text-[#FDE68A] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 9822038974</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:sevashram.ngo@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-3 font-open-sans text-sm text-[#E2E8F0] hover:text-[#FDE68A] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>sevashram.ngo@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4 - Social Media */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h4 className="font-poppins font-semibold text-base md:text-lg text-white mb-4">
              Connect With Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#F9A826] hover:bg-white/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Newsletter Signup (Optional) */}
            <div>
              <p className="font-open-sans text-sm text-[#E2E8F0] mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FDE68A] transition-colors duration-300 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#F9A826] text-white font-poppins font-semibold text-sm rounded-lg hover:bg-[#F59E0B] transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-px bg-white/20 my-8"
        />

        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Copyright */}
          <p className="font-open-sans text-sm text-[#E2E8F0] text-center md:text-center">
            © 2025 Sevashram NGO. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#F9A826] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#F59E0B] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
