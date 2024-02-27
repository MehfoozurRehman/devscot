import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function HowWorkSection() {
  const entries = [
    {
      step: "Step 01",
      number: "01",
      heading: "Audience",
      text: "Having these the marketplace to your business",
    },
  ];

  return (
    <div className="how__section">
      <div className="how__section__content">
        <div className="how__section__content__subheading">WORKFLOW</div>
        <div className="how__section__content__heading">How we work</div>
        <ScrollContainer>
          <div className="how__section__content__data">
            <WorkFlowEntry />
            <WorkFlowEntry />
            <WorkFlowEntry />
            <WorkFlowEntry />
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
