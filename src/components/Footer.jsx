import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";

import Footerlogo from "../assets/headerlogo.png";
import { NavLink } from "react-router-dom";
import herobackgroundimg from "../assets/footer.jpg";
import { useParallax } from "react-scroll-parallax";

export default function Footer() {
  const imageParallax = useParallax({
    speed: 50,
  });
  const footerParallax = useParallax({
    speed: 100,
  });
  return (
    <div>
      <div className="Footertopimg" ref={imageParallax.ref}>
        <img src={herobackgroundimg} alt="herobackgroundimg" />
      </div>
      <div className="Footer" ref={footerParallax.ref}>
        <div className="Footer__content">
          <div className="Footer__content__left">
            <div className="Footer__content__left__logo">
              <img src={Footerlogo} alt="logo" />
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
              <NavLink className="Footer__content__right__link" to="#">
                About Company
              </NavLink>
              <NavLink className="Footer__content__right__link" to="#">
                Case Study
              </NavLink>
              <NavLink className="Footer__content__right__link" to="#">
                Career
              </NavLink>
              <NavLink className="Footer__content__right__link" to="#">
                Blog{" "}
              </NavLink>
              <NavLink className="Footer__content__right__link" to="#">
                Contact{" "}
              </NavLink>
            </div>
          </div>
          <div className="Footer__content__right">
            <div className="Footer__content__mid__heading">Contact Us</div>
            <div className="Footer__content__right__info">
              Valentin, Street Road 24, New York, USA - 67452
            </div>
            <NavLink className="Footer__content__right__info" to="#">
              +1 123 456 7890
            </NavLink>
            <NavLink className="Footer__content__right__link" to="#">
              info@Devscot.com
            </NavLink>
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
