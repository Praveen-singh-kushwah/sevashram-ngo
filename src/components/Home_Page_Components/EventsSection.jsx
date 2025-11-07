import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const EventsSection = () => {
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

  // Events data
  const events = [
    {
      id: 1,
      image: '/images/home/events/childrens-day.jpg',
      title: "Children's Day Celebration 2025",
      date: 'November 14, 2025',
      category: 'Celebration',
      icon: Calendar,
      description: "A day of laughter, games, and learning celebrating every child's right to happiness and education.",
      link: '/events/childrens-day-2025'
    },
    {
      id: 2,
      image: '/images/home/events/fundraiser.webp',
      title: 'Smruti Din Fundraiser',
      date: 'October 30, 2025',
      category: 'Fundraiser',
      icon: Users,
      description: "A heartfelt evening raising funds for education and well-being of Sevashram's children.",
      link: '/events/smruti-din-fundraiser'
    },
    {
      id: 3,
      image: '/images/home/events/art-workshop.jpg',
      title: 'Volunteer Art Workshop',
      date: 'September 21, 2025',
      category: 'Workshop',
      icon: MapPin,
      description: "Creative minds came together to teach painting and crafts to our children, fostering artistic expression.",
      link: '/events/art-workshop'
    },
    {
      id: 4,
      image: '/images/home/events/annual-day.webp',
      title: 'Annual Day Celebration',
      date: 'December 15, 2025',
      category: 'Celebration',
      icon: Calendar,
      description: "Our annual showcase of talent, achievements, and growth — a celebration of hope and transformation.",
      link: '/events/annual-day'
    },
    {
      id: 5,
      image: '/images/home/events/health-camp.jpeg',
      title: 'Health & Wellness Camp',
      date: 'August 10, 2025',
      category: 'Health',
      icon: Users,
      description: "Free medical check-ups and health awareness sessions for children and families in the community.",
      link: '/events/health-camp'
    },
    {
      id: 6,
      image: '/images/home/events/sports-day.jpg',
      title: 'Sports Day Extravaganza',
      date: 'January 26, 2026',
      category: 'Sports',
      icon: MapPin,
      description: "A day filled with athletic competitions, teamwork, and the spirit of sportsmanship among our children.",
      link: '/events/sports-day'
    }
  ];

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
            Events and Activities
          </h2>

          {/* Subtitle */}
          <p className="font-open-sans text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Stay updated on our latest initiatives, celebrations, and community programs.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} variants={cardVariants} />
          ))}
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#F9A826] text-white font-poppins font-semibold px-8 py-3 rounded-lg hover:bg-[#F59E0B] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Event Card Component
const EventCard = ({ event, variants }) => {
  const IconComponent = event.icon;

  return (
    <motion.div
      variants={variants}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden">
        <LazyLoadImage
          src={event.image}
          alt={event.title}
          effect="blur"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          wrapperClassName="w-full h-full"
        />
        
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Event Title */}
        <h3 className="font-poppins font-semibold text-[#1E3A8A] text-lg md:text-xl leading-tight mb-3 line-clamp-2">
          {event.title}
        </h3>

        {/* Event Meta (Date & Category) */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-[#4B5563]">
            <Calendar className="w-4 h-4 text-[#F9A826]" />
            <span className="font-open-sans text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#4B5563]">
            <IconComponent className="w-4 h-4 text-[#F9A826]" />
            <span className="font-open-sans text-sm">{event.category}</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-open-sans text-[#1F2937] text-base leading-relaxed mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* View Details Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#F9A826] text-white font-poppins font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F59E0B] transition-all duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventsSection;