"use client";
import "@/styles/projectpage.scss";
import { ArrowRight } from "react-feather";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fade } from "react-reveal";

const Data = [
  {
    link: "/web-development",
    title: "Web development",
    img: "/FeatureSectionimg.webp",
    delay: 100,
  },
  {
    link: "/mobile-development",
    title: "Mobile development",
    img: "/FeatureSectionimg.webp",
    delay: 200,
  },
  {
    link: "/digital-marketing",
    title: "Digital Marketing",
    img: "/FeatureSectionimg.webp",
    delay: 300,
  },
  {
    link: "/ui-ux-design",
    title: "UI/UX Design",
    img: "/FeatureSectionimg.webp",
    delay: 400,
  },
  {
    link: "/branding",
    title: "Branding",
    img: "/FeatureSectionimg.webp",
    delay: 500,
  },
  {
    link: "/seo",
    title: "E-commerce",
    img: "/FeatureSectionimg.webp",
    delay: 600,
  },
  {
    link: "/seo",
    title: "NFT Marketplace",
    img: "/FeatureSectionimg.webp",
    delay: 700,
  },
  {
    link: "/seo",
    title: "Wallet",
    img: "/FeatureSectionimg.webp",
    delay: 800,
  },
  {
    link: "/seo",
    title: "Dapp",
    img: "/FeatureSectionimg.webp",
    delay: 900,
  },
  {
    link: "/seo",
    title: "Defi",
    img: "/FeatureSectionimg.webp",
    delay: 1000,
  },
];

export default function Projects() {
  return (
    <>
      <Header />
      <div className="projectpage__Section">
        <div className="projectpage__Section__content">
          <Fade up delay={100}>
            {" "}
            <h1 className="projectpage__Section__content__heading">
              Projects
            </h1>{" "}
          </Fade>{" "}
          <Fade up delay={100}>
            {" "}
            <div className="projectpage__Section__content__info">
              Let's dive into part of our journey. Of course we started working
              for web2 companies, but really fast we found a passion and fall in
              love with crypto, wallets, NFTs and other parts of web3 world.
              We're proud that we established in this segment and we always
              trying to make things better and easy to use for users.
            </div>{" "}
          </Fade>{" "}
          <div className="projectpage__Section__content__cards">
            {Data.map((data) => {
              return (
                <a
                  href={"/projects" + data.link}
                  key={data.id}
                  className="projectpage__Section__content__card"
                >
                  <Fade up delay={data.delay ? data.delay : 100}>
                    <div className="projectpage__Section__content__card__content">
                      <img
                        className="projectpage__Section__content__card__content_img"
                        src={data.img}
                        alt="project"
                      />
                      <div className="projectpage__Section__content__card__content__name__icon">
                        <div className="projectpage__Section__content__card__content__name">
                          {data.title}
                        </div>
                        <div className="projectpage__Section__content__card__content__icon">
                          <ArrowRight />
                        </div>
                      </div>
                    </div>
                  </Fade>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
