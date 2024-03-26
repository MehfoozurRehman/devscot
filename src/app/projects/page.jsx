"use client";
import "@/styles/projectpage.scss";
import { ArrowRight } from "react-feather";
import Footermobile from "@/components/Footermobile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fade } from "react-reveal";

const Data = [
  {
    delay: 100,
    img: "/project1img.png",
    link: "/meetworth",
    title: "Meet Worth",
    info: "Business investor finder app: Streamlining connections between entrepreneurs and investors for efficient funding opportunities.",
  },
  {
    delay: 200,
    link: "/mark",
    img: "/project2img.png",
    title: "Mark",
    info: "Banking app: Securely manage finances, transfer funds, pay bills, and access banking services conveniently from your mobile device.",
  },
  {
    delay: 300,
    link: "/unitedmeal",
    img: "/project3img.png",
    title: "United Meal",
    info: "Food app: Discover, order, and enjoy a diverse range of cuisines from local restaurants, with options for delivery, pickup, and reservations.",
  },
  {
    delay: 400,
    link: "/sakenemaar",
    img: "/project4img.png",
    title: "Saken Emaar",
    info: "Real estate  Search, buy, sell, or rent properties, access market insights, and connect with agents for seamless property transactions.",
  },
  {
    delay: 500,
    link: "/muslimbiz",
    img: "/project5img.png",
    title: "Muslim Biz",
    info: "Hiring labor web platform: Facilitating the recruitment process, connecting employers with skilled workers, and streamlining labor management for various industries.",
  },
  {
    delay: 600,
    img: "/project1img.png",
    link: "/meetworth",
    title: "Meet Worth",
    info: "Business investor finder app: Streamlining connections between entrepreneurs and investors for efficient funding opportunities.",
  },
  {
    delay: 700,
    link: "/mark",
    img: "/project2img.png",
    title: "Mark",
    info: "Banking app: Securely manage finances, transfer funds, pay bills, and access banking services conveniently from your mobile device.",
  },
  {
    delay: 800,
    link: "/unitedmeal",
    img: "/project3img.png",
    title: "United Meal",
    info: "Food app: Discover, order, and enjoy a diverse range of cuisines from local restaurants, with options for delivery, pickup, and reservations.",
  },
  {
    delay: 900,
    link: "/sakenemaar",
    img: "/project4img.png",
    title: "Saken Emaar",
    info: "Real estate  Search, buy, sell, or rent properties, access market insights, and connect with agents for seamless property transactions.",
  },
  {
    delay: 1000,
    link: "/muslimbiz",
    img: "/project5img.png",
    title: "Muslim Biz",
    info: "Hiring labor web platform: Facilitating the recruitment process, connecting employers with skilled workers, and streamlining labor management for various industries.",
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
      </div>{" "}
      <Footer />
      <Footermobile />
    </>
  );
}
