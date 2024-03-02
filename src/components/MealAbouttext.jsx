export default function MealAbouttext({ heading, text }) {
  return (
    <div className="project__details__about__container__text__wraper">
      <div className="project__details__about__container__text__wraper__heading">
        {heading}
      </div>
      <div className="project__details__about__container__text__wraper__sub__heading">
        {text}
      </div>
    </div>
  );
}
