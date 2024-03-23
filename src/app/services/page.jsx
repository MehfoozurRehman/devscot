"use client";

import "@/styles/servicesdetails.scss";
import "@/styles/servicescard.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MagnetButton from "@/components/MagnetButton";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from "framer-motion";
import { useRef } from "react";
import splitText from "@/utils/splitText";
import { Fade } from "react-reveal";

const Data = [
  {
    link: "/web-development",
    title: "Web Development",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 1,
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/mobile-development",
    title: "Mobile App Development",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 2,
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/digital-marketing",
    title: "Digital Marketing",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 3,
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/ui-ux-design",
    title: "UI/UX Design",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 4,
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/branding",
    title: "Branding",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 5,
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "E-commerce",
    description:
      "We’re designing digital experiences that enrich human lives and it helps to grow your business globally trends.",
    links: ["Approch", "Creativity", "Experienced"],
    id: 6,
    img: "/FeatureSectionimg.webp",
  },
];

function ServicePage() {
  const parentScrollContainerRef = useRef(null);
  const heading = splitText("Digital Solution");
  return (
    <>
      <div
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          marginTop: "50px",
        }}
        className="services__details__page"
        ref={parentScrollContainerRef}
      >
        <Header />
        <div id="smooth-wrapper" style={{ scrollSnapAlign: "start" }}>
          <div id="smooth-content">
            <main>
              <section className="solution__area">
                <div className="container hero-line" />
                <div className="solution__wrapper">
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
                  <div className="solution__mid">
                    <h1 className="solution__title animation__char_come">
                      {heading}
                    </h1>

                    <Fade up delay={100}>
                      <p>
                        We’re designing digital experiences that enrich human
                        lives and it helps to grow your business globally
                        trends.
                      </p>
                    </Fade>
                  </div>
                  <div className="solution__right">
                    <div className="solution__img-3">
                      <img
                        src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/solution-3.png"
                        alt="Solution Image"
                      />
                    </div>
                  </div>
                </div>
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
                  <div
                    className="service__Pagedetails__section__content__left__links"
                    key={item.id}
                  >
                    <div
                      href={`#${item.id}`}
                      className="service__Pagedetails__section__content__left__links__link "
                    >
                      <div data-to-scrollspy-id={item.id}>{item.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="service__Pagedetails__section__content__right">
              <ScrollSpy
                scrollThrottle={10}
                useBoxMethod={false}
                offsetTop={-250}
                parentScrollContainerRef={parentScrollContainerRef}
              >
                {Data?.map((item) => (
                  <section
                    className="service__Pagedetails__section__content__right__content__section"
                    id={item.id}
                    key={item.id}
                  >
                    <div className="service__Pagedetails__section__content__mid__imgs">
                      <motion.img
                        initial={{ scale: 1.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="service__Pagedetails__section__content__right__content">
                      <Fade up delay={100}>
                        {" "}
                        <h2 className="service__Pagedetails__section__content__right__content__heading">
                          {item.title}
                        </h2>
                      </Fade>
                      <Fade up delay={300}>
                        {" "}
                        <p className="service__Pagedetails__section__content__right__content__info">
                          {item.description}
                        </p>
                      </Fade>
                      <Fade up delay={500}>
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
                      </Fade>
                      <Fade up delay={700}>
                        {" "}
                        <MagnetButton>
                          <a
                            style={{ color: "white", textDecoration: "none" }}
                            href={"/services" + item.link}
                          >
                            Get Started
                          </a>
                        </MagnetButton>
                      </Fade>
                    </div>
                  </section>
                ))}
              </ScrollSpy>
            </div>
          </div>
        </div>
        <div className="service__Pagedetails__section__mobile">
          <div className="service__Pagedetails__section__mobile__content">
            {Data?.map((item) => (
              <section
                className="service__Pagedetails__section__content__right__content__section"
                id={item.id}
                key={item.id}
              >
                <div className="service__Pagedetails__section__content__mid__imgs__moblie">
                  <motion.img
                    initial={{ scale: 1.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="service__Pagedetails__section__content__right__content">
                  <h2 className="service__Pagedetails__section__content__right__content__heading">
                    {item.title}
                  </h2>
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
                  <MagnetButton>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href={"/services" + item.link}
                    >
                      Get Started
                    </a>
                  </MagnetButton>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;
