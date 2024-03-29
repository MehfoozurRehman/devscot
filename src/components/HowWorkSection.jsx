"use client";

import Fade from "react-reveal/Fade";
import ScrollContainer from "react-indiana-drag-scroll";
import { useState } from "react";

const entries = [
  {
    step: "Step 01",
    number: "01",
    heading: "Audience",
    text: "Having these the marketplace to your business",
    delay: "100",
  },
  {
    step: "Step 02",
    number: "02",
    heading: "Plan & Sketch",
    delay: "200",
    text: "Delicate and long-lasting with vitamins and nutritions",
  },
  {
    step: "Step 03",
    number: "03",
    heading: "Customize",
    delay: "300",
    text: "Creating brand identities for the Digital experiences",
  },
  {
    step: "Step 04",
    number: "04",
    heading: "User Testing",
    delay: "400",
    text: "We look forward to engage with beyond the conventional",
  },
  {
    step: "Step 05",
    number: "05",
    heading: "User Testing",
    delay: "500",
    text: "We look forward to engage with beyond the conventional",
  },
  {
    step: "Step 06",
    number: "06",
    heading: "User Testing",
    delay: "2100",
    text: "We look forward to engage with beyond the conventional",
  },
];

export default function HowWorkSection() {
  const [isMouseHover, setIsMouseHover] = useState("03");

  return (
    <div className="how__section">
      <div className="how__section__content">
        <Fade up delay={100}>
          <div className="how__section__content__subheading">WORKFLOW</div>
        </Fade>
        <Fade up delay={100}>
          <div className="how__section__content__heading">How we work</div>
        </Fade>
        <ScrollContainer>
          <div className="how__section__content__data">
            {entries.map((entry, index) => (
              <Fade In delay={parseInt(entry.delay)} key={index}>
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
                      />
                    </div>
                  </div>
                  <div className="how__section__content__data__entry__line" />
                  <div
                    className={
                      isMouseHover === entry.number
                        ? "how__section__content__data__entry__number__hover"
                        : "how__section__content__data__entry__number"
                    }
                  >
                    {entry.number}
                  </div>
                  <div className="how__section__content__data__entry__heading">
                    {entry.heading}
                  </div>
                  <div className="how__section__content__data__entry__text">
                    {entry.text}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}
