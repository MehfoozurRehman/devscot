"use client";

import Fade from "@/components/Fade";
import { useState } from "react";

const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));

export default function GetDemo() {
  const [Email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setProcessing(true);
      if (!Email) {
        setErrorMail("Email is required");
      } else if (!Email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        setErrorMail("Enter the correct mail address");
      } else {
        setErrorMail(null);
        setStatus("sending");
        setEmail("");
        await waitFor(2000);
        setStatus("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  }
  return (
    <div className="get__demo__main__container">
      <Fade left delay={100}>
        <div className="get__demo__main__container__left">
          <img
            className="get__demo__main__container__left__img"
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702008938/Group_1707485772_tlqvjk.webp"
            alt=""
          />
        </div>
      </Fade>
      <div className="get__demo__main__container__right">
        <Fade up delay={100}>
          <div className="get__demo__main__container__right__heading">
            Get a demo 💪 Build Landing pages
          </div>
        </Fade>
        <Fade up delay={100}>
          <div className="get__demo__main__container__right__subheading">
            Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
            mauris hac nisi habitasse donec. Vitae integer massa in blandit.
          </div>
        </Fade>
        <div className="get__demo__main__container__right__mail__wraper__bg__over">
          <div className="get__demo__main__container__right__mail__wraper__bg">
            <svg
              width="744"
              height="263"
              viewBox="0 0 744 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3" filter="url(#filter0_f_1405_225)">
                <rect
                  x="98"
                  y="98"
                  width="548"
                  height="67"
                  fill="url(#paint0_linear_1405_225)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_1405_225"
                  x="0.199997"
                  y="0.199997"
                  width="743.6"
                  height="262.6"
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
                    stdDeviation="48.9"
                    result="effect1_foregroundBlur_1405_225"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1405_225"
                  x1="107"
                  y1="124.5"
                  x2="387.618"
                  y2="391.247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#52D5FF" />
                  <stop offset="1" stopColor="#7F60F9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Fade up delay={100}>
            <div className="get__demo__main__container__right__mail__wraper">
              <div className="get__demo__main__container__right__mail__wraper__title">
                Provide email address to get free demo
              </div>
              <form
                onSubmit={handleSubmit}
                className="get__demo__main__container__right__mail__wraper__input__wraper"
              >
                <input
                  className="get__demo__main__container__right__mail__wraper__input"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!e.target.value) {
                      setErrorMail("Email is required");
                    } else {
                      setErrorMail("");
                    }
                  }}
                  value={Email}
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  disabled={processing}
                  className="get__demo__main__container__right__mail__wraper__input__button"
                >
                  {status === "sending" ? <>sending...</> : "Get started now"}
                </button>
              </form>
              <p style={{ color: "red", fontSize: "14px" }}>{errorMail}</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
