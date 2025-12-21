import { motion } from "framer-motion";
import { 
  Building2, 
  Rocket, 
  Shield, 
  GraduationCap, 
  Users, 
  Network 
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Corporates & Enterprises",
    description: "Large organizations with CSR, ESG, or sustainability initiatives.",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description: "Growing businesses looking to create meaningful social impact.",
  },
  {
    icon: Shield,
    title: "CSR Foundations & Trusts",
    description: "Organizations focused on structured giving and long-term programs.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools, colleges, and universities supporting social responsibility.",
  },
  {
    icon: Users,
    title: "Professional Associations",
    description: "Industry bodies and networks driving collective impact.",
  },
  {
    icon: Network,
    title: "Social Impact Networks",
    description: "Collaborative platforms, NGOs, and mission-driven ecosystems.",
  },
];

const WhoCanPartnerSection = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A]"
          >
            Who Can Partner With Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with organizations across sectors who share a commitment to meaningful social impact.
          </motion.p>
        </div>

        {/* Partner Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DBEAFE] text-[#1E3A8A] rounded-full mb-4">
                  <Icon className="w-10 h-10" strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-lg text-[#1E3A8A]">
                  {partner.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-[#6B7280]">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Inclusive Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-6 md:p-8 text-center"
        >
          <p className="text-lg font-medium text-[#1E3A8A]">
            We welcome partnerships of all sizes —<br className="sm:hidden" /> from pilot programs to large-scale, long-term initiatives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoCanPartnerSection;