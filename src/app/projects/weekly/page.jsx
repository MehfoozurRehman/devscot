"use client";

import "swiper/css";
import "@/styles/weekly.scss";

import { useEffect, useState } from "react";

import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import GetDemo from "@/components/GetDemo";
import Header from "@/components/Header";
import Link from "next/link";
import splitText from "@/utils/splitText";

const aboutArray = [
  {
    heading: "The client",
    text: "DevScot partnered with Weekly, an innovative platform dedicated to enhancing the restaurant discovery experience for users. Our collaboration focused on designing a user interface (UI) that prioritizes ease of use and facilitates seamless navigation through a diverse array of dining options. Weekly’s commitment to providing curated restaurant recommendations and insightful reviews aligned perfectly with DevScot’s mission to deliver impactful UI/UX solutions. Through close collaboration and a deep understanding of Weekly’s audience and business goals, we aimed to create a UI design that reflects their dedication to enhancing the dining experience.",
  },
  {
    heading: "Challenge",
    text: "Designing for Weekly presented specific challenges that demanded strategic solutions. These included creating an intuitive and visually appealing interface that accommodates a vast database of restaurants and cuisines, ensuring robust search and filtering capabilities for users, and integrating interactive features such as reviews and ratings effectively. Additionally, optimizing the platform for mobile responsiveness while maintaining consistency across various devices posed technical complexities. DevScot addressed these challenges through comprehensive research, iterative design processes, and collaboration with Weekly’s team to ensure the UI design meets industry standards and exceeds user expectations.",
  },
  {
    heading: "Our solution",
    text: "DevScot approached the UI design for Weekly with a user-centered approach aimed at enhancing usability and engagement. We began by conducting extensive user research and usability testing to understand user behaviors and preferences in discovering and choosing restaurants. This research informed our design decisions, enabling us to create a clean and intuitive interface that simplifies restaurant exploration and decision-making. Leveraging modern UI design principles, we implemented features such as dynamic restaurant listings, personalized recommendations, and seamless booking options to enhance user interaction. Through continuous iteration and feedback loops with Weekly, we refined the UI design to achieve optimal performance, visual appeal, and user satisfaction. The result is a sophisticated and user-friendly UI for Weekly that enhances the restaurant discovery experience, making it easier and more enjoyable for users to find their next dining destination.",
  },
];

