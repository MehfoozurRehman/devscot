"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "@/styles/style.scss";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>{" "}
    </>
  );
};

const Card = ({ card }) => {
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
          <div className="card__heading">{card.title}</div>
          <div className="card__content__info__number">
            <p className="card__info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              voluptate debitis fugiat ut eos ipsa asperiores iste! Quos,
              consequuntur quasi accusamus eligendi soluta possimus delectus
              facere impedit exercitationem iure rem!
            </p>{" "}
            <div className="card__number">{card.number}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;

const cards = [
  {
    url: "/FeatureSectionimg.png",
    title: "We help our clients to shine online",
    id: 1,
    number: "01",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "We help our clients to shine online",
    id: 2,
    number: "02",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "We help our clients to shine online",
    id: 3,
    number: "03",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "We help our clients to shine online",
    id: 4,
    number: "04",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "We help our clients to shine online",
    id: 5,
    number: "05",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "Title 6",
    id: 6,
    number: "06",
  },
  {
    url: "/FeatureSectionimg.png",
    title: "Title 7",
    id: 7,
    number: "07",
  },
];