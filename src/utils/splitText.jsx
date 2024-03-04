import { motion } from "framer-motion";

export default (text) => {
  return text.split(" ").map((word, index) => {
    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: index * 0.15 }}
        key={index}
      >
        {word}{" "}
      </motion.span>
    );
  });
};
