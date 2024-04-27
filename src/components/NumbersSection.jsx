"use client";

import CountUpWhenInView from "./CountUpWhenInView";
import Fade from "@/components/Fade";
import { useState } from "react";

const stats = [
  {
    number: "200",
    text: "Projects Completed",
    delay: "100",
  },
  {
    number: "50",
    text: "Satisfied Customers",
    delay: "500",
  },
  {
    number: "8",
    text: "Years of Experience",
    delay: "800",
  },
  {
    number: "5",
    text: "Awards & Achievements",
    delay: "1200",
  },
];

export default function NumbersSection() {
  const [isMouseHover, setIsMouseHover] = useState(2);

  return (
    <div className="numbers__section">
      <div className="numbers__section__content">
        {stats.map((entry, index) => (
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
                <span
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  +
                </span>
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
