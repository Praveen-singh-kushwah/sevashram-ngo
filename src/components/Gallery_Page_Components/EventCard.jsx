import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getMediaUrl } from "../../utils/api";

const EventCard = ({ event }) => {
  // Updated to match actual Strapi structure
  const id = event?.id;
  const title = event?.title || "Untitled Event";
  const date = event?.date || "";
  const description = event?.description || [];
  const slug = event?.slug || String(id);
  const coverUrl = getMediaUrl(event?.cover?.url);

  // Extract text from rich text description array
  const descriptionText = Array.isArray(description) 
    ? description.map(block => 
        block.children?.map(child => child.text).join('') || ''
      ).join(' ')
    : String(description);

  const formattedDate = date ? new Date(date).toLocaleDateString() : "";

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <Link to={`/gallery/${slug}`} className="block">
        <div className="relative w-full h-[240px] overflow-hidden">
          <img
            src={coverUrl || "/images/placeholder.jpg"}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="p-4">
          <h3 className="font-heading font-semibold text-[18px] text-[#222] mb-1 truncate">
            {title}
          </h3>
          {formattedDate && (
            <p className="font-body text-[14px] text-[#777] mb-1">{formattedDate}</p>
          )}
          {descriptionText && (
            <p className="font-body text-[14px] text-[#555] line-clamp-2">
              {descriptionText.slice(0, 100)}{descriptionText.length > 100 ? "…" : ""}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
