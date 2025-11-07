import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const StoriesSection = () => {
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

  // Stories data
  const stories = [
    {
      id: 1,
      image: '/images/home/stories/aditya.avif',
      title: "Aditya's Journey — From Abandoned to Ambitious Student",
      description: "From living in uncertainty to dreaming big, Aditya's journey represents Sevashram's mission in action.",
      link: '/stories/aditya'
    },
    {
      id: 2,
      image: '/images/home/stories/meena.webp',
      title: "Meena's Hope — A Story of Resilience",
      description: "Rescued from a life of hardship, Meena is now pursuing higher education with confidence.",
      link: '/stories/meena'
    },
    {
      id: 3,
      image: '/images/home/stories/rohit.webp',
      title: "Rohit's Dream — Aspiring to Heal",
      description: "Once without a home, Rohit now studies to become a doctor, inspiring his younger peers.",
      link: '/stories/rohit'
    },
    {
      id: 4,
      image: '/images/home/stories/priya.webp',
      title: "Priya's Transformation — Finding Her Voice",
      description: "From silence to strength, Priya now leads her class and mentors other children at Sevashram.",
      link: '/stories/priya'
    },
    {
      id: 5,
      image: '/images/home/stories/meena.webp',
      title: "Arjun's Success — Breaking Barriers",
      description: "Overcoming adversity, Arjun is now preparing for engineering entrance exams with determination.",
      link: '/stories/arjun'
    }
  ];

  // Scroll functions
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
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
    <section className="relative bg-white py-20 md:py-20 overflow-hidden">
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
            Stories of Hope
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every child has a story of courage, transformation, and dreams fulfilled at Sevashram.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border-2 border-[#F9A826] text-[#F9A826] hover:bg-[#F9A826] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous stories"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border-2 border-[#F9A826] text-[#F9A826] hover:bg-[#F9A826] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next stories"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Stories Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {stories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </motion.div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {stories.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#FDE68A]"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Story Card Component
const StoryCard = ({ story, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-[250px] overflow-hidden rounded-t-2xl">
        {/* Image with Lazy Loading */}
        <div className="relative w-full h-full">
          <LazyLoadImage
            src={story.image}
            alt={story.title}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            wrapperClassName="w-full h-full"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-poppins font-semibold text-[#1E3A8A] text-lg md:text-xl leading-tight mb-3">
          {story.title}
        </h3>

        {/* Description */}
        <p className="font-open-sans text-[#4B5563] text-base leading-relaxed mb-4 line-clamp-3">
          {story.description}
        </p>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 font-poppins font-semibold text-[#F9A826] border-2 border-[#F9A826] px-5 py-2 rounded-lg hover:bg-[#F9A826] hover:text-white transition-all duration-300"
        >
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StoriesSection;