"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3 slides

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow =
        window.innerWidth < 430
          ? 1
          : window.innerWidth < 505
          ? 1.1
          : window.innerWidth < 580
          ? 1.5
          : window.innerWidth < 650
          ? 1.8
          : window.innerWidth < 700
          ? 2
          : window.innerWidth < 800
          ? 2.2
          : window.innerWidth < 900
          ? 2.5
          : window.innerWidth < 1000
          ? 2
          : 2.5;
      setSlidesToShow(newSlidesToShow);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Our__testimonial__container__main">
      <div className="Our__testimonial__container">
        <div className="Our__testimonial__container__left__side">
          {/* <div className="Our__testimonial__container__left__side__content">
            Our <br /> testimonial
          </div>
          <div className="Our__testimonial__container__left__side__sub__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit, sed do eiusmod tempor incididunt ut labore et
            <br /> dolore magna aliqua.
          </div> */}
        </div>

        <div className="our__testimonial__container__right__side">
          <Swiper
            spaceBetween={10}
            slidesPerView={slidesToShow}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial__container">
                <div className="testimonial__svg">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1951 1.06702L10.2484 4.57599C10.2557 5.0521 9.8276 5.44434 9.29256 5.45248C7.38335 5.48153 6.3712 7.23865 6.27935 10.6782L9.37136 10.6312C9.90633 10.6231 10.3462 11.0026 10.3535 11.4782L10.4662 18.8875C10.4735 19.3635 10.0454 19.7557 9.51033 19.7639L1.26664 19.8893C0.731734 19.8974 0.291694 19.518 0.284458 19.0425L0.171711 11.6331C0.14664 9.98543 0.31067 8.47061 0.657521 7.1297C1.01389 5.75507 1.57468 4.54949 2.32394 3.54611C3.09452 2.51498 4.06653 1.70025 5.21125 1.12574C6.36466 0.547541 7.711 0.242513 9.21334 0.219653C9.74791 0.211881 10.1878 0.591264 10.1951 1.06702ZM22.7587 5.24787C23.2937 5.23973 23.7217 4.8472 23.7144 4.37174L23.661 0.862053C23.6538 0.386358 23.2141 0.00726945 22.6791 0.0154099C21.1775 0.0382593 19.8305 0.34336 18.6778 0.921489C17.5325 1.49595 16.5606 2.31001 15.7901 3.34186C15.0404 4.34525 14.4797 5.55089 14.1233 6.92618C13.7763 8.2671 13.6126 9.78197 13.6377 11.4289L13.7504 18.8383C13.7577 19.3142 14.1978 19.6932 14.7325 19.6851L22.9765 19.5597C23.5115 19.5515 23.9394 19.1589 23.9322 18.6834L23.8195 11.2739C23.8122 10.7981 23.3725 10.4188 22.8375 10.4269L19.789 10.4733C19.879 7.03347 20.8762 5.27651 22.7587 5.24787Z"
                      fill="#139948"
                    />
                  </svg>
                </div>
                <div className="testimonial__container__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus autem officia incidunt consequatur illo aspernatur
                  reprehenderit illum! Enim cumque, eligendi cupiditate
                  molestiae facere quisquam neque exercitationem, alias, officia
                  voluptatibus accusantium!
                </div>
                <div className="testimonial__review__container">
                  <div className="testimonial__review__img">
                    <img
                      src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="testimonial__review__name">
                    <div className="testimonial__review__name__user">
                      Hammad Habib
                    </div>
                    <div className="testimonial__review__stars">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="em"
                        width="1em"
                      >
                        <path
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7
   36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 
   439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 
   8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                      >
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
