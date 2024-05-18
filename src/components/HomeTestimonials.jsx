"use client";

import { useEffect, useState } from "react";

import Fade from "@/components/Fade";

const testimonials = [
  { 
    img :"https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 0,
    name: "Alice Johnson",
    designation: "CEO, Tech Innovators",
    message:
      "Our collaboration with your software house has been exceptional. The mobile app you developed for us exceeded our expectations in terms of functionality and user experience.",
  },
  {
    img : "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
    name: "David Lee",
    designation: "CTO, Digital Solutions",
    message:
      "Your team's expertise in web development is commendable. The website you built for us is not only visually appealing but also highly responsive.",
  },
  {
    img : "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 2,
    name: "Emily Chen",
    designation: "Product Manager, CloudTech",
    message:
      "The attention to detail and seamless integration of features in the mobile app impressed us. Your software house truly understands user needs.",
  },
  { img :"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 3,
    name: "Michael Rodriguez",
    designation: "Founder & CEO, StartupX",
    message:
      "We appreciate your commitment to quality. The web application you delivered was robust, secure, and scalable.",
  },
  {    img : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 4,
    name: "Sophia Patel",
    designation: "User Experience Designer, Creative Labs",
    message:
      "Working with your team was a pleasure. The intuitive interfaces you crafted for our mobile app greatly enhanced user engagement.",
  },
  {    img : "https://images.unsplash.com/photo-1618535263244-0185e50e667e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 5,
    name: "Daniel Kim",
    designation: "Marketing Director, GrowthHub",
    message:
      "Your software house's ability to meet deadlines and adapt to changing requirements is impressive. The web portal you developed streamlined our operations.",
  },
  { img :"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Learn why 50 + customers
            </div>
          </div>
        </Fade>
      </Fade>
      <Fade up delay={100}>
        <Fade up delay={100}>
          <div distance="30%">
            <div className="home__testmonials__info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              rerum fugit? Quibusdam eaque amet, quam et tempora unde suscipit
              autem nisi dolores sequi repellat ex totam. Eligendi sapiente
              inventore dolor!
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
                  src={
                    item.img 
                  }
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
