import React, { useState } from "react";

import ScrollContainer from "react-indiana-drag-scroll";

export default function HowWorkSection() {
  const [isMouseHover, setIsMouseHover] = useState("03");
  const entries = [
    {
      step: "Step 01",
      number: "01",
      heading: "Audience",
      text: "Having these the marketplace to your business",
    },
    {
      step: "Step 02",
      number: "02",
      heading: "Plan & Sketch",
      text: "Delicate and long-lasting with vitamins and nutritions",
    },
    {
      step: "Step 03",
      number: "03",
      heading: "Customize",
      text: "Creating brand identities for the digital experiences",
    },
    {
      step: "Step 04",
      number: "04",
      heading: "User Testing",
      text: "We look forward to engage with beyond the conventional",
    },
    {
      step: "Step 05",
      number: "05",
      heading: "User Testing",
      text: "We look forward to engage with beyond the conventional",
    },
    {
      step: "Step 06",
      number: "06",
      heading: "User Testing",
      text: "We look forward to engage with beyond the conventional",
    },
  ];

  return (
    <div className="how__section">
      <div className="how__section__content">
        <div className="how__section__content__subheading">WORKFLOW</div>
        <div className="how__section__content__heading">How we work</div>
        <ScrollContainer>
          <div className="how__section__content__data">
            {entries.map((entry, index) => (
              <div
                className="how__section__content__data__entry"
                key={index}
                onMouseEnter={() => setIsMouseHover(entry.number)}
              >
                <div className="how__section__content__data__entry__step">
                  {entry.step}
                </div>

                <div className="how__section__content__data__entry__dot">
                  <div
                    className={
                      isMouseHover === entry.number
                        ? "how__section__content__data__entry__dot__overlay__hover"
                        : "how__section__content__data__entry__dot__overlay"
                    }
                  >
                    <div
                      className={
                        isMouseHover === entry.number
                          ? "how__section__content__data__entry__dot__overlay__point__hover"
                          : "how__section__content__data__entry__dot__overlay__point"
                      }
                    ></div>
                  </div>
                </div>
                <div className="how__section__content__data__entry__line"></div>
                <div className="how__section__content__data__entry__number">
                  {entry.number}
                </div>
                <div className="how__section__content__data__entry__heading">
                  {entry.heading}
                </div>
                <div className="how__section__content__data__entry__text">
                  {entry.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}

function WorkFlowEntry({}) {
  return (
    <div className="how__section__content__data__entry">
      <div className="how__section__content__data__entry__step">Step 01</div>

      <div className="how__section__content__data__entry__dot">
        <div className="how__section__content__data__entry__dot__overlay">
          <div className="how__section__content__data__entry__dot__overlay__point"></div>
        </div>
      </div>
      <div className="how__section__content__data__entry__line"></div>
      <div className="how__section__content__data__entry__number">01</div>
      <div className="how__section__content__data__entry__heading">
        Audience
      </div>
      <div className="how__section__content__data__entry__text">
        Having these the marketplace to your business
      </div>
    </div>
  );
}
