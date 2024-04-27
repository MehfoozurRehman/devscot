"use client";

import Marquee from "react-fast-marquee";
import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";

const list = [
  "Mobile Apps",
  "Web Apps",
  "Digital Product Design",
  "Mobile Apps",
  "Web Apps",
  "Digital Product Design",
  "Mobile Apps",
  "Web Apps",
  "Digital Product Design",
  "Mobile Apps",
  "Web Apps",
  "Digital Product Design",
];

export default function HomeSectionMarquee() {
  return (
    <div className="hero__section__marquee__container">
      <Marquee>
        {list.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: index * 0.1 + delayAnimationsFor,
            }}
            key={index}
            className="hero__section__marquee__container__item"
          >
            {item}
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}
