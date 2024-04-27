"use client";

import Fade from "@/components/Fade";
import ScrollContainer from "react-indiana-drag-scroll";
import { useState } from "react";

const steps = [
  {
    step: "Step 01",
    number: "01",
    heading: "Ideate",
    text: "Verify the product-market fit, capture new business opportunities, and make your bold visions take shape.",
    delay: "100",
  },
  {
    step: "Step 02",
    number: "02",
    heading: "Design",
    delay: "200",
    text: "Create designs that are not just seen but felt. Build an immersive experience that drives user loyalty.",
  },
  {
    step: "Step 03",
    number: "03",
    heading: "Develop",
    delay: "300",
    text: "Redefine your business agility with software that scales to meet evolving customer needs and market dynamics.",
  },
  {
    step: "Step 04",
    number: "04",
    heading: "Maintain",
    delay: "400",
    text: "Maximize the value of your investment by embracing a mindset of continuous improvement.",
  },
  {
    step: "Step 05",
    number: "05",
    heading: "Scale",
    delay: "500",
    text: "Advance into the future with resilient scaling strategies. Handle increased load, embrace new markets.",
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
            {steps.map((entry, index) => (
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
