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
  },
  {
    link: "/mobile-development",
    title: "Mobile development",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/digital-marketing",
    title: "Digital Marketing",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/ui-ux-design",
    title: "UI/UX Design",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/branding",
    title: "Branding",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "E-commerce",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "NFT Marketplace",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "Wallet",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "Dapp",
    img: "/FeatureSectionimg.webp",
  },
  {
    link: "/seo",
    title: "Defi",
    img: "/FeatureSectionimg.webp",
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
