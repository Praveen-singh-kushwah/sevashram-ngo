import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchBlogList } from "../utils/api";
import BlogCard from "../components/Blog_Page_Components/BlogCard";
import BlogCardSkeleton from "../components/Blog_Page_Components/BlogCardSkeleton";
import ErrorComponent from "../components/Blog_Page_Components/ErrorComponent";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 9;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 9,
    pageCount: 1,
    total: 0,
  });

  // Fetch blog list
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogList({ page: currentPage, pageSize });
        console.log("blog : ", data.data)
        setBlogs(data.data || []);
        setPagination(data.meta?.pagination || {});
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setSearchParams({ page: String(newPage) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Retry handler
  const handleRetry = () => {
    setError(null);
    setLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#1E3A8A] to-[#2D5BA3] py-16 md:py-24"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-[1280px] text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Stories, insights, and updates from Sevashram
          </p>
        </div>
      </motion.section>

      {/* Blog Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">
          {/* Error State */}
          {error && <ErrorComponent message={error} onRetry={handleRetry} />}

          {/* Loading State */}
          {loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: pageSize }).map((_, idx) => (
                <BlogCardSkeleton key={idx} />
              ))}
            </div>
          )}

          {/* Blog Grid */}
          {!loading && !error && blogs.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    title={blog.Title}
                    slug={blog.Slug}
                    excerpt={blog.shortDescription}
                    authorName={blog.authorName}
                    publishDate={blog.publishedAt}
                    coverCard={blog.coverCard}
                  />
                ))}
              </motion.div>

              {/* Pagination */}
              {pagination.pageCount > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-2 flex-wrap"
                >
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
                      px-4 py-2 rounded-lg font-heading font-semibold text-sm
                      transition-all duration-300
                      ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-[#F9A826] text-white hover:bg-[#F59E0B]"
                      }
                    `}
                  >
                    ← Previous
                  </motion.button>

                  {/* Page Numbers */}
                  <div className="flex gap-1">
                    {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map(
                      (page) => (
                        <motion.button
                          key={page}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePageChange(page)}
                          className={`
                            w-10 h-10 rounded-lg font-heading font-semibold text-sm
                            transition-all duration-300
                            ${
                              page === currentPage
                                ? "bg-[#1E3A8A] text-white"
                                : "bg-white text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#F9A826] hover:text-white hover:border-[#F9A826]"
                            }
                          `}
                        >
                          {page}
                        </motion.button>
                      )
                    )}
                  </div>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.pageCount}
                    className={`
                      px-4 py-2 rounded-lg font-heading font-semibold text-sm
                      transition-all duration-300
                      ${
                        currentPage === pagination.pageCount
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-[#F9A826] text-white hover:bg-[#F59E0B]"
                      }
                    `}
                  >
                    Next →
                  </motion.button>
                </motion.div>
              )}
            </>
          )}

          {/* Empty State */}
          {!loading && !error && blogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <p className="text-lg text-[#6B7280] font-body">
                No blog posts found. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
