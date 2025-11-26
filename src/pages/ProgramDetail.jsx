import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import HelpSection from "../components/Home_Page_Components/HelpSection";
import {
  fetchProgramBySlug,
  fetchPrograms,
  fetchProgramImages,
  getMediaUrl,
} from "../utils/api";

const ProgramDetail = () => {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [relatedPrograms, setRelatedPrograms] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProgram = async () => {
      try {
        setLoading(true);
        setError("");

        const programData = await fetchProgramBySlug(slug);
        if (!programData) {
          setError("Program not found");
          return;
        }

        setProgram(programData);

        // Load related programs
        try {
          const listRes = await fetchPrograms({ page: 1, pageSize: 4 });
          const others = (listRes?.data || []).filter(
            (p) => (p?.attributes?.slug || p?.slug) !== (programData?.attributes?.slug || programData?.slug)
          );
          setRelatedPrograms(others.slice(0, 3));
        } catch (e) {
          console.error("Failed to load related programs", e);
        }

        // Load gallery images: use program_images ids to filter program-images
        try {
          const attrsLocal = programData.attributes || programData || {};
          const linkedProgramImages = Array.isArray(attrsLocal.program_images)
            ? attrsLocal.program_images
            : [];
          const linkedIds = linkedProgramImages.map((pi) => pi.id);

          if (linkedIds.length > 0) {
            const galleryRes = await fetchProgramImages();
            const images = [];

            (galleryRes?.data || []).forEach((item) => {
              const base = item.attributes || item || {};
              if (!linkedIds.includes(item.id)) return;

              const imageData = base.image; // array of media
              const imageArray = Array.isArray(imageData)
                ? imageData
                : imageData
                ? [imageData]
                : [];

              imageArray.forEach((img) => {
                const imgAttrs = img.attributes || img || {};
                images.push({
                  id: img.id,
                  url: imgAttrs.url,
                  caption: imgAttrs.caption || base.caption,
                });
              });
            });

            setGalleryItems(images);
          } else {
            setGalleryItems([]);
          }
        } catch (e) {
          console.error("Failed to load program gallery images", e);
        }

      } catch (e) {
        console.error("Failed to load program", e);
        setError(e?.message || "Failed to load program");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadProgram();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A] mx-auto mb-4"></div>
          <p className="text-[#777]">Loading program...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <Link
            to="/programs"
            className="text-[#1E3A8A] hover:underline"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  if (!program) return null;

  const attrs = program.attributes || program || {};
  const coverUrl = getMediaUrl(
    attrs?.cover?.data?.attributes?.url || attrs?.cover?.url
  );
  const dateValue = attrs.dateStarted || attrs.createdAt;
  const formattedDate = dateValue
    ? new Date(dateValue).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const goals = Array.isArray(attrs.goals) ? attrs.goals : [];
  const impactStats = Array.isArray(attrs.impactStats)
    ? attrs.impactStats
    : [];
  const testimonials = Array.isArray(attrs.testimonials)
    ? attrs.testimonials
    : [];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden">
        {coverUrl && (
          <motion.img
            src={coverUrl}
            alt={attrs.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.05, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/15 border border-white/20 text-xs md:text-sm tracking-wide uppercase"
          >
            Ongoing Program
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-3"
          >
            {attrs.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-[#E5E7EB] mb-4"
          >
            {attrs.description}
          </motion.p>
          {formattedDate && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-[#D1D5DB] mb-6"
            >
              Started on {formattedDate}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button className="px-6 md:px-8 py-2.5 rounded-full bg-[#0A5E55] text-sm md:text-base font-medium shadow-lg shadow-black/30 hover:bg-[#084c44] transition-colors">
              Donate Now
            </button>
            <a
              href="#impact"
              className="px-6 md:px-8 py-2.5 rounded-full border border-white/70 text-sm md:text-base font-medium hover:bg-white hover:text-[#111827] transition-colors"
            >
              See Impact
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="bg-[#FAFAFA] py-12 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-[#222] mb-4">
            Why This Program Matters
          </h2>
          <p className="text-base md:text-lg text-[#444] leading-relaxed whitespace-pre-line">
            {attrs.description}
          </p>
        </div>
      </motion.section>

      {/* Goals Section */}
      {goals.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-3">
                Program Goals
              </h2>
              <p className="text-[#555] text-base md:text-lg max-w-2xl mx-auto">
                Clear, measurable goals that guide our work on the ground.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goalItem, index) => {
                const g = goalItem || {};
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-[#F9FAFB] rounded-xl px-5 py-6 border border-[#E5E7EB]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#00796B] flex items-center justify-center mb-4 text-lg font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-[#111827] mb-1">
                      {g.title || g.goal || "Program Goal"}
                    </h3>
                    {g.description && (
                      <p className="text-sm text-[#4B5563] leading-relaxed">
                        {g.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox for Gallery Images */}
      {isLightboxOpen && galleryItems.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl font-semibold"
              onClick={() => setIsLightboxOpen(false)}
            >
              ×
            </button>

            {/* Prev arrow */}
            {galleryItems.length > 1 && (
              <button
                type="button"
                className="absolute left-2 sm:left-4 text-white/80 hover:text-white text-3xl font-semibold px-2"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? galleryItems.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>
            )}

            {/* Next arrow */}
            {galleryItems.length > 1 && (
              <button
                type="button"
                className="absolute right-2 sm:right-4 text-white/80 hover:text-white text-3xl font-semibold px-2"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === galleryItems.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ›
              </button>
            )}

            {/* Image */}
            <motion.div
              key={galleryItems[activeImageIndex]?.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-black/40 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] w-full flex flex-col items-center"
            >
              <img
                src={getMediaUrl(galleryItems[activeImageIndex]?.url)}
                alt={galleryItems[activeImageIndex]?.caption || attrs.title}
                className="max-h-[85vh] w-auto mx-auto object-contain"
              />
              {galleryItems[activeImageIndex]?.caption && (
                <div className="w-full px-4 py-3 bg-black/60 text-center text-xs md:text-sm text-white">
                  {galleryItems[activeImageIndex].caption}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      {impactStats.length > 0 && (
        <section id="impact" className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-3">
                What Weve Achieved
              </h2>
              <p className="text-[#555] text-base md:text-lg max-w-2xl mx-auto">
                Real impact, measured through the lives touched by this program.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="bg-[#F9FAFB] rounded-2xl px-5 py-6 text-center border border-[#E5E7EB] shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#0A5E55] mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-sm md:text-base font-medium text-[#374151]">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="mt-2 text-xs text-[#6B7280]">
                      {stat.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Story */}
      <motion.section
        className="bg-white py-12 md:py-16 border-t border-[#E5E7EB]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl md:text-3xl text-[#111827] mb-6 text-center md:text-left">
            Program Story
          </h2>
          {attrs.longDescription || attrs.content ? (
            <div
              className="prose prose-lg max-w-none text-[#333] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: attrs.longDescription || attrs.content }}
            />
          ) : (
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Detailed information about this program will be published soon.
            </p>
          )}
        </div>
      </motion.section>

      {/* Gallery */}
      {galleryItems.length > 0 && (
        <section className="bg-[#F9FAFB] py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-2">
                  Program Gallery
                </h2>
                <p className="text-sm md:text-base text-[#555] max-w-xl">
                  Glimpses from the field capturing the real work behind this
                  initiative.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryItems.map((item) => {
                const url = getMediaUrl(item.url);
                const caption = item.caption;
                if (!url) return null;
                return (
                  <motion.div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl shadow-sm bg-black/5 cursor-zoom-in"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => {
                      const index = galleryItems.findIndex((g) => g.id === item.id);
                      setActiveImageIndex(index === -1 ? 0 : index);
                      setIsLightboxOpen(true);
                    }}
                  >
                    <motion.img
                      src={url}
                      alt={caption || attrs.title}
                      className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      initial={{ scale: 1.02, opacity: 0.95 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                    />
                    {caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                        <p className="text-xs md:text-sm text-white line-clamp-2">
                          {caption}
                        </p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-[#F4F8F7] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl text-[#1F2933] mb-3">
                Voices from the Ground
              </h2>
              <p className="text-[#4B5563] text-base md:text-lg max-w-2xl mx-auto">
                Real stories from children, families, volunteers and partners who
                make this work possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0, 4).map((t, index) => {
                const photoAttr = t?.photo?.data?.attributes || t?.photo;
                const photoUrl = getMediaUrl(photoAttr?.url);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] flex flex-col h-full"
                  >
                    <p className="text-sm md:text-base text-[#374151] italic mb-4">
                      {t.quote}
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                      {photoUrl && (
                        <img
                          src={photoUrl}
                          alt={t.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className="text-sm font-semibold text-[#111827]">
                          {t.name}
                        </div>
                        {t.role && (
                          <div className="text-xs text-[#6B7280]">{t.role}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Shared Donation / How You Can Help section */}
      <HelpSection />
    </div>
  );
};

export default ProgramDetail;
