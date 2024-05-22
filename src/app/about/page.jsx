"use client";

import Fade from "@/components/Fade";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";
import splitText from "@/utils/splitText";
import { stats } from "@/db/stats";
export const metadata = {
  title: "Aboutus-Devscot | Software Design & Development Company ",
  description: "A software Companies specializing in innovative web and mobile applications. ",
  keywords: "Devscot | Software Design & Development Company , software house, web development, app development, devscot, devscotsolution , best software houses in faisalabad , software development, custom software solutions, mobile app development, web development services, software consulting, enterprise software, cloud solutions, DevOps services, IT outsourcing, software maintenance, software testing, agile development, digital transformation, SaaS development, UX/UI design, software integration, backend development, frontend development, software security, blockchain development, AI and machine learning, big data analytics, IoT solutions, e-commerce development, ERP solutions, CRM development, startup software development, MVP development, software prototyping, IT consulting, technology stack, full-stack development, software project management, cross-platform development, API development, software scalability, cloud migration, microservices architecture, continuous integration, software architecture design, quality assurance, software reengineering, digital product development, fintech software development, healthcare software solutions, education software development, custom app development, software support services, software performance optimization, innovative software solutions",
  image: "/devscotlogo-black.png",
  url: "https://www.devscot.com/About",
  type: "website",

// Additional metadata
author: "Devscot",
language: "en",
locale: "en_US",
site_name: "Devscot",
twitter: {
  card: "summary_large_image",
  site: "@devscot",
  title: "Devscot | Software Design & Development Company",
  description: "A software Companies specializing in innovative web and mobile applications.",
  image: "/devscotlogo-black.png",
},
og: {
  title: "Devscot | Software Design & Development Company",
  description: "A software Companies specializing in innovative web and mobile applications.",
  type: "website",
  url: "https://www.devscot.com/About",
  image: "/devscotlogo-black.png",
  locale: "en_US",
  site_name: "Devscot",
},
robots: "index, follow",
canonical: "https://www.devscot.com/About",
theme_color: "#ffffff",
apple_mobile_web_app_status_bar_style: "black-translucent",

////2nd// Additional metadata
email: "info@devscot.com",
  phone_number: "+92 335 6226026",
  address: "123 Main Street, Lahore, Pakistan",
  business_hours: "Mon-Fri: 9:00 AM - 5:00 PM",
  contact_point: {
    "@type": "ContactPoint",
    telephone: "+92 335 6226026",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu", "Spanish" , "English" , "French" , "German" , "Italian" ]
  },
  geo_location: {
    "@type": "GeoCoordinates",
    latitude: "31.5204",
    longitude: "74.3587"
  },
  opening_hours: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"

    ],
    opens: "09:00",
    closes: "17:00"
  },
  social_media: {
    facebook: "https://www.facebook.com/devscot.solutions/",
    instagram: "https://www.instagram.com/devscot.solutions/"
  },

};
export default function About() {
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
            <Fade up delay={100}>
              <div className="Aboutuspage__logos__content__subheading">
                {splitText("Internation Brands")}
              </div>
            </Fade>
            <Fade up delay={100}>
              <div className="Aboutuspage__logos__content__heading">
                {splitText("We are happy to work with global largest brands")}
              </div>
            </Fade>
            <div className="Aboutuspage__logos__content__logos">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
