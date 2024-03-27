"use client";
import { Fade } from "react-reveal";

export default function ServicesHowWeDoItEntry({ icon, title, list }) {
  return (
    <div className="services__how__we__do__it__content__entry">
      <Fade up delay={100}>
        <div className="services__how__we__do__it__content__entry__icon heading">
          {icon}
        </div>
      </Fade>
      <div className="services__how__we__do__it__content__entry__card">
        <Fade up delay={300}>
          <div className="services__how__we__do__it__content__entry__card__heading heading">
            {title}
          </div>
        </Fade>
        <Fade up delay={500}>
          <div className="services__how__we__do__it__content__entry__card__content">
            {list.map((item, i) => (
              <div
                className="services__how__we__do__it__content__entry__card__content__entry"
                key={i}
              >
                <div className="services__how__we__do__it__content__entry__card__content__entry__dot" />
                {item}
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
