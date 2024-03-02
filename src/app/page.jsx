import FeatureSection from "@/components/FeatureSection";
import FeatureSectionMobile from "@/components/FeatureSectionMobile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWorkSection from "@/components/HowWorkSection";
import NumbersSection from "@/components/NumbersSection";
import SolutionSection from "@/components/SolutionSection";
import Test from "@/components/Test";
import Testimonial from "@/components/Testimonial";
import { addAnimation } from "@/utils/AddAnimation";

const splitText = (text) => {
  return text.split("").map((word, index) => {
    if (index % 2 !== 0) {
      return <span>{word}</span>;
    }
    return word;
  });
};

export default function Index() {
  return (
    <>
      <Test />
      <Header />
      <section className="herosection">
        <div className="herosection__content">
          <div className="herosection__content__subheading">
            We are heroes of
          </div>
          <div className="herosection__content__heading">
            {splitText("Design. Development & Identity for your Product")}
          </div>
          <div className="herosection__content__info">
            {splitText(
              "We create modern user experience for new startups by creating a bridge between users’ needs and the client’s requirements. We expertise in developing"
            )}
          </div>
          <div className="herosection__content__info__highlight">
            <button className="herosection__content__info__highlight__name">
              Mobile Apps
            </button>
            <button className="herosection__content__info__highlight__name">
              Web Apps
            </button>
            <div className="herosection__content__info__highlight__names">
              And
            </div>

            <button className="herosection__content__info__highlight__name">
              degital Product Design
            </button>
          </div>
        </div>
        <img
          src="/herobackground.png"
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
      <section className="herosection__aboutus">
        <div className="herosection__aboutus__content">
          <div className="herosection__aboutus__content__left">
            We unlock the potential of your business with creative digital
            solutions.
          </div>
          <div className="herosection__aboutus__content__right">
            {addAnimation(
              "From traditional PR and thought leadership campaigns to storytelling and creative social media management we’ve got you covered. Something is not your average order-taking vendor. We are proud to be the go-to partner for some of the world’s biggest agencies and brands because they trust our expertise."
            )}
          </div>
        </div>
        <div className="line" />
      </section>
      {/* <section className="services__section">
        <div className="services__section__heading">Solution We Provide</div>
        <div className="services__section__content">
          <div className="services__section__content__left"></div>
          <div className="services__section__content__right"></div>
        </div>
      </section> */}
      <SolutionSection />
      <NumbersSection />
      <HowWorkSection />
      <FeatureSection />
      <FeatureSectionMobile />
      <FeatureSectionMobile />
      <FeatureSectionMobile />
      <div className="Service__agency__main__container">
        <div className="Service__agency__trust__container">
          <div className="omega__title__main__title">
            <br />
            <span> Our</span>
            <span>
              Testimonial
              <svg
                width="130"
                height="16"
                viewBox="0 0 266 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12.1784C43.7594 6.95554 151.922 -1.40459 262.496 6.93771"
                  stroke="#139948"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </>
  );
}