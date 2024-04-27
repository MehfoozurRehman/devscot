"use client";

import Fade from "@/components/Fade";
import ScrollContainer from "react-indiana-drag-scroll";
import { useState } from "react";

const steps = [
  {
    step: "Step 01",
    number: "01",
    heading: "Understanding Your Audience",
    text: "Analyzing market trends and customer demographics to tailor your product or service.",
    delay: "100",
  },
  {
    step: "Step 02",
    number: "02",
    heading: "Planning & Sketching",
    delay: "200",
    text: "Mapping out strategies and sketching design ideas to ensure innovation and uniqueness.",
  },
  {
    step: "Step 03",
    number: "03",
    heading: "Customization Process",
    delay: "300",
    text: "Tailoring brand identities and digital experiences to resonate with your target audience.",
  },
  {
    step: "Step 04",
    number: "04",
    heading: "User Testing & Feedback",
    delay: "400",
    text: "Engaging with users to gather insights and refine the product beyond conventional standards.",
  },
  {
    step: "Step 05",
    number: "05",
    heading: "Product Launch",
    delay: "500",
    text: "Excitingly unveiling your product to the world, ready to make an impact.",
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
