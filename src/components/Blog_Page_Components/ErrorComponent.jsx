import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const ErrorComponent = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 px-6"
    >
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md w-full text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-heading font-bold text-red-700 mb-2">
          Error Loading Content
        </h3>
        <p className="text-red-600 text-sm mb-6">{message}</p>
        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="
              bg-red-500 text-white px-6 py-2 rounded-lg
              font-heading font-semibold text-sm
              hover:bg-red-600 transition-colors
            "
          >
            Try Again
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ErrorComponent;
