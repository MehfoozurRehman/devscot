import React, { useEffect } from "react";
import mealprj1 from "../../assets/mealprj1.png";
import maelogo from "../../assets/maelogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import MealAbouttext from "../../components/MealAbouttext";
import GetDemo from "../../components/GetDemo";
export default function meal() {
  const [swiperSlides, setSwiperSlides] = React.useState(6);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(3.8);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(3.3);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(3);
    } else if (window.innerWidth > 730) {
      setSwiperSlides(2.5);
    } else if (window.innerWidth > 600) {
      setSwiperSlides(2.3);
    } else {
      setSwiperSlides(1.3);
    }
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [swiperSlides]);
  return (
    <>
      <div className="meal__text__header__container">
        <div className="meal__text__header__container__left">
          <div className="meal__text__header__container__left__heading">
            UNITED MEAL
          </div>
          <div className="meal__text__header__container__left__subheading">
            Our client is a visionary company that aims to simplify
            decentralized finance. With features offering convenience,
            user-friendly crypto design, and multi-currency support, their
            product — the Infinity wallet — seamlessly integrates into users’
            lives, catering to all their financial needs.
          </div>
          <div className="meal__text__header__container__left__btn">
            <button style={{ margin: "0px" }} class="btn">
              Contact us
            </button>
          </div>
        </div>
        <div className="meal__text__header__container__right">
          <div className="meal__text__header__container__right__logo__title">
            CLIENT
          </div>
          <div className="meal__text__header__container__right__logo">
            <img src={maelogo} alt="logo" />
          </div>
          <div className="meal__right__text__services">
            SERVICES WE PROVIDED
          </div>
          <div className="meal__right__text__services__title">UX/UI Design</div>
          <div className="meal__right__text__services__title">
            Graphic Design
          </div>
        </div>
      </div>
      <div className="project__header__imags__slider__over">
        <div className="project__header__imags__slider">
          <Swiper
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            slidesPerView={swiperSlides}
          >
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project__header__imags__slider__card">
                <img src={mealprj1} alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="meal__text__header__container__bg"></div>
      <div className="meal__about__container">
        <div className="meal__about__container__heading">ABOUT THE PROJECT</div>
        <MealAbouttext
          heading="The client"
          text="Our client is a visionary company that aims to simplify decentralized finance. With features offering convenience, user-friendly crypto design, and multi-currency support, their product — the Infinity wallet — seamlessly integrates into users’ lives, catering to all their financial needs."
        />
        <MealAbouttext
          heading="Challenge"
          text="The diverse and expansive functionality of the Infinity decentralized mobile app posed a complex challenge to our team. The Web 3 design demanded our attention across numerous screens to capture meaningful user interactions. Other hurdles included reinforcing security measures, offering versatile wallet control options, and enabling Infinity to replace multiple smaller applications."
        />
        <MealAbouttext
          heading="Our solution"
          text="Our goal evolved around the Infinity wallet’s consistency. We aimed to work out styles, fonts, and colors and compile a cohesive set of icons and elements for a seamless user experience across all pages. Our experts also focused on enhancing user-friendliness, reducing visual clutter, facilitating onboarding for beginners, and delivering all DeFi mobile app features properly."
        />
      </div>
      <div className="project__main__full__img">
        <img
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702008607/Group_1707485925_uvc7qk.webp"
          alt="devscot"
        />
      </div>
      <div className="process__image">
        <img
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701935150/Group_1707485878_mrsf2p.webp"
          alt=""
        />
      </div>
      <div className="Emphasizing__main__container">
        <div className="Emphasizing__main__container__logo">
          <img
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701938382/Group_3_yjuhvx.webp"
            alt="meal"
          />
        </div>
        <div className="Emphasizing__main__container__heading">
          Emphasizing consistency: creating a self-sufficient ecosystem within
          Infinity
        </div>
        <div className="Emphasizing__main__container__subheading">
          Our client is a visionary company that aims to simplify decentralized
          finance. With features offering convenience
        </div>
        <div className="Emphasizing__main__container__project__img">
          <img
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1701937239/Group_1707485770_ge8de0.webp"
            alt=""
          />
        </div>
      </div>
      <div className="Emphasizing__main__container__bg__over">
        <div className="Emphasizing__main__container__bg">
          <svg
            width="793"
            height="1533"
            viewBox="0 0 793 1533"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1224_126)">
              <circle
                cx="26.5"
                cy="766.5"
                r="254.5"
                fill="#00CE6E"
                fillOpacity="0.58"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1224_126"
                x="-739.638"
                y="0.361969"
                width="1532.28"
                height="1532.28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="255.819"
                  result="effect1_foregroundBlur_1224_126"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="guide__section__wraper">
        <div className="guide__section__wraper__heading">
          Visual Style Guide Creation
        </div>
        <div className="guide__section__wraper__sub__heading">
          We created a visual style guide, which was a milestone in the design
          consistency of the project. Just like the design system, it
          encompassed all visual elements that can be used across the Infinity
          platform.
        </div>
        <div className="guide__section__card__wraper">
          <div
            className="guide__section__card"
            style={{
              backgroundColor: " #00CE6E",
            }}
          >
            #00CE6E
          </div>
          <div
            className="guide__section__card"
            style={{
              backgroundColor: " #98FFCF",
              color: "BLACK",
            }}
          >
            #98FFCF
          </div>
          <div
            className="guide__section__card"
            style={{
              backgroundColor: " #33373B",
            }}
          >
            #33373B
          </div>
          <div
            className="guide__section__card"
            style={{
              backgroundColor: " #FFFFFF",
              color: "BLACK",
            }}
          >
            #FFFFFF
          </div>
        </div>
        <div className="guide__section__card__font">
          <div className="guide__section__card__font__left">
            <div className="guide__section__card__font__title">Typography</div>
            <div className="guide__section__card__font__left__name">Inter</div>
            <div className="guide__section__card__font__left__sub__name">
              Semi-bold
            </div>
          </div>
          <div className="guide__section__card__font__right">
            <div className="guide__section__card__font__title">
              Heading Font
            </div>
            <div className="guide__section__card__font__right__name">
              Aa Bb Cc Dd Ee Ff Gg Hh li Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Vv Xx Yy
              Zz
            </div>
            <div className="guide__section__card__font__right__sub__name">
              0123456789!@#$%*&*()_+
            </div>
          </div>
        </div>
      </div>
      <div className="result__container__over">
        <div className="result__container">
          <div className="result__container__heading">THE RESULT</div>
          <div className="result__container__text__wraper__container">
            <div className="result__container__text__wraper">
              <div className="result__container__text__wraper__number">80%</div>
              <div className="result__container__text__wraper__heading">
                User satisfaction rate
              </div>
              <div className="result__container__text__wraper__subheading">
                Our Web 3.0 development and design services left most users
                satisfied.
              </div>
            </div>
            <div className="result__container__text__wraper">
              <div className="result__container__text__wraper__number">40%</div>
              <div className="result__container__text__wraper__heading">
                User satisfaction rate
              </div>
              <div className="result__container__text__wraper__subheading">
                Our Web 3.0 development and design services left most users
                satisfied.
              </div>
            </div>
            <div className="result__container__text__wraper">
              <div className="result__container__text__wraper__number">25%</div>
              <div className="result__container__text__wraper__heading">
                User satisfaction rate
              </div>
              <div className="result__container__text__wraper__subheading">
                Our Web 3.0 development and design services left most users
                satisfied.
              </div>
            </div>
            <div className="result__container__text__wraper">
              <div className="result__container__text__wraper__number">5%</div>
              <div className="result__container__text__wraper__heading">
                User satisfaction rate
              </div>
              <div className="result__container__text__wraper__subheading">
                Our Web 3.0 development and design services left most users
                satisfied.
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetDemo />
    </>
  );
}
