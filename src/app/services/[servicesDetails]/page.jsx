"use client";
import React, { useEffect } from "react";
import "@/styles/servicesdetails.scss";
import "@/styles/servicescard.scss";
import MagnetButton from "@/components/MagnetButton";

function ServicePage() {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero area start */}
            <section className="solution__area">
              <div className="container hero-line"></div>
              <div className="solution__wrapper">
                {/* Left Section */}
                <div className="solution__left">
                  <div className="solution__img-1">
                    <img
                      src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/solution.png"
                      alt="Solution Image"
                    />
                  </div>
                  <div className="solution__img-2">
                    <img
                      src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/solution-2.png"
                      alt="Solution Image"
                    />
                  </div>
                </div>

                {/* Middle Section */}
                <div className="solution__mid">
                  <h1 className="solution__title animation__char_come">
                    Digital Solution
                  </h1>
                  <p>
                    We’re designing digital experiences that enrich human lives
                    and it helps to grow your business globally trends.
                  </p>
                </div>

                {/* Right Section */}
                <div className="solution__right">
                  <div className="solution__img-3">
                    <img
                      src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/solution-3.png"
                      alt="Solution Image"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="container pb-130">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="solution__btm">
                      <ul>
                        <li>Approch</li>
                        <li>Creativity</li>
                        <li>Experienced</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shape Images */}
              <div className="solution__shape">
                <img
                  src="https://wealcoder.com/dev/html/axtra/assets/imgs/icon/1.png"
                  alt="Shape Image"
                  className="shape-1"
                />
                <img
                  src="https://wealcoder.com/dev/html/axtra/assets/imgs/icon/2.png"
                  alt="Shape Image"
                  className="shape-2"
                />
                <img
                  src="https://wealcoder.com/dev/html/axtra/assets/imgs/icon/3.png"
                  alt="Shape Image"
                  className="shape-3"
                />
                <img
                  src="https://wealcoder.com/dev/html/axtra/assets/imgs/icon/4.png"
                  alt="Shape Image"
                  className="shape-4"
                />
                <img
                  src="https://wealcoder.com/dev/html/axtra/assets/imgs/icon/5.png"
                  alt="Shape Image"
                  className="shape-5"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className="service__Pagedetails__section">
        <div className="service__Pagedetails__section__content">
          <div className="service__Pagedetails__section__content__left">
            <div className="service__Pagedetails__section__content__left__links">
              <div className="service__Pagedetails__section__content__left__links__link active">
                Web Development
              </div>
              <div className="service__Pagedetails__section__content__left__links__link">
                Mobile App Development
              </div>
              <div className="service__Pagedetails__section__content__left__links__link">
                Digital Marketing
              </div>
              <div className="service__Pagedetails__section__content__left__links__link">
                UI/UX Design
              </div>
              <div className="service__Pagedetails__section__content__left__links__link">
                Branding
              </div>
              <div className="service__Pagedetails__section__content__left__links__link">
                E-commerce
              </div>
            </div>
          </div>
          <div className="service__Pagedetails__section__content__mid">
            <div className="service__Pagedetails__section__content__mid__imgs">
              <img src="/FeatureSectionimg.png" alt="Solution Image" />
              <img src="/FeatureSectionimg.png" alt="Solution Image" />{" "}
              <img src="/FeatureSectionimg.png" alt="Solution Image" />{" "}
              <img src="/FeatureSectionimg.png" alt="Solution Image" />
            </div>
          </div>
          <div className="service__Pagedetails__section__content__right">
            <div className="service__Pagedetails__section__content__right__content">
              <div className="service__Pagedetails__section__content__right__content__heading">
                Web Development
              </div>
              <p className="service__Pagedetails__section__content__right__content__info">
                We’re designing digital experiences that enrich human lives and
                it helps to grow your business globally trends.
              </p>
              <div className="service__Pagedetails__section__content__right__content__heading__links">
                <ul>
                  <li>Approch</li>
                  <li>Creativity</li>
                  <li>Experienced</li>
                </ul>
                <ul>
                  <li>Approch</li>
                  <li>Creativity</li>
                  <li>Experienced</li>
                </ul>
              </div>
              <MagnetButton>Get Started</MagnetButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
