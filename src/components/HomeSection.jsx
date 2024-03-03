import HomeSectionDown from "./HomeSectionDown";
import splitText from "../utils/splitText";

export default function HomeSection() {
  const heading = splitText("Design. Development & Identity for your Product");

  const info = splitText(
    "We create modern user experience for new startups by creating a bridge between users’ needs and the client’s requirements. We expertise in developing"
  );

  return (
    <section className="hero__section">
      <div className="hero__section__content">
        <div className="hero__section__content__subheading">
          We are heroes of
        </div>
        <div className="hero__section__content__heading">{heading}</div>
        <div className="hero__section__content__info">{info}</div>
        <div className="hero__section__content__info__highlight">
          <button className="hero__section__content__info__highlight__name">
            Mobile Apps
          </button>
          <button className="hero__section__content__info__highlight__name">
            Web Apps
          </button>
          <div className="hero__section__content__info__highlight__names">
            And
          </div>
          <button className="hero__section__content__info__highlight__name">
            degital Product Design
          </button>
        </div>
      </div>
      <img
        src="/herobackground.png"
        alt="herobackgroundimg"
        className="hero__section__backgroundimg"
      />
      <HomeSectionDown />
    </section>
  );
}
