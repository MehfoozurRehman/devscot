"use client";

import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";
import splitText from "@/utils/splitText";
import stats from "@/db/stats.json";

export default function About() {
  const Teamdata = [
    {
      name: "Hammad Habib",
      position: "CEO & Founder",
      image: "/teammember1.png",
    },
    {
      name: "Mehfooz-Ur-Rehman",
      position: "Senior Developer",
      image: "/teammember2.png",
    },
    {
      name: " Muhammad Arslan ",
      position: "Fiver Handler",
      image: "/teammember3.png",
    },
    {
      name: " M Bilal Khalid",
      position: "Ui/Ux Designer",
      image: "/teammember4.png",
    },
    {
      name: "M Abrar Khalid ",
      position: "Digtal Marketing Manager",
      image: "/teammember5.png",
    },
    {
      name: "Asim Rasheed",
      position: "Frontend Developer",
      image: "/teammember6.png",
    },
    {
      name: "Arslan Iftekhar",
      position: "Frontend Developer",
      image: "/teammember7.png",
    },
    {
      name: "Zain Ul Abideen",
      position: "Graphic Designer",
      image: "/teammember8.png",
    },
    {
      name: " Muahmmad Usama",
      position: "Video Editor",
      image: "/teammember9.png",
    },
    {
      name: "Muahmmad Faisal",
      position: "Ui/Ux Designer",
      image: "/teammember10.png",
    },
  ];
  return (
    <>
      <Header />
      <div className="Aboutuspage">
        <div className="Aboutuspage__heading">Let us introduce ourselves</div>
        <div className="Aboutuspage__about">
          <Fade up delay={100}>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="Aboutuspage__about__button"
            >
              Lets Talk
            </button>
          </Fade>
          <Fade up delay={100}>
            <div className="Aboutuspage__about__info">
              We are a team of seasoned engineers, designers, and strategists
              who work together to create cutting-edge software solutions for
              businesses that drive results.
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
                  We are a software development company that provides cutting
                  edge engineering solutions, helping local and international
                  companies and clients untangle complex issues that always
                  emerge during their digital evolution journey. Since 2013 we
                  have been a visionary and a reliable software engineering
                  partner for world-class brands.
                  <br />
                  <br />
                  Our software development services include consulting and
                  product engineering, mobile app development, web development.
                  We are a team of seasoned engineers, designers, and
                  strategists who work together to create cutting-edge software
                  solutions for businesses that drive results.
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="Aboutuspage__numbers">
          <div className="Aboutuspage__numbers__content">
            {stats.map((entry) => (
              <div
                key={entry.text}
                className="Aboutuspage__numbers__content__card"
              >
                <div className="Aboutuspage__numbers__content__card__number">
                  {entry.number}+
                </div>
                <Fade up delay={100}>
                  <div className="Aboutuspage__numbers__content__card__info">
                    {entry.text}
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <div className="Aboutuspage__logos">
          <div className="Aboutuspage__logos__content">
            <div className="Aboutuspage__logos__content__main">
              <div className="Aboutuspage__logos__content__main__left">
                <Fade up delay={100}>
                  <div className="Aboutuspage__logos__content__subheading">
                    {splitText("Team")}
                  </div>
                </Fade>
                <Fade up delay={100}>
                  <div className="Aboutuspage__logos__content__heading">
                    A Team Of <br /> Web3 Experts
                  </div>
                </Fade>
              </div>
              <div className="Aboutuspage__logos__content__main__right">
                <Fade up delay={100}>
                  <div className="Aboutuspage__logos__content__info">
                    View the full case study of our recent featured and awesome
                    works that we created for our clients.
                  </div>
                </Fade>
              </div>
            </div>
            <div className="Aboutuspage__logos__content__team">
              {Teamdata.map((data) => (
                <div className="Aboutuspage__logos__content__team__card">
                  <img
                    src={data.image}
                    alt=""
                    className="Aboutuspage__logos__content__team__card__image"
                  />
                  <div className="Aboutuspage__logos__content__team__card__info">
                    <div className="Aboutuspage__logos__content__team__card__info__content">
                      <div className="Aboutuspage__logos__content__team__card__info__name">
                        {data.name}
                      </div>
                      <div className="Aboutuspage__logos__content__team__card__info__position">
                        {data.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="Aboutuspage__logos__content__logos">
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
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
