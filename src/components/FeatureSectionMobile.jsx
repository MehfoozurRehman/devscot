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
                View the full case study of our recent featured and awesome
                works that we created for our clients.
              </div>
            </div>
            <div className="FeatureSection__content__left__content__div">
              <button className="FeatureSection__content__left__content__button">
                View All Projects
              </button>
            </div>
            <div>
              <img
                src="/FeatureSectionimg.png"
                alt=""
                className="FeatureSection__content__right__img__mobile__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
