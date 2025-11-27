import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchImpactStories, getMediaUrl } from "../utils/api";
import StoryHero from "../components/Impact_Page_Components/StoryHero";
import ImpactStats from "../components/Home_Page_Components/ImpactStats";

const StoryDetail = () => {
  const { slug } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStory = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Get all stories and find the one matching the slug/documentId
        const response = await fetchImpactStories({ page: 1, pageSize: 25 });
        const stories = response?.data || [];
        const storyData = stories.find(s => s.documentId === slug || s.id === slug);
        
        if (!storyData) {
          setError("Story not found");
          return;
        }
        
        setStory(storyData);
      } catch (e) {
        console.error("API Error:", e);
        setError(e?.message || "Failed to load story");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadStory();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A] mx-auto mb-4"></div>
          <p className="text-[#777]">Loading story...</p>
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
            to="/impact"
            className="text-[#1E3A8A] hover:underline"
          >
            ← Back to Impact Stories
          </Link>
        </div>
      </div>
    );
  }

  if (!story) return null;

  const contentBlocks = story.content || [];

  const title = story.Title || "Impact Story";
  const dateValue = story.date || story.createdAt;
  const formattedDate = dateValue
    ? new Date(dateValue).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const renderInlineChildren = (children = []) => {
    return children.map((child, index) => {
      const text = child?.text || "";
      if (!text) return null;
      if (child.bold) {
        return (
          <strong key={index} className="font-semibold">
            {text}
          </strong>
        );
      }
      return <span key={index}>{text}</span>;
    });
  };

  const renderBlock = (block, index) => {
    if (!block) return null;
    const { type, level, children } = block;

    if (type === "heading") {
      const content = renderInlineChildren(children);
      const headingLevel = Math.min(Math.max(level || 2, 2), 4);

      if (headingLevel === 2) {
        return (
          <h2
            key={index}
            className="font-playfair text-2xl md:text-3xl text-[#111827] mb-4 mt-8"
          >
            {content}
          </h2>
        );
      }
      if (headingLevel === 3) {
        return (
          <h3
            key={index}
            className="font-playfair text-xl md:text-2xl text-[#111827] mb-3 mt-6"
          >
            {content}
          </h3>
        );
      }
      return (
        <h4
          key={index}
          className="font-playfair text-lg md:text-xl text-[#111827] mb-2 mt-4"
        >
          {content}
        </h4>
      );
    }

    if (type === "paragraph") {
      const content = renderInlineChildren(children);
      if (!content) return null;
      return (
        <p
          key={index}
          className="font-sans text-[#333333] text-lg md:text-xl leading-relaxed mb-4"
        >
          {content}
        </p>
      );
    }

    if (type === "image") {
      const url = block?.image?.url || block?.url;
      if (!url) return null;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="my-8 overflow-hidden rounded-xl shadow-sm"
        >
          <motion.img
            src={getMediaUrl(url)}
            alt=""
            className="w-full h-auto object-cover"
            initial={{ scale: 1.02, opacity: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <>
      <StoryHero story={story} />
      
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <div className="mb-6 text-center md:text-left">
              <h1 className="font-playfair text-2xl md:text-3xl text-[#1A1A1A] mb-2 leading-snug">
                {title}
              </h1>
              {formattedDate && (
                <p className="font-sans text-sm md:text-base text-gray-500">
                  Published on {formattedDate}
                </p>
              )}
            </div>
          )}

          <div className="max-w-none">
            {Array.isArray(contentBlocks) && contentBlocks.length > 0 ? (
              contentBlocks.map((block, index) => renderBlock(block, index))
            ) : (
              <p className="font-sans text-[#333333] text-lg md:text-xl leading-relaxed">
                No additional details are available for this story yet.
              </p>
            )}
          </div>
        </div>
      </motion.section>

      <ImpactStats />
    </>
  );
};

export default StoryDetail;
