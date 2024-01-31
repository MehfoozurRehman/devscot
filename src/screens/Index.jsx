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
                <div className="animated">M </div>
                <div className="animated">a </div>
                <div className="animated">g </div>
                <div className="animated">i </div>
                <div className="animated">c </div>
                <div className="animated">a </div>
                <div className="animated">l </div>
              </div>
              <div className="herosection__content__left__content__heading ">
                <div className="animated">A </div>
                <div className="animated">x </div>
                <div className="animated">t </div>
                <div className="animated">r </div>
                <div className="animated">a </div>
                <div className="animated"> </div>
                <div className="animated">S </div>
                <div className="animated">t </div>
                <div className="animated">a </div>
                <div className="animated">r </div>
                <div className="animated">t </div>
                <div className="animated">u </div>
                <div className="animated">p </div>
              </div>
              <div className="herosection__content__left__content__heading ">
                <br />
                <div className="animated">S</div>
                <div className="animated">o</div>
                <div className="animated">l </div>
                <div className="animated">u</div>
                <div className="animated">t</div>
                <div className="animated">i </div>
                <div className="animated">o </div>
                <div className="animated">n </div>
              </div>
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
