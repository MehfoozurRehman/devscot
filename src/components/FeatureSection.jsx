import React from "react";
import FeatureSectionimg from "../assets/FeatureSectionimg.png";
export default function FeatureSection() {
  return (
    <div>
      <div className="FeatureSection">
        <div className="FeatureSection__content">
          <div className="FeatureSection__content__left">
            <div className="FeatureSection__content__left__content">
              <div className="FeatureSection__content__left__content__heading">
                <span>FEATURED</span> <br />
                Projects
              </div>
              <div className="FeatureSection__content__left__content__info">
                View the full case study of our recent featured and awesome
                works that we created for our clients.
              </div>
              <button className="FeatureSection__content__left__content__button">
                View All Projects
              </button>
            </div>
          </div>
          <div className="FeatureSection__content__right">
            <div className="FeatureSection__content__right__content">
              <div className="FeatureSection__content__right__content__img">
                <img src={FeatureSectionimg} alt="" />
                <img src={FeatureSectionimg} alt="" />
                <img src={FeatureSectionimg} alt="" />
                <img src={FeatureSectionimg} alt="" />
                <img src={FeatureSectionimg} alt="" />
                <img src={FeatureSectionimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
