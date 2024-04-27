"use client";

import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";
import splitText from "@/utils/splitText";

export default function About() {
  return (
    <>
      <Header />
      <div className="Aboutuspage">
        <div className="Aboutuspage__heading">
          We’re a­ full­ service­ creative­ and­ digital­ agency,­ working­
          globally­ with­ leargest ­brands
        </div>
        <div className="Aboutuspage__about">
          <Fade up delay={100}>
            <button className="Aboutuspage__about__button">
              Trend & Technology
            </button>
          </Fade>
          <Fade up delay={100}>
            <div className="Aboutuspage__about__info">
              hink of the world's most iconica and successful brands easily
              findable, impactful. Interactional and exceptional designs. Our
              story takes beginning in 2013
            </div>
          </Fade>
          <Fade up delay={100}>
            <img
              src="https://wealcoder.com/dev/html/axtra/assets/imgs/about/award.png"
              alt=""
              className="Aboutuspage__about__logo"
            />
          </Fade>
        </div>
        <Fade up delay={100}>
          <div className="Aboutuspage__video">
            <video
              loop={true}
              autoPlay={true}
              muted={true}
              playsInline={true}
              src="https://wealcoder.com/dev/html/axtra/assets/video/video.mp4"
              className="Aboutuspage__video__video"
            />
          </div>
        </Fade>
        <div className="Aboutuspage__ourstory">
          <div className="Aboutuspage__ourstory__content">
            <div className="Aboutuspage__ourstory__content__left">
              <Fade up delay={100}>
                <div className="Aboutuspage__ourstory__content__subheading">
                  Digital Studio
                </div>
              </Fade>
              <Fade up delay={100}>
                <div className="Aboutuspage__ourstory__content__heading">
                  Our Story
                </div>
              </Fade>
            </div>
            <div className="Aboutuspage__ourstory__content__right">
              <Fade up delay={100}>
                <div className="Aboutuspage__ourstory__content__right__info">
                  Your brand is the most important asset in your company let our
                  team of professionals help you with a good strategy took the
                  runway next with an edgy collection featuring dyed denim
                  pieces. The collection included patchwork denim, a trend that
                  has recently exploded in younger generations. Playing on
                  aspects of sustainability, the pieces appeared to be upcycled
                  to establish dimension and flair. This take on grunge and
                  streetwear took sustainable fashion to an entirely new level.
                  <br />
                  <br />
                  ur specialized team of researchers, strategists, designers,
                  developers, and project managers work with streamlined
                  processes to break through organizational roadblocks. We
                  translate research into solutions, crafting thoughtful and
                  unified brands.
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="Aboutuspage__numbers">
          <div className="Aboutuspage__numbers__content">
            <div className="Aboutuspage__numbers__content__card">
              <div className="Aboutuspage__numbers__content__card__number">
                10k
              </div>
              <Fade up delay={100}>
                <div className="Aboutuspage__numbers__content__card__info">
                  Projects Completed
                </div>
              </Fade>
            </div>
            <div className="Aboutuspage__numbers__content__card">
              <div className="Aboutuspage__numbers__content__card__number">
                18k
              </div>
              <Fade up delay={100}>
                <div className="Aboutuspage__numbers__content__card__info">
                  Happy customers
                </div>
              </Fade>
            </div>
            <div className="Aboutuspage__numbers__content__card">
              <div className="Aboutuspage__numbers__content__card__number">
                122
              </div>
              <Fade up delay={100}>
                <div className="Aboutuspage__numbers__content__card__info">
                  Years experiences
                </div>
              </Fade>
            </div>
            <div className="Aboutuspage__numbers__content__card">
              <div className="Aboutuspage__numbers__content__card__number">
                132
              </div>
              <Fade up delay={100}>
                <div className="Aboutuspage__numbers__content__card__info">
                  Awards achievement
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="Aboutuspage__logos">
          <div className="Aboutuspage__logos__content">
            <Fade up delay={100}>
              <div className="Aboutuspage__logos__content__subheading">
                {splitText("Internation Brands")}
              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="Aboutuspage__logos__content__heading">
                {splitText("We are happy to work with global largest brands")}
              </div>
            </Fade>
            <div className="Aboutuspage__logos__content__logos">
              <Fade up delay={100}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={200}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={300}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={400}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={500}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={600}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={700}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={800}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={900}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
              <Fade up delay={1000}>
                <div className="Aboutuspage__logos__content__logos__card">
                  <img
                    src="https://wealcoder.com/dev/html/axtra/assets/imgs/brand/1.png"
                    alt=""
                    className="Aboutuspage__logos__content__logos__card__image"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
