import { motion } from "framer-motion";
import { 
  HandCoins, 
  Users, 
  Lightbulb, 
  Handshake, 
  CalendarDays 
} from "lucide-react";
import { Link } from "react-scroll";

const partnershipModels = [
  {
    icon: HandCoins,
    title: "CSR Project Sponsorship",
    bullets: [
      "Fund specific initiatives aligned with your CSR objectives",
      "Ideal for annual CSR budgets & ESG programs",
    ],
    interestValue: "CSR Project Sponsorship",
  },
  {
    icon: Users,
    title: "Employee Volunteering Programs",
    bullets: [
      "On-ground or virtual volunteering opportunities",
      "Short-term or recurring engagement options",
    ],
    interestValue: "Employee Volunteering Programs",
  },
  {
    icon: Lightbulb,
    title: "Skill-Based & Pro-Bono Support",
    bullets: [
      "Technology, design, legal, marketing, operations",
      "High-impact collaboration with minimal financial cost",
    ],
    interestValue: "Skill-Based & Pro-Bono Support",
  },
  {
    icon: Handshake,
    title: "Strategic / Long-Term Partnerships",
    bullets: [
      "Multi-year programs with sustained impact",
      "Co-branded initiatives and long-term alignment",
    ],
    interestValue: "Strategic / Long-Term Partnerships",
  },
  {
    icon: CalendarDays,
    title: "Campaign or Event Partnerships",
    bullets: [
      "Awareness drives, fundraising, and special events",
      "Time-bound, high-visibility collaborations",
    ],
    interestValue: "Campaign or Event Partnerships",
  },
];

const PartnershipModelsSection = () => {
  return (
    <section id="partnership-models" className="py-20 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-3xl md:text-4xl text-[#1E3A8A]"
          >
            Partnership Models / Ways to Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed"
          >
            We offer multiple collaboration models to align with your CSR goals, scale, and engagement preferences.
          </motion.p>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {partnershipModels.map((model, index) => {
            const Icon = model.icon;

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
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F9A826]/10 text-[#F9A826] rounded-xl mb-5">
                  <Icon className="w-12 h-12" strokeWidth={1.6} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-[#1E3A8A] mb-3">
                  {model.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-8 flex-grow">
                  {model.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#F9A826] mr-3 mt-1.5">•</span>
                      <span className="text-[#4B5563] leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="mt-auto">
                  <Link
                    to="inquiry-form"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    spy={true}
                    className="inline-flex items-center text-[#F9A826] font-medium hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer"
                  >
                    Interested? <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsSection;