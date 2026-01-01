import { useEffect, useState } from "react";
import { fetchTeamMembers, getMediaUrl } from "../../utils/api";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurTeamSection = () => {

  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  // Team members data
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Shri Suresh Rajhans",
  //     role: "Founder & Director",
  //     quote: "Every child deserves a chance to dream.",
  //     image: "/images/about/team/teacher-1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Mayuri Rajhans",
  //     role: "Co-Founder & Managing Director",
  //     quote: "Love is the foundation of all we do.",
  //     image: "/images/about/team/teacher-2.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Rohit Deshmukh",
  //     role: "Operations Head",
  //     quote: "Every small act of kindness counts.",
  //     image: "/images/about/team/teacher-3.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Priya Sharma",
  //     role: "Education Coordinator",
  //     quote: "Education opens doors to endless possibilities.",
  //     image: "/images/about/team/teacher-4.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "Amit Patil",
  //     role: "Child Welfare Officer",
  //     quote: "Their smiles fuel my purpose every day.",
  //     image: "/images/about/team/teacher-5.avif",
  //   },
  //   {
  //     id: 6,
  //     name: "Sneha Kulkarni",
  //     role: "Healthcare Coordinator",
  //     quote: "Healing begins with compassion and care.",
  //     image: "/images/about/team/teacher-4.jpg",
  //   },
  // ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dividerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "60px",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const res = await fetchTeamMembers();
        setTeamMembers(res.data || []);
      } catch (err) {
        console.error("Failed to load team members", err);
      } finally {
        setLoading(false);
      }
    };

    loadTeam();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading team members...
      </section>
    );
  }

  return (
    <section className="relative w-full py-20 lg:py-[80px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Section Title */}
          <h2 className="font-['Poppins'] font-semibold text-[28px] md:text-[30px] lg:text-[32px] text-[#1E3A8A] leading-[1.3] tracking-[0.5px] mb-4">
            Our Team
          </h2>

          {/* Accent Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-[3px] bg-[#F9A826] mx-auto mb-5"
          ></motion.div>

          {/* Subtitle */}
          <p className="font-['Open_Sans'] font-normal text-[16px] md:text-[18px] text-[#4B5563] leading-[1.6] max-w-[700px] mx-auto">
            Meet the compassionate individuals who dedicate their time and heart to nurturing the children of Sevashram.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px]"
        >
          {teamMembers.map((member) => {
            // ✅ Correct media handling (same as StoriesGrid)
            const photo = member?.photo || {};
            const rawPhotoUrl =
              photo?.url ||
              photo?.formats?.medium?.url ||
              photo?.formats?.small?.url ||
              photo?.formats?.thumbnail?.url ||
              "";

            const imageUrl = rawPhotoUrl
              ? getMediaUrl(rawPhotoUrl)
              : "/images/placeholder-avatar.png";

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="mb-5 flex justify-center">
                  <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#F9A826] bg-gray-100 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={`${member.name} - ${member.role}`}
                      effect="blur"
                      className="w-full h-full object-cover bg-gray-100"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {member.role}
                </p>

                {member.quote && (
                  <p className="mt-3 text-sm italic text-gray-800">
                    “{member.quote}”
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Optional: Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A826' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Accessibility: Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeamSection;
