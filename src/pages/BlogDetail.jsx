import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchBlogBySlug, getMediaUrl } from "../utils/api";
import ErrorComponent from "../components/Blog_Page_Components/ErrorComponent";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog detail
  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogBySlug(slug);
        if (!data) {
          setError("Blog post not found");
          return;
        }
        setBlog(data);
        // Set page title and meta tags
        document.title = `${data.attributes?.Title} | Sevashram Blog`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            data.attributes?.shortDescription || "Read this blog post on Sevashram"
          );
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message || "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  // Custom image renderer for markdown
  const ImageComponent = ({ src, alt }) => {
    const fullUrl = getMediaUrl(src);
    return (
      <img
        src={fullUrl}
        alt={alt || "Blog image"}
        loading="lazy"
        className="w-full h-auto rounded-lg my-6 shadow-md"
      />
    );
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get hero image URL
  const getHeroImageUrl = () => {
    const attrs = blog.attributes || blog;
    
    if (!attrs?.coverDetail) {
      if (attrs?.coverCard) {
        let media = attrs.coverCard;
        if (attrs.coverCard.data) {
          media = attrs.coverCard.data;
        }
        if (Array.isArray(media)) {
          media = media[0];
        }
        const mediaAttrs = media?.attributes || media;
        if (mediaAttrs?.url) {
          return getMediaUrl(mediaAttrs.url);
        }
      }
      return "/images/placeholder-blog.jpg";
    }

    let media = attrs.coverDetail;
    if (attrs.coverDetail.data) {
      media = attrs.coverDetail.data;
    }
    if (Array.isArray(media)) {
      media = media[0];
    }
    
    const mediaAttrs = media?.attributes || media;

    if (mediaAttrs?.formats?.large?.url) {
      return getMediaUrl(mediaAttrs.formats.large.url);
    }
    if (mediaAttrs?.formats?.medium?.url) {
      return getMediaUrl(mediaAttrs.formats.medium.url);
    }
    if (mediaAttrs?.url) {
      return getMediaUrl(mediaAttrs.url);
    }

    return "/images/placeholder-blog.jpg";
  };

  // Get hero alt text
  const getHeroAltText = () => {
    const attrs = blog.attributes || blog;
    if (!attrs?.coverDetail) return attrs?.Title;
    
    let media = attrs.coverDetail;
    if (attrs.coverDetail.data) {
      media = attrs.coverDetail.data;
    }
    if (Array.isArray(media)) {
      media = media[0];
    }
    
    const mediaAttrs = media?.attributes || media;
    return mediaAttrs?.alternativeText || attrs?.Title;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#F9A826] border-t-[#1E3A8A] rounded-full"
        />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
          <ErrorComponent
            message={error || "Blog post not found"}
            onRetry={() => navigate("/blog")}
          />
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/blog")}
              className="
                bg-[#1E3A8A] text-white px-6 py-3 rounded-lg
                font-heading font-semibold
                hover:bg-[#2D5BA3] transition-colors
              "
            >
              Back to Blog
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Handle both flat and nested response formats
  const attributes = blog.attributes || blog;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 md:h-[500px] overflow-hidden bg-gray-300"
      >
        <img
          src={getHeroImageUrl()}
          alt={getHeroAltText()}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-12 md:py-20"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[800px]">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#1E3A8A] mb-6 leading-tight">
            {attributes.Title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 pb-8 border-b border-gray-300">
            {attributes.authorName && (
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280] text-sm">By</span>
                <span className="font-semibold text-[#1F2937]">
                  {attributes.authorName}
                </span>
              </div>
            )}
            {attributes.publishDate && (
              <div className="flex items-center gap-2">
                <span className="text-[#6B7280] text-sm">Published</span>
                <time
                  dateTime={attributes.publishDate}
                  className="font-semibold text-[#1F2937]"
                >
                  {formatDate(attributes.publishDate)}
                </time>
              </div>
            )}
          </div>

          {/* Quote Section (if available) */}
          {attributes.quote && (
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                border-l-4 border-[#F9A826] pl-6 py-4 my-8
                bg-[#FFF8F0] px-6 rounded-r-lg
              "
            >
              <p className="text-lg md:text-xl font-body italic text-[#1F2937]">
                "{attributes.quote}"
              </p>
            </motion.blockquote>
          )}

          {/* Blog Content - Markdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            {attributes.content ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ImageComponent,
                  h2: ({ node, ...props }) => (
                    <h2 className="text-3xl font-heading font-bold text-[#1E3A8A] mt-8 mb-4" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-2xl font-heading font-bold text-[#1E3A8A] mt-6 mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-[#1F2937] text-lg leading-relaxed mb-4 font-body" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside text-[#1F2937] mb-4 space-y-2 font-body" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside text-[#1F2937] mb-4 space-y-2 font-body" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-[#F9A826] pl-4 italic text-[#6B7280] my-4" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-[#F9A826] hover:text-[#F59E0B] underline transition-colors" {...props} />
                  ),
                  code: ({ node, inline, ...props }) =>
                    inline ? (
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-[#1F2937]" {...props} />
                    ) : (
                      <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm my-4" {...props} />
                    ),
                }}
              >
                {attributes.content}
              </ReactMarkdown>
            ) : (
              <p className="text-[#6B7280] text-center py-8">
                No content available for this blog post.
              </p>
            )}
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/blog")}
              className="
                bg-[#1E3A8A] text-white px-6 py-3 rounded-lg
                font-heading font-semibold
                hover:bg-[#2D5BA3] transition-colors
              "
            >
              ← Back to Blog
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
