import { motion } from "framer-motion";

const GoogleMapSection = () => {
  // Sevashram's location coordinates
  // Address: Sevashram, Beed Road, Brahmanath Yelamb, Tal Shirur Kasar, Dist. Beed, Maharashtra – 413249
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d75.5!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";
  
  // Note: Replace the above URL with actual Google Maps embed URL for Sevashram's exact location
  // To get the correct URL:
  // 1. Go to Google Maps
  // 2. Search for "Sevashram, Beed Road, Brahmanath Yelamb, Tal Shirur Kasar, Dist. Beed, Maharashtra – 413249"
  // 3. Click "Share" → "Embed a map" → Copy the iframe src URL

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Amber Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="h-[3px] bg-[#F9A826] mx-auto mb-6 md:mb-8"
        ></motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-semibold text-[20px] md:text-[22px] text-[#1E3A8A] text-center mb-6 md:mb-8"
        >
          Find Us Here
        </motion.h2>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sevashram Location Map"
            className="w-full h-[300px] md:h-[350px] lg:h-[400px]"
          ></iframe>
        </motion.div>

        {/* Optional Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center font-body text-[14px] text-[#4B5563] mt-4"
        >
          Sevashram, Beed Road, Brahmanath Yelamb, Tal Shirur Kasar, Dist. Beed, Maharashtra – 413249
        </motion.p>
      </div>
    </section>
  );
};

export default GoogleMapSection;