export default function ProjectDetails() {
  const [swiperSlides, setSwiperSlides] = useState(6);

  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(5.8);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(5.3);
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

  const heading = splitText("Weekly");

  return (
    <>
      <Header />
      <div className="project__details__container">
        <div className="project__details__text__header__container">
          <div className="project__details__text__header__container__left">
            <div className="project__details__text__header__container__left__heading">
              {heading}
            </div>
            <Fade up delay={100}>
              <div className="project__details__text__header__container__left__subheading">
                Introducing Weekly, your go-to website for discovering and
                exploring a variety of food restaurants. Whether you're craving
                international flavors or local delicacies, Weekly offers curated
                recommendations and insightful reviews to help you find the
                perfect dining spot. Explore new culinary experiences and plan
                your next meal with ease using Weekly.
              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="project__details__text__header__container__left__btn">
                <Link href="/contact" style={{ margin: "0px" }} className="btn">
                  Contact us
                </Link>
              </div>
            </Fade>
          </div>
          <Fade up delay={100}>
            <div className="project__details__text__header__container__right">
              <div className="project__details__text__header__container__right__logo__title">
                CLIENT
              </div>
              <div className="project__details__text__header__container__right__logo">
                <img src="/weeklylogo.webp" alt="logo" />
              </div>
              <div className="project__details__right__text__services">
                SERVICES WE PROVIDED
              </div>
              <div className="project__details__right__text__services__title">
                UX/UI Design
              </div>
              <div className="project__details__right__text__services__title">
                Graphic Design
              </div>
            </div>
          </Fade>
        </div>
        <div className="project__header__imags__slider__over">
          <div className="project__header__imags__slider">
            <img
              src="/weekly.webp"
              alt="img"
              className="project__header__imags__slider__webimg"
            />
          </div>
        </div>
        <div
          className="project__details__text__header__container__bg"
          style={{
            background:
              "linear-gradient(120deg, #ed1b16 3.95%, #1e1e1e 96.98%)",
          }}
        />
        <div className="project__details__about__container">
          <Fade up delay={100}>
            <div className="project__details__about__container__heading">
              ABOUT THE PROJECT
            </div>
          </Fade>
          {aboutArray.map(({ heading, text }, index) => (
            <div
              className="project__details__about__container__text__wraper"
              key={index}
            >
              <Fade up delay={100}>
                <div className="project__details__about__container__text__wraper__heading">
                  {heading}
                </div>
              </Fade>
              <Fade up delay={300}>
                <div className="project__details__about__container__text__wraper__sub__heading">
                  {text}
                </div>
              </Fade>
            </div>
          ))}
        </div>
        <div className="project__main__full__img">
          <img src="/weeklyvideo.webp" alt="devscot" />
        </div>
        <Fade up delay={100}>
          <div className="process__image">
            <img src="/weeklysvg.svg" alt="" />
          </div>
        </Fade>
        <div className="Emphasizing__main__container">
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__logo">
              <img src="/weeklylogo.webp" alt="meal" />
            </div>
          </Fade>
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__heading">
              Emphasizing consistency: creating a self-sufficient ecosystem
              within Infinity
            </div>
          </Fade>
          <Fade up delay={300}>
            <div className="Emphasizing__main__container__subheading">
              Our client is a visionary company that aims to simplify
              decentralized finance. With features offering convenience
            </div>
          </Fade>
          <Fade up delay={500}>
            <div className="Emphasizing__main__container__project__img">
              <img src="/weeklyimg.webp" alt="" />
            </div>
          </Fade>
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
                  fill="#ed1b16"
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
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <Fade up delay={100}>
            <div className="guide__section__wraper__heading">
              Visual Style Guide Creation
            </div>
          </Fade>
          <Fade up delay={300}>
            <div className="guide__section__wraper__sub__heading">
              We created a visual style guide, which was a milestone in the
              design consistency of the project. Just like the design system, it
              encompassed all visual elements that can be used across the
              Infinity platform.
            </div>
          </Fade>
          <div className="guide__section__card__wraper">
            <Fade up delay={100}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #ed1b16",
                }}
              >
                #ed1b16
              </div>
            </Fade>
            <Fade up delay={300}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #1E1E1E",
                  color: "#fff",
                }}
              >
                #1E1E1E
              </div>
            </Fade>
            <Fade up delay={500}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #33373B",
                }}
              >
                #33373B
              </div>
            </Fade>
            <Fade up delay={700}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #FFFFFF",
                  color: "BLACK",
                }}
              >
                #FFFFFF
              </div>
            </Fade>
          </div>
          <div className="guide__section__card__font">
            <Fade up delay={500}>
              <div className="guide__section__card__font__left">
                <div className="guide__section__card__font__title">
                  Typography
                </div>
                <div className="guide__section__card__font__left__name">
                  Plus jakarta Sans
                </div>
                <div className="guide__section__card__font__left__sub__name">
                  Semi-bold
                </div>
              </div>
            </Fade>
            <Fade up delay={800}>
              <div className="guide__section__card__font__right">
                <div className="guide__section__card__font__title">
                  Heading Font
                </div>
                <div className="guide__section__card__font__right__name">
                  Aa Bb Cc Dd Ee Ff Gg Hh li Kk LI Mm Nn Oo Pp Qq Rr Ss Tt Vv Xx
                  Yy Zz
                </div>
                <div className="guide__section__card__font__right__sub__name">
                  0123456789!@#$%*&*()_+
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div className="result__container__over">
          <div className="result__container">
            <Fade up delay={100}>
              <div className="result__container__heading">THE RESULT</div>
            </Fade>
            <div className="result__container__text__wraper__container">
              <Fade up delay={200}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    80%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={200}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    40%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={500}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    25%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
              <Fade up delay={500}>
                <div className="result__container__text__wraper">
                  <div className="result__container__text__wraper__number">
                    5%
                  </div>
                  <div className="result__container__text__wraper__heading">
                    User satisfaction rate
                  </div>
                  <div className="result__container__text__wraper__subheading">
                    Our Web 3.0 development and design services left most users
                    satisfied.
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <GetDemo />
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
