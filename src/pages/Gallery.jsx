import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/Gallery_Page_Components/EventCard";
import GalleryHeader from "../components/Gallery_Page_Components/GalleryHeader";
import { fetchEvents } from "../utils/api";

const PAGE_SIZE = 9;

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadEvents = async (targetPage = 1) => {
    try {
      setLoading(true);
      setError("");
      const json = await fetchEvents({ page: targetPage, pageSize: PAGE_SIZE });
      
      const newItems = json?.data || [];
      const meta = json?.meta?.pagination;

      setEvents((prev) => (targetPage === 1 ? newItems : [...prev, ...newItems]));
      setPage(targetPage);
      setPageCount(meta?.pageCount || 1);
    } catch (e) {
      console.error("API Error:", e);
      setError(e?.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canLoadMore = page < pageCount;

  return (
    <>
      <GalleryHeader />

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>

          {/* Empty State */}
          {events.length === 0 && !loading && !error && (
            <div className="text-center py-12">
              <p className="text-[#777] text-lg">No events found.</p>
            </div>
          )}

          {/* Load More */}
          {canLoadMore && (
            <div className="flex justify-center mt-10">
              <motion.button
                onClick={() => loadEvents(page + 1)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`
                  px-6 py-3 rounded-full text-white font-heading font-medium text-[16px]
                  bg-gradient-to-r from-[#007bff] to-[#00c6ff]
                  shadow-md hover:shadow-lg transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                `}
              >
                {loading ? "Loading..." : "Load More"}
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
