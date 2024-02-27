import React, { useState } from "react";

export default function NumbersSection() {
  const [isMouseHover, setIsMouseHover] = useState(1);
  const entries = [
    {
      number: "25K+",
      text: "Project Completed",
    },
    {
      number: "8K+",
      text: "Happy Costomers",
    },
    {
      number: "25K+",
      text: "Years Experiences",
    },
    {
      number: "25K+",
      text: "Awards Achievement",
    },
  ];

  return (
    <div className="numbers__section">
      <div className="numbers__section__content">
        {entries.map((entry, index) => (
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
              {entry.number}
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
        ))}
      </div>
    </div>
  );
}

function NumberSectionEntry({}) {
  return (
    <div className="numbers__section__content__entry">
      <div className="numbers__section__content__entry__number">25k+</div>
      <div className="numbers__section__content__entry__text">
        Project Completed
      </div>
    </div>
  );
}
