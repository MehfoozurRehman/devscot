"use client";

import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";

import Link from "next/link";
import MagnetButton from "@/components/MagnetButton";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <div className="Footermobile">
      <div className="Footertopimg">
        <img src="/footer.webp" alt="herobackgroundimg" />
      </div>
      <div className="Footer">
        <div className="Footer__content">
          <div className="Footer__content__left">
            <Fade up delay={100}>
              {" "}
              <div className="Footer__content__left__logo">
                <img src="/headerlogo.webp" alt="logo" />
              </div>
            </Fade>
            <Fade up delay={100}>
              {" "}
              <div className="Footer__content__left__info">
                When do they work well, and when do they on us and finally, when
                do we actually need how can we avoid them.
              </div>
            </Fade>
            <div className="Footer__content__left__social">
              <Fade up delay={100}>
                {" "}
                <Facebook />
              </Fade>{" "}
              <Fade up delay={300}>
                {" "}
                <Twitter />
              </Fade>{" "}
              <Fade up delay={500}>
                {" "}
                <Instagram />
              </Fade>{" "}
              <Fade up delay={700}>
                {" "}
                <Linkedin />{" "}
              </Fade>
            </div>
          </div>
          <div className="Footer__content__right">
            <Fade up delay={100}>
              {" "}
              <div className="Footer__content__mid__heading">Information</div>
            </Fade>{" "}
            <div className="Footer__content__right__links">
              <Fade up delay={300}>
                {" "}
                <Link className="Footer__content__right__link" href="#">
                  About Company
                </Link>
              </Fade>{" "}
              <Fade up delay={400}>
                {" "}
                <Link className="Footer__content__right__link" href="#">
                  Case Study
                </Link>
              </Fade>{" "}
              <Fade up delay={600}>
                {" "}
                <Link className="Footer__content__right__link" href="#">
                  Career
                </Link>
              </Fade>{" "}
              <Fade up delay={800}>
                {" "}
                <Link className="Footer__content__right__link" href="#">
                  Blog
                </Link>
              </Fade>{" "}
              <Fade up delay={1000}>
                {" "}
                <Link className="Footer__content__right__link" href="#">
                  Contact
                </Link>{" "}
              </Fade>
            </div>
          </div>
          <div className="Footer__content__right">
            <Fade up delay={100}>
              {" "}
              <div className="Footer__content__mid__heading">Contact Us</div>
            </Fade>{" "}
            <Fade up delay={300}>
              {" "}
              <div className="Footer__content__right__info">
                Valentin, Street Road 24, New York, USA - 67452
              </div>{" "}
            </Fade>
            <Fade up delay={500}>
              {" "}
              <Link href="#" className="Footer__content__right__info">
                +1 123 456 7890
              </Link>
            </Fade>{" "}
            <Fade up delay={800}>
              {" "}
              <Link href="#" className="Footer__content__right__link">
                info@Devscot.com
              </Link>
            </Fade>
          </div>
          <div className="Footer__content__right__card">
            <div className="Footer__content__right__card__content">
              <Fade up delay={100}>
                {" "}
                <div className="Footer__content__right__card__content__heading">
                  Have a project in your mind?
                </div>
              </Fade>
              <Fade up delay={300}>
                {" "}
                <MagnetButton>Let's Talk</MagnetButton>
              </Fade>
              <Fade up delay={500}>
                {" "}
                <div className="Footer__content__right__card__content__time">
                  09 : 00 AM - 10 : 30 PM
                </div>
              </Fade>{" "}
              <Fade up delay={700}>
                {" "}
                <div className="Footer__content__right__card__content__days">
                  Saturday - Thursday
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="Footer__bottom">
          <div className="Footer__bottom__content">
            <Fade up delay={100}>
              {" "}
              <div className="Footer__bottom__content__info">
                © 2021 Devscot. All Rights Reserved
              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="Footer__bottom__content__input__content">
                <input
                  className="Footer__bottom__content__input"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <div className="Footer__bottom__content__input__content__submit">
                  <Send />
                </div>
              </div>
            </Fade>
          </div>
          <div className="Footer__bottom__content__right" />
        </div>
      </div>
    </div>
  );
}
