import { motion } from "framer-motion";

const VolunteerIntroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-[#1E3A8A] leading-tight tracking-tight"
          >
            Volunteer With Us
          </motion.h1>

          {/* Subheading / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl text-[#334155] font-medium max-w-3xl mx-auto"
          >
            Your time, skills, and compassion can create lasting impact.
          </motion.p>

          {/* Body Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed font-open-sans">
              Volunteers are the backbone of our mission. By sharing your time and skills, you help us reach communities, support meaningful programs, and create opportunities for those who need them most. Whether you contribute on the ground or remotely, your involvement plays a vital role in driving real, positive change.
            </p>

            {/* Optional Micro-Text */}
            <p className="mt-8 text-base md:text-lg text-[#6B7280] font-medium italic">
              No prior experience required — just a willingness to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerIntroSection;