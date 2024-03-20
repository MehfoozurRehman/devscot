import React from "react";
import "@/styles/serivces.scss";
import ServicesHowWeDoIt from "@/components/ServicesHowWeDoIt";
import HowWorkSection from "@/components/HowWorkSection";
export default function page() {
  return (
    <>
      <div className="Services__deatils">
        <div className="Services__deatils__all__content">
          <div className="Services__deatils__content">
            <div className="Services__deatils__content__left">
              <div className="Services__deatils__content__left__conent">
                <div className="Services__deatils__content__left__conent__heading">
                  Web and mobile development
                </div>
              </div>
            </div>
            <div className="Services__deatils__content__right">
              <div className="Services__deatils__content__right__content">
                <div className="Services__deatils__content__right__content__info">
                  Every decision we make needs to answer the million-dollar
                  question: how will this benefit our partner’s goal best? We
                  work to develop solutions
                </div>
                <div className="Services__deatils__content__right__content__info">
                  Every decision we make needs to answer the million-dollar
                  question: how will this benefit our partner’s goal best? We
                  work to develop solutions
                </div>
              </div>
              <div className="Services__deatils__content__right__contentbottom">
                <div className="Services__deatils__content__right__contentbottom__content">
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + API Development
                  </div>
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + Cloud Migration
                  </div>
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + JavaScript
                  </div>{" "}
                </div>
                <div className="Services__deatils__content__right__contentbottom__content">
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + WordPress
                  </div>
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + Front End Development
                  </div>
                  <div className="Services__deatils__content__right__contentbottom__points">
                    + Fluter Framework
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="Services__deatils__content__right__contentbottom__imgs">
            <img
              className="Services__deatils__content__right__contentbottom__imgs__img"
              src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/dev-1.jpg"
              alt=""
            />
            <img
              className="Services__deatils__content__right__contentbottom__imgs__img__two"
              src="https://wealcoder.com/dev/html/axtra/assets/imgs/thumb/dev-2.jpg"
              alt=""
            />
          </div>{" "}
        </div>
      </div>
      <HowWorkSection />
      <ServicesHowWeDoIt />
    </>
  );
}
