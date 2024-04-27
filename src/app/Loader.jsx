"use client";

import "@/styles/loader.scss";

import { useEffect, useLayoutEffect, useState } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const timeOut = 3000;

export const delayAnimationsFor = timeOut / 1000 - 0.5;

export default function Loader({ children }) {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    isLoading && (
      <motion.div
        initial={{ scale: 1, borderRadius: "0%" }}
        animate={{ scale: 0, borderRadius: "50%" }}
        transition={{
          duration: 0.5,
          delay: timeOut / 1000 - 0.5,
          ease: "easeInOut",
        }}
        className="loader"
      >
        <motion.div className="loader__content__logo">
          <img src="/headerlogo.webp" alt="logo" />
        </motion.div>
        <motion.div className="loader__content__text">{children}</motion.div>
      </motion.div>
    )
  );
}
