"use client";

import Fade from "@/components/Fade";

export default function HorizontalScrollCarouselCard({ card }) {
  return (
    <>
      <div className="card__main__div">
        <div className="card__main__div__circle"></div>
        <div className="card__main__div__circle__two"></div>
      </div>
      <div
        key={card.id}
        className="classs group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div className="card__content absolute inset-0 z-10 grid place-content-center">
          <Fade up delay={100}>
            <div className="card__heading">{card.title}</div>
          </Fade>
          <div className="card__content__info__number">
            <Fade up delay={100}>
              <p className="card__info">{card.quote}</p>
            </Fade>
            <Fade up delay={100}>
              <div className="card__number">{card.number}</div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
