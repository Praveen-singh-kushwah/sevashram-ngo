import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchVolunteerOpportunities } from "../../utils/volunteerApi";
import { getMediaUrl } from "../../utils/api";

const VolunteerOpportunitiesSection = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await fetchVolunteerOpportunities();
        setOpportunities(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load volunteer opportunities.");
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center text-gray-500">
        Loading volunteer opportunities...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A]"
          >
            Types of Volunteer Opportunities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[#4B5563] max-w-4xl mx-auto"
          >
            Whether you have time, skills, or passion, there’s a way for you to contribute.
          </motion.p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Icon */}
              {opp.icon?.url && (
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F9A826]/10 mb-6 group-hover:bg-[#F9A826]/20 group-hover:scale-110 transition-all">
                  <img
                    src={getMediaUrl(opp.icon.url)}
                    alt={opp.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading font-semibold text-2xl text-[#1E3A8A] mb-4">
                {opp.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B5563] text-lg leading-relaxed mb-4">
                {opp.description}
              </p>

              {/* Examples */}
              {opp.examples && (
                <p className="text-[#6B7280] text-sm italic">
                  {opp.examples}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesSection;
