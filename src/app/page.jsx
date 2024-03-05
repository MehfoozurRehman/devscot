import FeatureSection from "@/components/FeatureSection";
import FeatureSectionMobile from "@/components/FeatureSectionMobile";
import HomeSection from "../components/HomeSection";
import HowWorkSection from "@/components/HowWorkSection";
import NumbersSection from "@/components/NumbersSection";
import SolutionSection from "@/components/SolutionSection";
import Testimonial from "@/components/Testimonial";

export default function Index() {
  return (
    <>
      <HomeSection />
      <section className="hero__section__aboutus">
        <div className="hero__section__aboutus__content">
          <div className="hero__section__aboutus__content__left">
            We unlock the potential of your business with creative digital
            solutions.
          </div>
          <div className="hero__section__aboutus__content__right">
            From traditional PR and thought leadership campaigns to storytelling
            and creative social media management we’ve got you covered.
            Something is not your average order-taking vendor. We are proud to
            be the go-to partner for some of the world’s biggest agencies and
            brands because they trust our expertise.
          </div>
        </div>
        <div className="line" />
      </section>
      <SolutionSection />
      <NumbersSection />
      <HowWorkSection />
      <FeatureSection />
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
    </>
  );
}
