"use client";

import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";

import Fade from "@/components/Fade";
import Link from "next/link";
import MagnetButton from "@/components/MagnetButton";
import { ParallaxProvider } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

export default function Footer() {
  return (
    <div className="Footerweb">
      <ParallaxProvider>
        <FooterContent />
      </ParallaxProvider>
    </div>
  );
}

function FooterContent() {
  const imageParallax = useParallax({
    speed: 10,
  });
  const footerParallax = useParallax({
    speed: 60,
  });

  return (
    <div>
      <div className="Footertopimg" ref={imageParallax.ref}>
        <img src="/footer.webp" alt="herobackgroundimg" />
      </div>
      <div className="Footer" ref={footerParallax.ref}>
        <div className="Footer__content">
          <div className="Footer__content__left">
            <Fade up delay={100}>
              <div className="Footer__content__left__logo">
                <img src="/headerlogo.webp" alt="logo" />
              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="Footer__content__left__info">
                When do they work well, and when do they on us and finally, when
                do we actually need how can we avoid them.
              </div>
            </Fade>
            <div className="Footer__content__left__social">
              {/* <Fade up delay={100}>
                <Facebook />
              </Fade>
              <Fade up delay={300}>
                <Twitter />
              </Fade>
              <Fade up delay={500}>
                <Instagram />
              </Fade>
              <Fade up delay={700}>
                <Linkedin />
              </Fade> */}
            </div>
          </div>
          <div className="Footer__content__right">
            <Fade up delay={100}>
              <div className="Footer__content__mid__heading">Quick Links</div>
            </Fade>
            <div className="Footer__content__right__links">
              <Fade up delay={400}>
                <Link className="Footer__content__right__link" href="/services">
                  Services
                </Link>
              </Fade>
              <Fade up delay={600}>
                <Link className="Footer__content__right__link" href="/projects">
                  Portfolio
                </Link>
              </Fade>
              <Fade up delay={800}>
                <Link className="Footer__content__right__link" href="/about">
                  About Us
                </Link>
              </Fade>
              <Fade up delay={1000}>
                <Link className="Footer__content__right__link" href="/contact">
                  Contact
                </Link>
              </Fade>
            </div>
          </div>
          <div className="Footer__content__right">
            <Fade up delay={100}>
              <div className="Footer__content__mid__heading">Contact Us</div>
            </Fade>
            <Fade up delay={300}>
              <div className="Footer__content__right__info">
                Office # 10, street # 8, housing colony # 1, Faisalabad,
                Pakistan
              </div>
            </Fade>
            <Fade up delay={500}>
              <Link
                href={"tel:+923356226026"}
                className="Footer__content__right__info"
              >
                +92 335 6226026
              </Link>
            </Fade>
            <Fade up delay={800}>
              <Link
                href={"mailto:info@devscot.com"}
                className="Footer__content__right__link"
              >
                info@devscot.com
              </Link>
            </Fade>
          </div>
          <div className="Footer__content__right__card">
            <div className="Footer__content__right__card__content">
              <Fade up delay={100}>
                <div className="Footer__content__right__card__content__heading">
                  Have a project in your mind?
                </div>
              </Fade>
              <Fade up delay={300}>
                <MagnetButton>Let's Talk</MagnetButton>
              </Fade>
              <Fade up delay={500}>
                <div className="Footer__content__right__card__content__time">
                  09 : 00 AM - 10 : 30 PM
                </div>
              </Fade>
              <Fade up delay={700}>
                <div className="Footer__content__right__card__content__days">
                  Monday - Saturday
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="Footer__bottom">
          <div className="Footer__bottom__content">
            <Fade up delay={100}>
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
