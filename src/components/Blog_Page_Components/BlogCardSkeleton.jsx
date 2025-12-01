import { motion } from "framer-motion";

const BlogCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-md"
    >
      {/* Image Skeleton */}
      <div className="h-48 md:h-56 bg-gray-300 animate-pulse" />

      {/* Content Skeleton */}
      <div className="p-5 md:p-6 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded animate-pulse" />
          <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
        </div>

        {/* Excerpt Skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 bg-gray-300 rounded animate-pulse w-4/5" />
        </div>

        {/* Meta Skeleton */}
        <div className="space-y-2 border-t border-gray-200 pt-4">
          <div className="h-3 bg-gray-300 rounded animate-pulse w-1/2" />
          <div className="h-3 bg-gray-300 rounded animate-pulse w-1/3" />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCardSkeleton;
