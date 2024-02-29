import React from "react";

export default function MealAbouttext({ heading, text }) {
  return (
    <div className="meal__about__container__text__wraper">
      <div className="meal__about__container__text__wraper__heading">
        {heading}
      </div>
      <div className="meal__about__container__text__wraper__sub__heading">
        {text}
      </div>
    </div>
  );
}
