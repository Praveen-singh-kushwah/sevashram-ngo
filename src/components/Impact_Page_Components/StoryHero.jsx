import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getMediaUrl } from "../../utils/api";

const StoryHero = ({ story }) => {
  const title = story.Title || "Untitled Story";
  const quote = story.Quote || "";
  const date = story.createdAt;
  const coverUrl = getMediaUrl(story.cover?.url);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1.02,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const dateVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.7
      }
    }
  };

  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 12, 
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${coverUrl || '/images/impact/placeholder.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/60"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-7xl mt-8 mx-auto px-6 md:px-12 w-full">
          <motion.div
            variants={contentVariants}
            className="max-w-[650px]"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={contentVariants}
              className="mb-6"
            >
              <div className="flex items-center text-sm text-white/75 font-inter">
                <Link 
                  to="/" 
                  className="hover:text-white/90 hover:underline transition-colors"
                >
                  Home
                </Link>
                <span className="mx-2">→</span>
                <Link 
                  to="/impact" 
                  className="hover:text-white/90 hover:underline transition-colors"
                >
                  Impact Stories
                </Link>
                <span className="mx-2">→</span>
                <span className="text-white/90">{title}</span>
              </div>
            </motion.nav>

            {/* Title */}
            <motion.h1
              variants={titleVariants}
              className="font-playfair font-bold text-white leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(22px, 5vw, 36px)',
                textShadow: '0px 2px 16px rgba(0,0,0,0.4)',
                letterSpacing: '-0.5px'
              }}
            >
              {title}
            </motion.h1>

            {/* Quote */}
            {quote && (
              <motion.blockquote
                variants={quoteVariants}
                className="font-playfair italic text-white/85 text-xl md:text-2xl mt-4 max-w-[550px] leading-relaxed"
                style={{ letterSpacing: '1px' }}
              >
                <div className="flex items-start">
                  <div className="w-1 h-12 bg-[#F6E7C1] mr-4 mt-1 flex-shrink-0" />
                  <span>"{quote}"</span>
                </div>
              </motion.blockquote>
            )}

            {/* Date */}
            {date && (
              <motion.p
                variants={dateVariants}
                className="font-inter text-white/75 text-sm mt-4"
              >
                Published on {formatDate(date)}
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StoryHero;
