import FeatureSectionCard from "./FeatureSectionCard";
import Link from "next/link";

export default function FeatureSection() {
  return (
    <div>
      <div className="FeatureSection__mobile">
        <div className="FeatureSection__content__mobile">
          <div className="FeatureSection__content__mobile__content">
            <div className="FeatureSection__content__left__content">
              <div className="FeatureSection__content__left__content__headingsub">
                FEATURED <br />
              </div>
              <div className="FeatureSection__content__left__content__heading">
                Projects
              </div>
              <div className="FeatureSection__content__left__content__info">
                Discover the captivating case studies showcasing our recent
                featured projects. Dive into the stories behind our innovative
                solutions crafted for clients. Explore our journey of
                creativity, problem-solving, and client success. Experience
                excellence and satisfaction, all in one place.
              </div>
            </div>
            <div className="FeatureSection__content__left__content__div">
              <Link
                href="/projects"
                className="FeatureSection__content__left__content__button"
              >
                View All Projects
              </Link>
            </div>
            <div>
              <FeatureSectionCard />=
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
