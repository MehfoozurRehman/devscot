import { motion } from "framer-motion";

export default (text) => {
  return text.split(" ").map((word, index) => {
    return (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: index * 0.15 }}
        style={{ display: "inline-block", marginRight: "15px" }}
      >
        {word.split("").map((letter, letterIndex) => (
          <motion.span
            key={letterIndex}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + letterIndex * 0.03,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  });
};
