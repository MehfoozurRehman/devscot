"use client";

import "@/styles/contact.scss";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";
import MagnetButton from "@/components/MagnetButton";
import { delayAnimationsFor } from "../Loader";
import { motion } from "framer-motion";
import { solutions } from "@/db/solutions";
import splitText from "@/utils/splitText";
export const metadata = {
  title: "Contactus-Devscot | Software Design & Development Company ",
  description: "A software Companies specializing in innovative web and mobile applications. ",
  keywords: "Devscot | Software Design & Development Company , software house, web development, app development, devscot, devscotsolution , best software houses in faisalabad , software development, custom software solutions, mobile app development, web development services, software consulting, enterprise software, cloud solutions, DevOps services, IT outsourcing, software maintenance, software testing, agile development, digital transformation, SaaS development, UX/UI design, software integration, backend development, frontend development, software security, blockchain development, AI and machine learning, big data analytics, IoT solutions, e-commerce development, ERP solutions, CRM development, startup software development, MVP development, software prototyping, IT consulting, technology stack, full-stack development, software project management, cross-platform development, API development, software scalability, cloud migration, microservices architecture, continuous integration, software architecture design, quality assurance, software reengineering, digital product development, fintech software development, healthcare software solutions, education software development, custom app development, software support services, software performance optimization, innovative software solutions",
  image: "/devscotlogo-black.png",
  url: "https://www.devscot.com/Contact",
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
  url: "https://www.devscot.com/Contact",
  image: "/devscotlogo-black.png",
  locale: "en_US",
  site_name: "Devscot",
},
robots: "index, follow",
canonical: "https://www.devscot.com/Contact",
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
const budgets = ["10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k-60k"];

export default function Contact({ searchParams }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [idea, setIdea] = useState(searchParams.service || "");

  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [budget, setBudget] = useState("");
  const [explain, setExplain] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      idea,
      name,
      from,
      budget,
      explain,
      email,
    });
  };

  return (
    <>
      <Header />
      <div className="formpage">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delayAnimationsFor,
          }}
          className="formpage__content"
        >
          <div className="formpage__content__heading">
            {splitText("Hello, Devscot. team!")}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">{splitText("My name is")}</label>
                <input
                  type="text"
                  placeholder="Your Name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formpage__content__form__name">
                <label htmlFor="from">{splitText("from")}</label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Website Or Company Name?"
                />
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">{splitText("I’d like to discuss")}</label>
                <div className="formpage__content__form__name__button">
                  <div className="formpage__content__form__name__button__content">
                    {solutions.map((item, index) => (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1 + delayAnimationsFor,
                          duration: 1.5,
                        }}
                        key={index}
                        type="button"
                        onClick={() => setIdea(item.id)}
                        className={item.id === idea ? "active" : ""}
                      >
                        {item.id}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <label htmlFor="name">
                  {splitText("project idea & design brief.")}
                </label>
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <textarea
                  className="formpage__content__form__name__speacialinput"
                  type="project"
                  value={explain}
                  onChange={(e) => setExplain(e.target.value)}
                  placeholder="Project Idea"
                />
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">
                  {splitText("A budget for this project is")}
                </label>
                <div className="formpage__content__form__name__button">
                  <div className="formpage__content__form__name__button__content">
                    {budgets.map((item, index) => (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1 + delayAnimationsFor,
                          duration: 1.5,
                        }}
                        key={index}
                        type="button"
                        onClick={() => setBudget(item)}
                        className={item === budget ? "active" : ""}
                      >
                        {item}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">{splitText("Contact me back at")}</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delayAnimationsFor }}
              className="formpage__content__form__submitbutton"
            >
              <MagnetButton>Submit</MagnetButton>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <Footer />
      <Footermobile />
    </>
  );
}
