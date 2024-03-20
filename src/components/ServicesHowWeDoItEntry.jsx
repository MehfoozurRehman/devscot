export default function ServicesHowWeDoItEntry({ icon, title, list }) {
  return (
    <div className="services__how__we__do__it__content__entry">
      <div className="services__how__we__do__it__content__entry__icon heading">
        {icon}
      </div>
      <div className="services__how__we__do__it__content__entry__card">
        <div className="services__how__we__do__it__content__entry__card__heading heading">
          {title}
        </div>
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
      </div>
    </div>
  );
}
