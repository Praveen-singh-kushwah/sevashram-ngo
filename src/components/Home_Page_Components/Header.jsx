import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar shadow/shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        bg-white fixed w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "shadow-lg py-3"
            : "shadow-md py-4"
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/logo/logo.png" 
              alt="Sevashram Logo" 
              className="h-14 relative bottom-1 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative px-2 py-2 font-heading font-medium text-[14px] tracking-wide
                  transition-colors duration-300 group
                  ${
                    isActive(link.path)
                      ? "text-[#1E3A8A]"
                      : "text-[#1F2937] hover:text-[#F9A826]"
                  }
                `}
              >
                {link.name}
                {/* Active indicator */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F9A826]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                {!isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F9A826] transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            {/* Donate Now - Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="
                bg-[#F9A826] text-white px-6 py-2.5 rounded-lg
                font-heading font-semibold text-[16px]
                shadow-md hover:bg-[#F59E0B] hover:shadow-lg
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#F9A826] focus:ring-offset-2
              "
              aria-label="Donate Now"
            >
              Donate Now
            </motion.button>

            {/* Volunteer - Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="
                bg-transparent border-[1.5px] border-[#1E3A8A] text-[#1E3A8A]
                px-6 py-2.5 rounded-lg font-heading font-semibold text-[16px]
                hover:bg-[#1E3A8A] hover:text-white
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2
              "
              aria-label="Become a Volunteer"
            >
              Volunteer
            </motion.button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#F9A826] rounded"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#1F2937] transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#1F2937] transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#1F2937] transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4 py-3 rounded-lg font-heading font-medium text-[14px]
                    transition-colors duration-300
                    ${
                      isActive(link.path)
                        ? "bg-[#F9A826] text-white"
                        : "text-[#1F2937] hover:bg-gray-100 hover:text-[#F9A826]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="
                    bg-[#F9A826] text-white px-6 py-3 rounded-lg
                    font-heading font-semibold text-[16px]
                    shadow-md active:shadow-sm transition-shadow
                  "
                >
                  Donate Now
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="
                    border-[1.5px] border-[#1E3A8A] text-[#1E3A8A]
                    px-6 py-3 rounded-lg font-heading font-semibold text-[16px]
                    active:bg-[#1E3A8A] active:text-white transition-colors
                  "
                >
                  Volunteer
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
