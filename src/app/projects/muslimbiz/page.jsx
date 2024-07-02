"use client";

import "swiper/css";
import "@/styles/muslim.scss";

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
    text: "DevScot partnered with MuslimBiz, a pioneering platform dedicated to providing efficient and reliable plumbing services. Our collaboration focused on designing a user interface (UI) that enhances user experience and facilitates seamless service delivery. MuslimBiz’s commitment to professionalism and customer satisfaction aligned perfectly with DevScot’s mission to deliver innovative UI/UX solutions. Through extensive consultations and a deep understanding of MuslimBiz’s brand values, we aimed to create a UI design that reflects their dedication to excellence in plumbing services.",
  },
  {
    heading: "Challenge",
    text: "Designing for MuslimBiz presented specific challenges that required strategic solutions. These included creating an intuitive and user-friendly interface for both service providers and customers, ensuring secure and seamless transaction processing, and implementing real-time scheduling and communication features. Additionally, accommodating a diverse range of plumbing services and geographical locations while maintaining consistent branding and usability posed technical complexities. DevScot addressed these challenges through rigorous research, iterative design processes, and collaboration with MuslimBiz’s team to ensure the UI design meets industry standards and exceeds user expectations.",
  },
  {
    heading: "Our solution",
    text: "DevScot approached the UI design for MuslimBiz with a holistic strategy focused on enhancing functionality and user experience. We began by conducting thorough user research and usability testing to understand the needs and preferences of both service providers and customers. This informed our design decisions, enabling us to create a clean, intuitive interface that simplifies booking, scheduling, and payment processes. Leveraging modern UI design principles, we integrated features such as interactive maps for service location, real-time service tracking, and secure payment gateways to enhance usability and transparency. Through continuous iteration and feedback loops with MuslimBiz, we refined the UI design to achieve optimal performance across different devices and ensure seamless service delivery. The result is a sophisticated and user-centric UI for MuslimBiz that enhances operational efficiency and customer satisfaction in the plumbing service industry.",
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

  const heading = splitText("Muslim Biz");

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
                Introducing MuslimBiz, your reliable app for accessing
                professional plumbing services. Connect with skilled plumbers
                who uphold the highest standards of service and reliability.
                Enjoy hassle-free scheduling, transparent pricing, and prompt
                assistance for all your plumbing needs through MuslimBiz.
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
                <img src="/muslimlogo.webp" alt="logo" />
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
              src="/muslimhero.webp"
              alt="img"
              className="project__header__imags__slider__webimg"
            />
          </div>
        </div>
        <div
          className="project__details__text__header__container__bg"
          style={{
            background:
              "linear-gradient(120deg, #f08a5d 3.95%, #8d4f33 96.98%)",
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
          <img src="/muslimvideo.webp" alt="devscot" />
        </div>
        <Fade up delay={100}>
          <div className="process__image">
            <img src="/muslimsvg.svg" alt="" />
          </div>
        </Fade>
        <div className="Emphasizing__main__container">
          <Fade up delay={100}>
            <div className="Emphasizing__main__container__logo">
              <img src="/muslimlogo.webp" alt="meal" />
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
              <img src="/muslimimg.webp" alt="" />
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
                  fill="#F08A5D"
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
                  backgroundColor: " #F08A5D",
                }}
              >
                #F08A5D
              </div>
            </Fade>
            <Fade up delay={300}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #1a1919",
                  color: "#fff",
                }}
              >
                #1a1919
              </div>
            </Fade>
            <Fade up delay={500}>
              <div
                className="guide__section__card"
                style={{
                  backgroundColor: " #8D4F33",
                }}
              >
                #8D4F33
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
