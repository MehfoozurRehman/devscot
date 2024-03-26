"use client";

import "@/styles/serivces.scss";
import Footermobile from "@/components/Footermobile";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWorkSection from "@/components/HowWorkSection";
import React from "react";
import ServicesHowWeDoIt from "@/components/ServicesHowWeDoIt";
import { motion } from "framer-motion";
import splitText from "@/utils/splitText";
import { Fade } from "react-reveal";

export default function page() {
  const heading = splitText("Web and mobile development");
  return (
    <>
      <Header />
      <div className="Services__deatils">
        <div className="Services__deatils__all__content">
          <div className="Services__deatils__content">
            <div className="Services__deatils__content__left">
              <div className="Services__deatils__content__left__conent">
                <div className="Services__deatils__content__left__conent__heading">
                  {heading}
                </div>
              </div>
            </div>
            <div className="Services__deatils__content__right">
              <div className="Services__deatils__content__right__content">
                <Fade up delay={100}>
                  {" "}
                  <div className="Services__deatils__content__right__content__info">
                    Every decision we make needs to answer the million-dollar
                    question: how will this benefit our partner’s goal best? We
                    work to develop solutions
                  </div>
                </Fade>{" "}
                <Fade up delay={100}>
                  <div className="Services__deatils__content__right__content__info">
                    Every decision we make needs to answer the million-dollar
                    question: how will this benefit our partner’s goal best? We
                    work to develop solutions
                  </div>
                </Fade>
              </div>
              <div className="Services__deatils__content__right__contentbottom">
                <div className="Services__deatils__content__right__contentbottom__content">
                  <Fade up delay={100}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + API Development
                    </div>
                  </Fade>
                  <Fade up delay={300}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + Cloud Migration
                    </div>
                  </Fade>
                  <Fade up delay={500}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + JavaScript
                    </div>{" "}
                  </Fade>
                </div>
                <div className="Services__deatils__content__right__contentbottom__content">
                  <Fade up delay={100}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + WordPress
                    </div>
                  </Fade>{" "}
                  <Fade up delay={300}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + Front End Development
                    </div>
                  </Fade>{" "}
                  <Fade up delay={500}>
                    {" "}
                    <div className="Services__deatils__content__right__contentbottom__points">
                      + Fluter Framework
                    </div>{" "}
                  </Fade>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="Services__deatils__content__right__contentbottom__imgs">
            <img
              className="Services__deatils__content__right__contentbottom__imgs__img"
              src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/dev-1.png"
              alt=""
            />
            <img
              className="Services__deatils__content__right__contentbottom__imgs__img__two"
              src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/dev-2.png"
              alt=""
            />
          </div>{" "}
        </div>
      </div>
      <HowWorkSection />
      <ServicesHowWeDoIt /> <Footer />
      <Footermobile />
    </>
  );
}
