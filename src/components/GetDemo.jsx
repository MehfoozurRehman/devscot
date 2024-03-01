import { useState } from "react";

const waitFor = (ms) => new Promise((r) => setTimeout(r, ms));

export default function GetDemo() {
  const [Email, setEmail] = useState("");
  const [errorMail, seterrorMail] = useState("");
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);

  async function hanndelSubmit(e) {
    e.preventDefault();

    try {
      setProcessing(true);
      if (!Email) {
        seterrorMail("Email is required");
      } else if (!Email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        seterrorMail("Enter the correct mail address");
      } else {
        seterrorMail(null);
        setStatus("sending");
        setEmail("");
        await waitFor(2000);
        setStatus("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setProcessing(false);
    }
  }
  return (
    <div className="get__demo__main__container">
      <div className="get__demo__main__container__left">
        <img
          className="get__demo__main__container__left__img"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1702008938/Group_1707485772_tlqvjk.webp"
          alt=""
        />
      </div>
      <div className="get__demo__main__container__right">
        <div className="get__demo__main__container__right__heading">
          Get a demo 💪 Build Landing pages
        </div>
        <div className="get__demo__main__container__right__subheading">
          Eu scelerisque amet amet malesuada id ultrices morbi. Vitae purus
          mauris hac nisi habitasse donec. Vitae integer massa in blandit.
        </div>
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
          <div className="get__demo__main__container__right__mail__wraper">
            <div className="get__demo__main__container__right__mail__wraper__title">
              Provide email address to get free demo
            </div>
            <form
              onSubmit={hanndelSubmit}
              className="get__demo__main__container__right__mail__wraper__input__wraper"
            >
              <input
                className="get__demo__main__container__right__mail__wraper__input"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!e.target.value) {
                    seterrorMail("Email is required");
                  } else {
                    seterrorMail("");
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
        </div>
      </div>
    </div>
  );
}

export function SendingSVG() {
  return (
    // <div className="section__svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
        height: "100%",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}
