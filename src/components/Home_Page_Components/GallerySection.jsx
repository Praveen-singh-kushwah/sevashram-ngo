import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: '/images/home/programs/education.jpeg',
      caption: "Children's Day 2025",
      alt: 'Children celebrating at Sevashram'
    },
    {
      id: 2,
      src: '/images/home/programs/education.jpeg',
      caption: 'Learning Together',
      alt: 'Children studying in classroom'
    },
    {
      id: 3,
      src: '/images/home/programs/education.jpeg',
      caption: 'Art Workshop',
      alt: 'Children creating art'
    },
    {
      id: 4,
      src: '/images/home/programs/education.jpeg',
      caption: 'Sports Day',
      alt: 'Children playing sports'
    },
    {
      id: 5,
      src: '/images/home/programs/education.jpeg',
      caption: 'Music Class',
      alt: 'Children learning music'
    },
    {
      id: 6,
      src: '/images/home/programs/education.jpeg',
      caption: 'Community Gathering',
      alt: 'Community event at Sevashram'
    },
    {
      id: 7,
      src: '/images/home/programs/education.jpeg',
      caption: 'Daily Activities',
      alt: 'Children in daily activities'
    },
    {
      id: 8,
      src: '/images/home/programs/education.jpeg',
      caption: 'Volunteer Program',
      alt: 'Volunteers with children'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="relative bg-[#F8FAFC] py-20 md:py-20 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Title */}
          <h2 className="font-poppins font-semibold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-wide mb-4">
            Gallery & Media
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            A glimpse into the life, learning, and joy of Sevashram's children.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {galleryImages.map((image) => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              variants={itemVariants}
              onClick={() => openLightbox(image)}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#F9A826] text-white font-poppins font-semibold px-8 py-3 rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </section>
  );
};

// Gallery Item Component
const GalleryItem = ({ image, variants, onClick }) => {
  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 cursor-pointer aspect-square"
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <LazyLoadImage
          src={image.src}
          alt={image.alt}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          wrapperClassName="w-full h-full"
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#1E3A8A] bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-400 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Eye className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1E3A8A] bg-opacity-70 text-white px-3 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-open-sans font-medium text-sm text-center">
          {image.caption}
        </p>
      </div>
    </motion.div>
  );
};

// Lightbox Component
const Lightbox = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#F9A826] transition-colors duration-300 text-4xl font-light"
          aria-label="Close lightbox"
        >
          ×
        </button>

        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain rounded-lg"
        />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white px-6 py-4 rounded-b-lg">
          <p className="font-open-sans text-center text-lg">
            {image.caption}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GallerySection;