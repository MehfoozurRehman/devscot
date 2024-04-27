"use client";

import Marquee from "react-fast-marquee";
import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";

const slogans = [
  "Apps That Work",
  "Websites That Shine",
  "Designing for You",
  "Apps for Everyone",
  "Websites for All",
  "Digital Design Done Right",
  "Your App, Our Passion",
  "Solutions Simplified",
  "Web Made Easy",
  "Apps Made Simple",
  "Designs for Today",
  "Your Digital Partner",
];

export default function HomeSectionMarquee() {
  return (
    <div className="hero__section__marquee__container">
      <Marquee>
        {slogans.map((item, index) => (
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
