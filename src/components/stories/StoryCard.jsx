import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { getMediaUrl } from "../../utils/api";

const StoryCard = ({ story, variants }) => {
  const caption = story?.Caption || story?.caption || "Untitled Story";
  const title = caption;

  const slug =
    story?.story?.documentId ||
    story?.story?.id ||
    story?.documentId ||
    story?.slug ||
    String(story?.id || "");

  const shortDesc = story?.altText || "";
  const date = story?.createdAt || null;

  const imageAttributes =
    story?.Image ||
    story?.image?.data?.attributes ||
    story?.image ||
    {};

  const rawImageUrl =
    imageAttributes.url ||
    imageAttributes.formats?.medium?.url ||
    imageAttributes.formats?.small?.url ||
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
      className="group bg-white w-[350px] rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden flex-shrink-0"
    >
      <Link to={`/impact/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={coverUrl || "/images/impact/placeholder.jpg"}
            alt={shortDesc || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-lg text-[#1E3A8A] mb-2 line-clamp-2">
            {title}
          </h3>

          {formattedDate && (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#1E3A8A] font-semibold text-sm">
              Read Full Story
            </span>
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default StoryCard;
