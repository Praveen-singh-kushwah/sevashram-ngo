import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const compliancePoints = [
  "Registered non-profit organization",
  "CSR-compliant initiatives aligned with statutory guidelines",
  "Transparent fund utilization and financial accountability",
  "Impact reporting and documentation available on request",
  "Compliant with applicable laws and regulatory frameworks",
];

const TrustComplianceSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-[#1E3A8A]">
            Trust & Compliance
          </h3>
          <p className="mt-4 text-sm md:text-base text-[#6B7280] max-w-2xl mx-auto">
            We operate with transparency, accountability, and regulatory compliance at every level.
          </p>
        </motion.div>

        {/* Compliance Checklist */}
        <div className="max-w-3xl mx-auto">
          {compliancePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start gap-4 py-1"
            >
              <Circle
                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                strokeWidth={2}
                fill="currentColor"
              />
              <p className="text-sm md:text-base text-[#374151] leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional Document Links */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="/documents/annual-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E3A8A] hover:underline flex items-center gap-1"
            >
              Annual Report
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/documents/csr-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E3A8A] hover:underline flex items-center gap-1"
            >
              CSR Policy
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/documents/compliance-docs.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E3A8A] hover:underline flex items-center gap-1"
            >
              Compliance Documents
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="mt-16 h-px bg-[#E5E7EB] max-w-3xl mx-auto" />
      </div>
    </section>
  );
};

export default TrustComplianceSection;