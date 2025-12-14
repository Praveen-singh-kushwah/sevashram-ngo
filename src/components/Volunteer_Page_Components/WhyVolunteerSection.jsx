import { motion } from "framer-motion";
import { 
  Heart, 
  Target, 
  Users, 
  Sparkles 
} from "lucide-react";

const whyItems = [
  {
    icon: Target,
    title: "Create Real Impact",
    description: "Your efforts directly support programs that improve lives and strengthen communities.",
  },
  {
    icon: Heart,
    title: "Work With Purpose",
    description: "Every task you take on contributes to a meaningful mission, not just a checklist.",
  },
  {
    icon: Sparkles,
    title: "Learn, Grow, and Contribute",
    description: "Gain hands-on experience, develop new skills, and grow personally while giving back.",
  },
  {
    icon: Users,
    title: "Be Part of a Supportive Community",
    description: "Join a network of passionate individuals united by compassion, teamwork, and shared values.",
  },
];

const WhyVolunteerSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A] leading-tight"
          >
            Why Volunteer With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto"
          >
            Because meaningful change starts with people like you.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-[#FAFAFA] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-400 border border-gray-100"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F9A826]/10 text-[#F9A826] mb-6 group-hover:bg-[#F9A826]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-[#1E3A8A] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyVolunteerSection;