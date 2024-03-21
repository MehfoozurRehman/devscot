import { ArrowRight } from "react-feather";
import "@/styles/projectpage.scss";
import { motion } from "framer-motion";
export default function Projects() {
  const Data = [
    {
      title: "Web development",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Mobile development",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Digital Marketing",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "UI/UX Design",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Branding",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "E-commerce",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "NFT Marketplace",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Wallet",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Dapp",
      img: "/FeatureSectionimg.png",
    },
    {
      title: "Defi",
      img: "/FeatureSectionimg.png",
    },
  ];
  return (
    <>
      <div className="projectpage__Section">
        <div className="projectpage__Section__content">
          <h1 className="projectpage__Section__content__heading">Projects</h1>
          <div className="projectpage__Section__content__info">
            Let's dive into part of our journey. Of course we started working
            for web2 companies, but really fast we found a passion and fall in
            love with crypto, wallets, NFTs and other parts of web3 world. We're
            proud that we established in this segment and we always trying to
            make things better and easy to use for users.
          </div>
          <div className="projectpage__Section__content__cards">
            {Data.map((data) => {
              return (
                <div
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
