"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

const entries = [
  {
    delay: 100,
    img: "/project1img.webp",
    link: "projects/meetworth",
    title: "Meet Worth",
    info: "Connecting entrepreneurs with potential investors to bring their business ideas to life.",
  },
  {
    delay: 200,
    link: "projects/mark",
    img: "/project2img.webp",
    title: "Mark",
    info: "Simplifying banking with secure management, fund transfers, bill payments, and convenient access to services.",
  },
  {
    delay: 300,
    link: "projects/unitedmeal",
    img: "/project3img.webp",
    title: "United Meal",
    info: "Exploring culinary delights from local eateries with seamless ordering, delivery, and reservation options.",
  },
  {
    delay: 400,
    link: "projects/sakenemaar",
    img: "/project4img.webp",
    title: "Saken Emaar",
    info: "Navigating the real estate market with tools for property search, transactions, and agent connections.",
  },
  {
    delay: 500,
    link: "projects/muslimbiz",
    img: "/project5img.webp",
    title: "Muslim Biz",
    info: "Bridging employers and skilled workers for efficient labor recruitment and management across industries.",
  },
  {
    delay: 600,
    link: "projects/walking",
    img: "/walkingbanner.webp",
    title: "Walking App",
    info: "Discover scenic routes and track your walks with ease, promoting a healthier lifestyle.",
  },
  {
    delay: 700,
    link: "projects/daltaswap",
    img: "/daltabanner.webp",
    title: "Dalta Swap ",
    info: "Trading cryptocurrencies securely and efficiently, empowering users with a seamless exchange experience.",
  },
  {
    delay: 800,
    link: "projects/burns",
    img: "/burnsbanner.webp",
    title: "Burns ",
    info: "Providing personalized workout plans and fitness tracking tools to help users achieve their health goals.",
  },
  {
    delay: 900,
    link: "projects/healthvital",
    img: "/healthbanner.webp",
    title: "Health Vital ",
    info: "Monitoring health metrics and providing insights for a holistic approach to wellness management.",
  },
  {
    delay: 1000,
    link: "projects/weekly",
    img: "/weeklybanner.webp",
    title: "Weekly ",
    info: "Managing schedules and tasks efficiently to enhance productivity and time management.",
  },
];

export default function FeatureSectionCard() {
  return entries.map((data) => (
    <Link href={data.link}>
      <div className="FeatureSection__content__right__content">
        <motion.img
          src={data.img}
          className="FeatureSection__content__right__img"
          initial={{ scale: 1.5, y: -100 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 1, type: "tween" }}
        />
        <motion.div
          initial={{ x: 100, scale: 0.9 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="FeatureSection__content__right__content__card"
        >
          <div className="FeatureSection__content__right__content__card__heading">
            {data.title}
            <div className="FeatureSection__content__right__content__card__arrow">
              <ArrowUpRight />
            </div>
          </div>
          <div className="FeatureSection__content__right__content__card__info">
            {data.info}
          </div>
        </motion.div>
      </div>
    </Link>
  ));
}
