import herosection from "../assets/herosection.png";
import heroshape from "../assets/heroshape.png";
import heroshapearrow from "../assets/heroshapearrow.png";
import heroshapestar from "../assets/heroshapestar.png";
export default function Index() {
  return (
    <>
      <div className="herosection">
        {" "}
        <div className="herosection__content__left__content__overlay">
          <img
            src={heroshape}
            alt="heroshape"
            className="herosection__content__left__content__overlay__img"
          />
          <img
            src={heroshapestar}
            alt="heroshape"
            className="herosection__content__left__content__overlay__img__star"
          />
        </div>
        <div className="herosection__content">
          <div className="herosection__content__left">
            <div className="herosection__content__left__content">
              <div className="herosection__content__left__content__heading ">
                Magical <br /> Axtra Startup <br /> Solution
              </div>{" "}
              <div className="herosection__content__left__content__heading__arrow">
                <img
                  className="herosection__content__left__content__arrow"
                  src={heroshapearrow}
                  alt="arrow"
                />
              </div>
              <div className="herosection__content__left__content__description">
                Our team always reviews all previous methods with models, and
                processes to determined
              </div>
              <button className="herosection__content__left__content__button">
                Get Started
              </button>
            </div>
          </div>
          <div className="herosection__content__right">
            <div className="herosection__content__right__content">
              <div className="herosection__content__right__content__image">
                <img
                  className="herosection__content__left__content__overlay__img__hero"
                  src={herosection}
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
