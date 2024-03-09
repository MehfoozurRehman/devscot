"use client";

import HomeSectionDown from "./HomeSectionDown";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import splitText from "../utils/splitText";

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

export default function HomeSection() {
  const heading = splitText("Design. Development & Identity for your Product");

  return (
    <>
      <section className="hero__section">
        <div className="hero__section__content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hero__section__content__subheading"
          >
            We are heroes of
          </motion.div>
          <div className="hero__section__content__heading">{heading}</div>
          <motion.div
            className="hero__section__content__info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            We create modern user experience for new startups by creating a
            bridge between users’ needs and the client’s requirements. We
            expertise in developing.
          </motion.div>
          <div className="hero__section__content__info__highlight">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="hero__section__content__info__highlight__name"
            >
              Mobile Apps
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="hero__section__content__info__highlight__name"
            >
              Web Apps
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="hero__section__content__info__highlight__names"
            >
              And
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="hero__section__content__info__highlight__name"
            >
              Digital Product Design
            </motion.div>
          </div>
        </div>
        <img
          src="/herobackground.png"
          alt="herobackgroundimg"
          className="hero__section__backgroundimg"
        />
        <HomeSectionDown />
      </section>
      <div className="hero__section__marquee__container">
        <Marquee>
          {list.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
              key={index}
              className="hero__section__marquee__container__item"
            >
              {item}
            </motion.div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
