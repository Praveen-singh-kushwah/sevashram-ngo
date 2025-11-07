import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Visiting Sevashram changed how I see hope and resilience. The children are full of joy and gratitude, despite their challenges. It's truly inspiring.",
      name: "Ramesh Patil",
      role: "Volunteer, Pune",
      image: "/images/home/testimonials/ramesh-patil.jpg"
    },
    {
      id: 2,
      quote: "Supporting Sevashram has been the most fulfilling decision of my life. Knowing that my contribution helps provide education and care to these wonderful children brings me immense joy.",
      name: "Priya Sharma",
      role: "Monthly Donor, Mumbai",
      image: "/images/home/testimonials/priya-sharma.jpg"
    },
    {
      id: 3,
      quote: "The dedication and love shown by the Sevashram team is remarkable. Every child here is treated with dignity and given opportunities to thrive. I'm proud to be associated with this mission.",
      name: "Dr. Anil Kumar",
      role: "Medical Volunteer, Delhi",
      image: "/images/home/testimonials/anil-kumar.jpg"
    },
    {
      id: 4,
      quote: "As a teacher volunteer, I've witnessed firsthand the transformation in these children. Their eagerness to learn and grow is heartwarming. Sevashram is truly making a difference.",
      name: "Meera Desai",
      role: "Education Volunteer, Bangalore",
      image: "/images/home/testimonials/meera-desai.jpg"
    },
    {
      id: 5,
      quote: "Sponsoring a child through Sevashram has been an incredible journey. Seeing their progress and achievements makes every contribution worthwhile. This organization is transparent and trustworthy.",
      name: "Rajesh Mehta",
      role: "Child Sponsor, Ahmedabad",
      image: "/images/home/testimonials/rajesh-mehta.jpg"
    },
    {
      id: 6,
      quote: "The warmth and care at Sevashram is palpable. Every visit reminds me of the power of compassion and community. These children deserve all the support we can give them.",
      name: "Anjali Reddy",
      role: "Corporate Donor, Hyderabad",
      image: "/images/home/testimonials/anjali-reddy.jpg"
    }
  ];

  // Scroll functions
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 550;
      const newScrollPosition = 
        direction === 'left' 
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-[#FFF7ED] py-20 md:py-20 overflow-hidden">
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
          <h2 className="font-poppins font-semibold text-[#1E3A8A] text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
            Testimonials & Donor Messages
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Hear what our donors, volunteers, and well-wishers say about Sevashram's mission and impact.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden lg:block">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-[#F9A826] text-white flex items-center justify-center hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-[#F9A826] text-white flex items-center justify-center hover:bg-[#F59E0B] transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonials Carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                index={index}
                variants={cardVariants}
              />
            ))}
          </motion.div>

          {/* Scroll Indicators - Mobile */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#E5E7EB] transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="group relative flex-shrink-0 w-[90%] sm:w-[480px] md:w-[520px] bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 snap-center"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-[#F9A826] opacity-80" />
      </div>

      {/* Quote Text */}
      <p className="font-open-sans text-[#1F2937] text-base md:text-lg leading-relaxed italic mb-6">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full border-2 border-[#F9A826] overflow-hidden shadow-md bg-gradient-to-br from-[#F9A826] to-[#FDE68A]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white font-poppins font-semibold text-xl">${testimonial.name.charAt(0)}</div>`;
              }}
            />
          </div>
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="font-poppins font-medium text-[#1E3A8A] text-base md:text-lg mb-1">
            {testimonial.name}
          </h4>
          <p className="font-open-sans text-[#4B5563] text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F9A826]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default TestimonialsSection;