"use client";

import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";

import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

export default function Footer() {
  return (
    <ParallaxProvider>
      <FooterContent />
    </ParallaxProvider>
  );
}

function FooterContent() {
  const imageParallax = useParallax({
    speed: 50,
  });
  const footerParallax = useParallax({
    speed: 100,
  });

  return (
    <div>
      <div className="Footertopimg" ref={imageParallax.ref}>
        <img src="/footer.jpg" alt="herobackgroundimg" />
      </div>
      <div className="Footer" ref={footerParallax.ref}>
        <div className="Footer__content">
          <div className="Footer__content__left">
            <div className="Footer__content__left__logo">
              <img src="/headerlogo.png" alt="logo" />
            </div>
            <div className="Footer__content__left__info">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </div>
            <div className="Footer__content__left__social">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
          <div className="Footer__content__right">
            <div className="Footer__content__mid__heading">Information</div>
            <div className="Footer__content__right__links">
              <Link className="Footer__content__right__link" href="#">
                About Company
              </Link>
              <Link className="Footer__content__right__link" href="#">
                Case Study
              </Link>
              <Link className="Footer__content__right__link" href="#">
                Career
              </Link>
              <Link className="Footer__content__right__link" href="#">
                Blog
              </Link>
              <Link className="Footer__content__right__link" href="#">
                Contact
              </Link>
            </div>
          </div>
          <div className="Footer__content__right">
            <div className="Footer__content__mid__heading">Contact Us</div>
            <div className="Footer__content__right__info">
              Valentin, Street Road 24, New York, USA - 67452
            </div>
            <Link href="#" className="Footer__content__right__info">
              +1 123 456 7890
            </Link>
            <Link href="#" className="Footer__content__right__link">
              info@Devscot.com
            </Link>
          </div>
          <div className="Footer__content__right__card">
            <div className="Footer__content__right__card__content">
              <div className="Footer__content__right__card__content__heading">
                Have a project in your mind?
              </div>
              <button className="Footer__content__right__card__content__button">
                Contact Us
              </button>
              <div className="Footer__content__right__card__content__time">
                09 : 00 AM - 10 : 30 PM
              </div>
              <div className="Footer__content__right__card__content__days">
                Saturday - Thursday
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__bottom">
          <div className="Footer__bottom__content">
            <div className="Footer__bottom__content__info">
              © 2021 Devscot. All Rights Reserved
            </div>
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
          </div>
          <div className="Footer__bottom__content__right"></div>
        </div>
      </div>
    </div>
  );
}
