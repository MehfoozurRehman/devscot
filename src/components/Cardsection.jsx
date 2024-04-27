"use client";

import "@/styles/style.scss";

import { motion, useScroll, useTransform } from "framer-motion";

import HorizontalScrollCarouselCard from "./HorizontalScrollCarouselCard";
import { testimonials } from "../db/testimonials";
import { useRef } from "react";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-53%", "1%"]);

  return (
    <div className="bg-neutral-800">
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {testimonials.map((card) => (
              <HorizontalScrollCarouselCard card={card} key={card.id} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
