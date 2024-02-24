import React from "react";
import Header from "../components/Header";
import herobackgroundimg from "../assets/herobackground.png";
export default function Index() {
  return (
    <div>
      <Header />
      <section className="herosection">
        <div className="herosection__content">
          <div className="herosection__content__subheading">
            We are heroes of
          </div>
          <div className="herosection__content__heading">
            Design. Development & Identity for your Product
          </div>
          <div className="herosection__content__info">
            We create modern user experience for new startups by creating a
            bridge between users’ needs and the client’s requirements. We
            expertise in developing
          </div>
          <div className="herosection__content__info__highlight">
            <button className="herosection__content__info__highlight__name">
              Mobile Apps
            </button>
            <button className="herosection__content__info__highlight__name">
              Web Apps
            </button>
            and
            <button className="herosection__content__info__highlight__name">
              degital Product Design
            </button>
          </div>
        </div>
        <img
          src={herobackgroundimg}
          alt="herobackgroundimg"
          className="herosection__backgroundimg"
        />
        <div className="Arrow__bottom">
          <svg
            width="8"
            height="30"
            viewBox="0 0 8 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.6266 29.3734C3.83282 29.5796 4.16717 29.5796 4.37339 29.3734L7.73394 26.0128C7.94016 25.8066 7.94016 25.4723 7.73394 25.2661C7.52772 25.0598 7.19337 25.0598 6.98715 25.2661L4 28.2532L1.01285 25.2661C0.806627 25.0598 0.472279 25.0598 0.266059 25.2661C0.0598393 25.4723 0.0598393 25.8066 0.266059 26.0128L3.6266 29.3734ZM3.47194 -2.30822e-08L3.47194 29L4.52806 29L4.52806 2.30822e-08L3.47194 -2.30822e-08Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
