"use client";

import { delayAnimationsFor } from "./Loader";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: delayAnimationsFor,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.main>
  );
}
