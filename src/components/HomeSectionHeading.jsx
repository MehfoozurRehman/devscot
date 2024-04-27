"use client";

import splitText from "../utils/splitText";

export default function HomeSectionHeading({}) {
  const heading = splitText("Design. Development & Identity for your Product");

  return <div className="hero__section__content__heading">{heading}</div>;
}
