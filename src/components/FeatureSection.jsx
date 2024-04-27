"use client";

import Fade from "@/components/Fade";
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
                  Discover the captivating case studies showcasing our recent
                  featured projects. Dive into the stories behind our innovative
                  solutions crafted for clients. Explore our journey of
                  creativity, problem-solving, and client success. Experience
                  excellence and satisfaction, all in one place.
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
