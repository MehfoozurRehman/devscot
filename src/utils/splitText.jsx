import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default (text) => {
  const pathname = usePathname();

  const isContact = pathname === "/contact";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: isContact ? 0 : delayAnimationsFor,
      }}
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
              delay: index * 0.09 + (isContact ? 0 : delayAnimationsFor),
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
                  delay: index * 0.09 + (isContact ? 0 : delayAnimationsFor),
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
