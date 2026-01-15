import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { fetchHomeStories } from "../../utils/api";
import StoryCard from "../stories/StoryCard";

const StoriesSection = () => {
  const scrollContainerRef = useRef(null);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // // Stories data
  // const stories = [
  //   {
  //     id: 1,
  //     image: '/images/home/stories/aditya.avif',
  //     title: "Aditya's Journey — From Abandoned to Ambitious Student",
  //     description: "From living in uncertainty to dreaming big, Aditya's journey represents Sevashram's mission in action.",
  //     link: '/stories/aditya'
  //   },
  //   {
  //     id: 2,
  //     image: '/images/home/stories/meena.webp',
  //     title: "Meena's Hope — A Story of Resilience",
  //     description: "Rescued from a life of hardship, Meena is now pursuing higher education with confidence.",
  //     link: '/stories/meena'
  //   },
  //   {
  //     id: 3,
  //     image: '/images/home/stories/aditya.avif',
  //     title: "Rohit's Dream — Aspiring to Heal",
  //     description: "Once without a home, Rohit now studies to become a doctor, inspiring his younger peers.",
  //     link: '/stories/rohit'
  //   },
  //   {
  //     id: 4,
  //     image: '/images/home/stories/priya.webp',
  //     title: "Priya's Transformation — Finding Her Voice",
  //     description: "From silence to strength, Priya now leads her class and mentors other children at Sevashram.",
  //     link: '/stories/priya'
  //   },
  //   {
  //     id: 5,
  //     image: '/images/home/stories/meena.webp',
  //     title: "Arjun's Success — Breaking Barriers",
  //     description: "Overcoming adversity, Arjun is now preparing for engineering entrance exams with determination.",
  //     link: '/stories/arjun'
  //   }
  // ];

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

  useEffect(() => {
    fetchHomeStories({ limit: 5 })
      .then(res => setStories(res.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading || stories.length === 0) return null;

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
            className="flex items-center justify-start gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-4 lg:pl-16"
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

export default StoriesSection;