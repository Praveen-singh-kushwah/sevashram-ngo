import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getMediaUrl } from "../../utils/api";

const BlogCard = ({ title, slug, excerpt, authorName, publishDate, coverCard }) => {
  
  // Format date to human-readable format
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get thumbnail URL with fallback
  const getThumbnailUrl = () => {

    console.log("cover image : " , coverCard)
    if (!coverCard) return "/images/placeholder-blog.jpg";
    
    // coverCard is now a flat object with direct properties
    // Try formats first (small or thumbnail)
    if (coverCard.formats?.small?.url) {
      return getMediaUrl(coverCard.formats.small.url);
    }
    if (coverCard.formats?.thumbnail?.url) {
      return getMediaUrl(coverCard.formats.thumbnail.url);
    }
    // Fallback to main url
    if (coverCard.url) {
      return getMediaUrl(coverCard.url);
    }
    
    return "/images/placeholder-blog.jpg";
  };

  // Get alt text
  const getAltText = () => {
    if (!coverCard) return title;
    return coverCard.alternativeText || title;
  };

  // Truncate excerpt to ~120 characters
  const truncateExcerpt = (text, maxLength = 120) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Link to={`/blog/${slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -8 }}
        className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        role="article"
        aria-label={`Read ${title}`}
      >
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200 flex-shrink-0">
          <motion.img
            src={getThumbnailUrl()}
            alt={getAltText()}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Content Container */}
        <div className="p-5 md:p-6 flex flex-col flex-1 min-h-0">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-heading font-bold text-[#1E3A8A] mb-3 line-clamp-2 group-hover:text-[#F9A826] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm md:text-base text-[#1F2937] mb-4 line-clamp-3 flex-grow">
            {truncateExcerpt(excerpt)}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col gap-2 text-xs md:text-sm text-[#6B7280] border-t border-gray-200 pt-4">
            {authorName && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#1F2937]">By</span>
                <span>{authorName}</span>
              </div>
            )}
            {publishDate && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#1F2937]">Published</span>
                <time dateTime={publishDate}>{formatDate(publishDate)}</time>
              </div>
            )}
          </div>

          {/* Read More Indicator */}
          <div className="mt-4 flex items-center gap-2 text-[#F9A826] font-semibold text-sm group-hover:gap-3 transition-all">
            <span>Read More</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
