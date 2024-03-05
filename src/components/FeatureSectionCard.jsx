import { ArrowUpRight } from "react-feather";
import Link from "next/link";

export default function FeatureSectionCard() {
  return (
    <div className="FeatureSection__content__right__content">
      <img
        src="/FeatureSectionimg.png"
        alt=""
        className="FeatureSection__content__right__img"
      />
      <Link
        href="/Projects/Meal"
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
      </Link>
    </div>
  );
}
