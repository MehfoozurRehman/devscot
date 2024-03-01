import { ArrowUp, ArrowUpCircle, ArrowUpRight } from "react-feather";

import FeatureSectionimg from "../assets/FeatureSectionimg.png";
import { NavLink } from "react-router-dom";

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({}) {
  return (
    <div className="FeatureSection__content__right__content">
      <img
        src={FeatureSectionimg}
        alt=""
        className="FeatureSection__content__right__img"
      />
      <NavLink
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to="/Projects/Meal"
        className="FeatureSection__content__right__content__card"
      >
        <div className="FeatureSection__content__right__content__card__heading">
          Project Name
          <div className="FeatureSection__content__right__content__card__arrow">
            <ArrowUpRight />
          </div>
        </div>
        <div className="FeatureSection__content__right__content__card__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </NavLink>
    </div>
  );
}
