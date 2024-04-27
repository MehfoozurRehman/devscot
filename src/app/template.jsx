"use client";

import { delayAnimationsFor } from "./Loader";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
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
        delay: pathname === "/contact" ? 0 : delayAnimationsFor,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.main>
  );
}
