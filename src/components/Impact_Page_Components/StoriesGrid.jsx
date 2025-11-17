import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { fetchStoryImages, getMediaUrl } from "../../utils/api";

const StoriesGrid = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadStories = async (targetPage = 1, append = false) => {
    try {
      if (targetPage === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setError("");

      const response = await fetchStoryImages({ page: targetPage, pageSize: 9 });
      const newStories = response?.data || [];
      const meta = response?.meta?.pagination;

      setStories((prev) => (append ? [...prev, ...newStories] : newStories));
      setPage(targetPage);
      setPageCount(meta?.pageCount || 1);
    } catch (e) {
      console.error("API Error:", e);
      setError(e?.message || "Failed to load impact stories");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadStories(1);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <section id="stories" className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-[#1E3A8A] mb-4">
              Impact Stories
            </h2>
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
              Real stories of transformation and hope from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="stories" className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stories" className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-[#1E3A8A] mb-4">
            Impact Stories
          </h2>
          <p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
            Real stories of transformation and hope from our community
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} variants={cardVariants} />
          ))}
        </motion.div>

        {/* Load More Button */}
        {page < pageCount && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => loadStories(page + 1, true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loadingMore}
              className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loadingMore ? "Loading..." : "Load More Stories"}
            </motion.button>
          </div>
        )}

        {/* Empty State */}
        {stories.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto">
              <p className="text-[#777] text-lg mb-4">No impact stories available yet.</p>
              <p className="text-[#999] text-sm">Check back soon for inspiring stories from our community.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Story Card Component
const StoryCard = ({ story, variants }) => {
  // Story-images API can return flat fields (Caption, altText, createdAt, image, story)
  const caption = story?.Caption || story?.caption || "Untitled Story";
  const title = caption;

  // Use linked Impact Story identifiers for slug if present, otherwise fall back
  const slug =
    story?.story?.documentId ||
    story?.story?.id ||
    story?.documentId ||
    story?.slug ||
    String(story?.id || "");

  const shortDesc = story?.altText || "";

  const date = story?.createdAt || story?.date || null;

  // Handle both Strapi shapes:
  // 1) image: { url, formats }
  // 2) image: { data: { attributes: { url, formats } } }
  const imageAttributes =
    // Primary: Image comes directly from story-images collection as `Image`
    story?.Image ||
    // Fallbacks for other possible shapes
    story?.image?.data?.attributes ||
    story?.image ||
    {};

  const rawImageUrl =
    imageAttributes.url ||
    imageAttributes.formats?.medium?.url ||
    imageAttributes.formats?.small?.url ||
    imageAttributes.formats?.thumbnail?.url ||
    "";

  const coverUrl = getMediaUrl(rawImageUrl);

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.02 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
    >
      <Link to={slug ? `/impact/${slug}` : "#"}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={coverUrl || "/images/impact/placeholder.jpg"}
            alt={shortDesc || title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {shortDesc && (
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full mb-3">
              {shortDesc}
            </span>
          )}

          <h3 className="font-semibold text-lg text-[#222] mb-2 line-clamp-2 group-hover:text-[#1E3A8A]">
            {title}
          </h3>

          {/* Date */}
          {formattedDate && (
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
          )}

          {/* Read more */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#1E3A8A] font-semibold text-sm group-hover:text-orange-500">
              Read Full Story
            </span>
            <ArrowRight size={16} className="text-[#1E3A8A] group-hover:text-orange-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


export default StoriesGrid;
