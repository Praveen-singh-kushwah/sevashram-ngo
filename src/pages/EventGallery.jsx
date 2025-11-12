import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fetchEventBySlug, getMediaUrl } from "../utils/api";
import Lightbox from "../components/Gallery_Page_Components/Lightbox";

const EventGallery = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        setLoading(true);
        setError("");
        const eventData = await fetchEventBySlug(slug);
        console.log("EventGallery - Fetched event data:", eventData);
        if (!eventData) {
          setError("Event not found");
          return;
        }
        setEvent(eventData);
      } catch (e) {
        setError(e?.message || "Failed to load event");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadEvent();
    }
  }, [slug]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#007bff] mx-auto mb-4"></div>
          <p className="text-[#777]">Loading event...</p>
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
            to="/gallery"
            className="text-[#007bff] hover:underline"
          >
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  if (!event) return null;

  const title = event.title || "Untitled Event";
  const date = event.date || "";
  const description = event.description || [];
  const coverUrl = getMediaUrl(event.cover?.url);
  const eventImages = event.event_images || [];

  // Extract text from rich text description
  const descriptionText = Array.isArray(description)
    ? description.map(block =>
        block.children?.map(child => child.text).join('') || ''
      ).join(' ')
    : String(description);

  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : "";

  // Prepare images for lightbox
  const lightboxImages = eventImages.map((eventImg, index) => ({
    url: getMediaUrl(eventImg.Image?.url),
    alt: eventImg.Image?.alternativeText || eventImg.Caption || `${title} - Image ${index + 1}`
  }));

  return (
    <>
      {/* Event Header Section */}
      <section 
        className="relative w-full h-[400px] bg-cover bg-center bg-gray-200"
        style={{
          backgroundImage: coverUrl ? `url(${coverUrl})` : 'none'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#aaa] text-sm mb-4"
          >
            <Link to="/gallery" className="hover:text-white transition-colors">
              Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#e0e0e0]">{title}</span>
          </motion.div>

          {/* Event Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-semibold text-[32px] md:text-[40px] text-white mb-3 max-w-4xl"
          >
            {title}
          </motion.h1>

          {/* Event Date */}
          {formattedDate && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#e0e0e0] text-lg"
            >
              {formattedDate}
            </motion.p>
          )}
        </div>
      </section>

      {/* Event Description Section */}
      {descriptionText && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-body text-[16px] md:text-[18px] text-[#555] leading-relaxed mb-8">
                {descriptionText}
              </p>
              <div className="w-24 h-px bg-[#e0e0e0] mx-auto"></div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Event Images Grid Section */}
      <section className="bg-[#fafafa] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {eventImages.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {eventImages.map((eventImg, index) => {
                const imageUrl = getMediaUrl(eventImg.Image?.url);
                const altText = eventImg.Image?.alternativeText || eventImg.Caption || `${title} - Image ${index + 1}`;
                return (
                  <motion.div
                    key={eventImg.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group relative cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      <img
                        src={imageUrl}
                        alt={altText}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Search 
                          size={32} 
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>

                    {/* Optional Caption */}
                    {eventImg.Caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {eventImg.Caption}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#777] text-lg">No images available for this event.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
};

export default EventGallery;
