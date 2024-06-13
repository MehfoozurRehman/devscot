"use client";

import "@/styles/projectpage.scss";

import { ArrowRight } from "react-feather";
import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";

const Data = [
  {
    delay: 100,
    img: "/project1img.webp",
    link: "/meetworth",
    title: "Meet Worth",
    info: "Business investor finder app: Streamlining connections between entrepreneurs and investors for efficient funding opportunities.",
  },
  {
    delay: 200,
    link: "/mark",
    img: "/project2img.webp",
    title: "Mark",
    info: "Banking app: Securely manage finances, transfer funds, pay bills, and access banking services conveniently from your mobile device.",
  },
  {
    delay: 300,
    link: "/unitedmeal",
    img: "/project3img.webp",
    title: "United Meal",
    info: "Food app: Discover, order, and enjoy a diverse range of cuisines from local restaurants, with options for delivery, pickup, and reservations.",
  },
  {
    delay: 400,
    link: "/sakenemaar",
    img: "/project4img.webp",
    title: "Saken Emaar",
    info: "Real estate  Search, buy, sell, or rent properties, access market insights, and connect with agents for seamless property transactions.",
  },
  {
    delay: 500,
    link: "/muslimbiz",
    img: "/project5img.webp",
    title: "Muslim Biz",
    info: "Hiring labor web platform: Facilitating the recruitment process, connecting employers with skilled workers, and streamlining labor management for various industries.",
  },

  {
    delay: 700,
    link: "/daltaswap",
    img: "/daltabanner.webp",
    title: "Dalta Swap ",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    delay: 800,
    link: "/burns",
    img: "/burnsbanner.webp",
    title: "Burns ",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    delay: 900,
    link: "/healthvital",
    img: "/healthbanner.webp",
    title: "Health Vital ",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    delay: 1000,
    link: "/weekly",
    img: "/weeklybanner.webp",
    title: "Weekly ",
    info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
 
];

export default function Projects() {
  return (
    <>
      <Header />
      <div className="projectpage__Section">
        <div className="projectpage__Section__content">
          <Fade up delay={100}>
            <h1 className="projectpage__Section__content__heading">Projects</h1>
          </Fade>
          <Fade up delay={100}>
            <div className="projectpage__Section__content__info">
              Our projects are a testament to our commitment to excellence and
              innovation. We have successfully delivered a wide range of
              solutions that have helped our clients achieve their business
              goals. Explore our projects to learn more about our capabilities
              and the value we can bring to your business.
            </div>
          </Fade>
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
      <Footermobile />
    </>
  );
}
