"use client";

import "@/styles/style.scss";

import { motion, useScroll, useTransform } from "framer-motion";

import Fade from "@/components/Fade";
import testimonials from "../db/testimonials.json";
import { useRef } from "react";

const HorizontalScrollCarouselCard = ({ card }) => {
  return (
    <>
      <div className="card__main__div">
        <div className="card__main__div__circle"></div>
        <div className="card__main__div__circle__two"></div>
      </div>

      <div
        key={card.id}
        className="classs group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div className="card__content absolute inset-0 z-10 grid place-content-center">
          <Fade up delay={100}>
            <div className="card__heading">{card.title}</div>
          </Fade>
          <div className="card__content__info__number">
            <Fade up delay={100}>
              <p className="card__info">{card.quote}</p>
            </Fade>
            <Fade up delay={100}>
              <div className="card__number">{card.number}</div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

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
};

export default HorizontalScrollCarousel;
