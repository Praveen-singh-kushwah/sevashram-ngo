import { motion } from "framer-motion";
import { 
  BarChart3, 
  Shuffle, 
  ShieldCheck, 
  Users, 
  TrendingUp 
} from "lucide-react";

const whyPartnerItems = [
  {
    icon: BarChart3,
    title: "Proven Social Impact",
    description: "We focus on measurable outcomes and long-term change, not just activities or short-term metrics.",
  },
  {
    icon: Shuffle,
    title: "Flexible Collaboration Models",
    description: "Partnerships designed around your CSR objectives, timelines, and organizational priorities.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Ethical Operations",
    description: "Strong governance, clear reporting, and accountable processes at every stage of collaboration.",
  },
  {
    icon: Users,
    title: "Employee Engagement Opportunities",
    description: "Hands-on volunteering and skill-based programs that actively involve your teams.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Programs",
    description: "From pilot initiatives to long-term engagements, our programs grow with your commitment.",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[#faf7f7]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A]"
          >
            Why Partner With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
          >
            We build partnerships that are impact-driven, transparent, and aligned with your organizational values.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyPartnerItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FEF3C7] text-[#F9A826] p-3 rounded-xl mb-5">
                  <Icon className="w-10 h-10" strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-[#1E3A8A] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] leading-relaxed">
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

export default WhyPartnerSection;