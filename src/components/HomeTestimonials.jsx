"use client";

import { useEffect, useState } from "react";

import Fade from "@/components/Fade";

const testimonials = [
  {
    id: 0,
    name: "Alice Johnson",
    designation: "CEO, Tech Innovators",
    message:
      "Our collaboration with your software house has been exceptional. The mobile app you developed for us exceeded our expectations in terms of functionality and user experience.",
  },
  {
    id: 1,
    name: "David Lee",
    designation: "CTO, Digital Solutions",
    message:
      "Your team's expertise in web development is commendable. The website you built for us is not only visually appealing but also highly responsive.",
  },
  {
    id: 2,
    name: "Emily Chen",
    designation: "Product Manager, CloudTech",
    message:
      "The attention to detail and seamless integration of features in the mobile app impressed us. Your software house truly understands user needs.",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    designation: "Founder & CEO, StartupX",
    message:
      "We appreciate your commitment to quality. The web application you delivered was robust, secure, and scalable.",
  },
  {
    id: 4,
    name: "Sophia Patel",
    designation: "User Experience Designer, Creative Labs",
    message:
      "Working with your team was a pleasure. The intuitive interfaces you crafted for our mobile app greatly enhanced user engagement.",
  },
  {
    id: 5,
    name: "Daniel Kim",
    designation: "Marketing Director, GrowthHub",
    message:
      "Your software house's ability to meet deadlines and adapt to changing requirements is impressive. The web portal you developed streamlined our operations.",
  },
  {
    id: 6,
    name: "Linda Brown",
    designation: "Quality Assurance Lead, QualityTech",
    message:
      "Thorough testing and bug-free deliverables—your software house consistently delivers reliable solutions.",
  },
];

export default function HomeTestimonials() {
  const [Checkimg, setCheckimg] = useState(0);
  const selectedEntry = testimonials.find((item) => item.id === Checkimg);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = testimonials.findIndex((item) => item.id === Checkimg);
      const Newnumber = nextIndex + 1;

      if (Newnumber < testimonials.length) {
        setCheckimg(testimonials[Newnumber].id);
      } else {
        setCheckimg(testimonials[0].id);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [Checkimg, testimonials]);

  return (
    <div className="home__testmonials">
      <Fade up delay={100}>
        <Fade up delay={100}>
          <div distance="30%">
            <div className="home__testmonials__heading heading">
              Learn why 50+ customers
            </div>
          </div>
        </Fade>
      </Fade>
      <Fade up delay={100}>
        <Fade up delay={100}>
          <div distance="30%">
            <div className="home__testmonials__info">
              We have a proven track record of delivering exceptional results
              for our clients. Here's what they have to say about us.
            </div>
          </div>
        </Fade>
      </Fade>
      <div className="home__testmonials__content">
        <div className="home__testmonials__content__users">
          <div className="home__testmonials__content__users__entry">
            {testimonials.map((item, index) => (
              <div
                distance="30%"
                key={index}
                className={`home__testmonials__content__users__entry__img__container ${
                  Checkimg === item.id
                    ? "home__testmonials__content__users__entry__img__container__active"
                    : ""
                }`}
              >
                <img
                  onClick={() => setCheckimg(item.id)}
                  src="data:image/png;base64,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"
                  alt="user"
                  width={100}
                  height={100}
                  className="home__testmonials__content__users__entry__img "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="home__testmonials__content__details">
          <Fade up delay={100}>
            <div distance="30%">
              <div className="home__testmonials__content__details__info">
                {selectedEntry?.message}
              </div>
            </div>
          </Fade>
          <Fade up delay={100}>
            <div distance="30%">
              <div className="home__testmonials__content__details__heading">
                {selectedEntry?.name}
              </div>
            </div>
          </Fade>
          <Fade up delay={100}>
            <div distance="30%">
              <div className="home__testmonials__content__details__sub__heading">
                {selectedEntry?.designation}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
