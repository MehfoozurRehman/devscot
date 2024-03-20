"use client";
import React, { useEffect } from "react";
import "@/styles/servicesdetails.scss";
import "@/styles/servicescard.scss";
import MagnetButton from "@/components/MagnetButton";
import ScrollSpy from "react-ui-scrollspy";

function ServicePage() {
  const Data = [
    {
      title: "Web Development",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 1,
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Mobile App Development",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 2,
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Digital Marketing",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 3,
      img: "/FeatureSectionimg.png",
    },
    {
      title: "UI/UX Design",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 4,
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Branding",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 5,
      img: "/FeatureSectionimg.png",
    },
    {
      title: "E-commerce",
      description:
        "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
      links: ["Approch", "Creativity", "Experienced"],
      id: 6,
      img: "/FeatureSectionimg.png",
    },
  ];
  const scrollToSection = (e, offset = 0) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let yOffset = 0;
      if (window.innerWidth >= 1220) {
        yOffset = -150; // For widths 1024px and above
      } else if (window.innerWidth >= 950) {
        yOffset = -195;
      } else {
        yOffset = -250;
      }
      const y =
        targetElement.getBoundingClientRect().top +
        window.scrollY +
        yOffset -
        offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
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
            {Data.map((item) => {
              return (
                <div className="service__Pagedetails__section__content__left__links">
                  <div
                    onClick={(e) => scrollToSection(e)}
                    href={`#${item.id}`}
                    className="service__Pagedetails__section__content__left__links__link "
                  >
                    <div data-to-scrollspy-id={item.id}>{item.title}</div>
                  </div>
                </div>
              );
            })}{" "}
          </div>{" "}
          <div className="service__Pagedetails__section__content__mid">
            <div className="service__Pagedetails__section__content__mid__imgs">
              {Data.map((item) => (
                <section
                  id={item.id}
                  className="service__Pagedetails__section__content__mid__imgs__img"
                >
                  <img src="/FeatureSectionimg.png" alt="Solution Image" />
                </section>
              ))}
            </div>
          </div>
          <div className="service__Pagedetails__section__content__right">
            <ScrollSpy
              scrollThrottle={10}
              useBoxMethod={false}
              offsetTop={-250}
            >
              {Data?.map((item) => (
                <section
                  id={item.id}
                  className="service__Pagedetails__section__content__right__content"
                >
                  <div className="service__Pagedetails__section__content__right__content__heading">
                    {item.title}
                  </div>
                  <p className="service__Pagedetails__section__content__right__content__info">
                    {item.description}
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
                </section>
              ))}{" "}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
