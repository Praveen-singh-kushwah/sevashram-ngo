import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GalleryHeader = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#fafafa] to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          {/* Breadcrumbs */}
          <div className="text-sm text-[#6B7280] mb-3">
            <Link to="/" className="hover:text-[#1E3A8A]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1E3A8A] font-medium">Gallery</span>
          </div>

          <h1 className="font-heading font-semibold text-[28px] md:text-[36px] text-[#222] mb-3">
            Our Events Gallery
          </h1>
          <p className="font-body text-[15px] md:text-[16px] text-[#555] max-w-[700px] mx-auto leading-relaxed">
            Explore the memorable moments from our past events.
          </p>

          <div className="h-px bg-[#e5e7eb] mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHeader;
