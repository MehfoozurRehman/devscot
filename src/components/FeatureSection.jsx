import FeatureSectionimg from "../assets/FeatureSectionimg.png";
import React from "react";

export default function FeatureSection() {
  return (
    <div>
      <div className="FeatureSection">
        <div className="FeatureSection__content">
          <div className="FeatureSection__content__left">
            <div className="FeatureSection__content__left__content">
              <div className="FeatureSection__content__left__content__headingsub">
                FEATURED <br />
              </div>
              <div className="FeatureSection__content__left__content__heading">
                Projects
              </div>
              <div className="FeatureSection__content__left__content__info">
                View the full case study of our recent featured and awesome
                works that we created for our clients.
              </div>
            </div>
            <div className="FeatureSection__content__left__content__div">
              <button className="FeatureSection__content__left__content__button">
                View All Projects
              </button>
            </div>
          </div>
          <div className="FeatureSection__content__right">
            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />
            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />
            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />

            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />
            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />
            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />

            <img
              src={FeatureSectionimg}
              alt=""
              className="FeatureSection__content__right__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
