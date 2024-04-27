"use client";

import HomeSectionDown from "./HomeSectionDown";
import HomeSectionHeading from "./HomeSectionHeading";
import HomeSectionMarquee from "./HomeSectionMarquee";
import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <>
      <section className="hero__section">
        <div className="hero__section__content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: delayAnimationsFor }}
            className="hero__section__content__subheading"
          >
            We are heroes of
          </motion.div>
          <HomeSectionHeading />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: delayAnimationsFor }}
            className="hero__section__content__info"
          >
            We create modern user experience for new startups by creating a
            bridge between users’ needs and the client’s requirements. We
            expertise in developing
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delayAnimationsFor }}
            className="hero__section__content__info__highlight"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: delayAnimationsFor }}
              className="hero__section__content__info__highlight__name"
            >
              Mobile Apps
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: delayAnimationsFor }}
              className="hero__section__content__info__highlight__name"
            >
              Web Apps
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: delayAnimationsFor }}
              className="hero__section__content__info__highlight__names"
            >
              And
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: delayAnimationsFor }}
              className="hero__section__content__info__highlight__name"
            >
              Digital Product Design
            </motion.div>
          </motion.div>
        </div>
        <img
          src="/herobackground.webp"
          alt="herobackgroundimg"
          className="hero__section__backgroundimg"
        />
        <HomeSectionDown />
      </section>
      <HomeSectionMarquee />
    </>
  );
}
