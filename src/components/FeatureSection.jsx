"use client";
import { Fade } from "react-reveal";
import FeatureSectionCard from "./FeatureSectionCard";

export default function FeatureSection() {
  return (
    <div>
      <div className="FeatureSection">
        <div className="FeatureSection__content">
          <div className="FeatureSection__content__left">
            <div className="FeatureSection__content__left__content">
              <Fade up delay={100}>
                <div className="FeatureSection__content__left__content__headingsub">
                  FEATURED <br />
                </div>
              </Fade>
              <Fade up delay={100}>
                <div className="FeatureSection__content__left__content__heading">
                  Projects
                </div>
              </Fade>
              <Fade up delay={100}>
                <div className="FeatureSection__content__left__content__info">
                  View the full case study of our recent featured and awesome
                  works that we created for our clients.
                </div>
              </Fade>
            </div>
            <Fade up delay={100}>
              <div className="FeatureSection__content__left__content__div">
                <button className="FeatureSection__content__left__content__button">
                  View All Projects
                </button>
              </div>
            </Fade>
          </div>
          <div className="FeatureSection__content__right">
            <FeatureSectionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
