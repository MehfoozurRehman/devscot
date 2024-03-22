import { motion } from "framer-motion";

export default (text) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            key={index}
            initial={{ y: index * 10, scale: 0.95 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.09,
              ease: "easeInOut",
            }}
            style={{ display: "inline-block" }}
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                style={{ display: "inline-block" }}
                initial={{ y: index * 10 + letterIndex * 10 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.09,
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
