"use client";

import CountUpWhenInView from "./CountUpWhenInView";
import Fade from "@/components/Fade";
import { useState } from "react";

const entries = [
  {
    number: "25000",
    text: "Project Completed",
    delay: "100",
  },
  {
    number: "8000",
    text: "Happy Costomers",
    delay: "500",
  },
  {
    number: "25000",
    text: "Years Experiences",
    delay: "800",
  },
  {
    number: "25000",
    text: "Awards Achievement",
    delay: "1200",
  },
];

export default function NumbersSection() {
  const [isMouseHover, setIsMouseHover] = useState(2);

  return (
    <div className="numbers__section">
      <div className="numbers__section__content">
        {entries.map((entry, index) => (
          <Fade up delay={parseInt(entry.delay)} key={index}>
            <div
              className={
                isMouseHover === index
                  ? "numbers__section__content__entry__hover"
                  : "numbers__section__content__entry"
              }
              key={index}
              onMouseEnter={() => setIsMouseHover(index)}
            >
              <div className="numbers__section__content__entry__number">
                <CountUpWhenInView
                  start={0}
                  end={parseInt(entry.number)}
                  duration={3}
                />
                +
              </div>
              <div
                className={
                  isMouseHover === index
                    ? "numbers__section__content__entry__text__hover"
                    : "numbers__section__content__entry__text"
                }
              >
                {entry.text}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
