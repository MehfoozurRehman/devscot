"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeatureSectionCard() {
  const Data = [
    {
      img: "/project1img.png",
      link: "/projects/meetworth",
      heading: "Meet Worth",
      info: "Business investor finder app: Streamlining connections between entrepreneurs and investors for efficient funding opportunities.",
    },
    {
      link: "/projects/mark",
      img: "/project2img.png",
      heading: "Mark",
      info: "Banking app: Securely manage finances, transfer funds, pay bills, and access banking services conveniently from your mobile device.",
    },
    {
      link: "/projects/unitedmeal",
      img: "/project3img.png",
      heading: "United Meal",
      info: "Food app: Discover, order, and enjoy a diverse range of cuisines from local restaurants, with options for delivery, pickup, and reservations.",
    },
    {
      link: "/projects/sakenemaar",
      img: "/project4img.png",
      heading: "Saken Emaar",
      info: "Real estate  Search, buy, sell, or rent properties, access market insights, and connect with agents for seamless property transactions.",
    },
    {
      link: "/projects/muslimbiz",
      img: "/project5img.png",
      heading: "Muslim Biz",
      info: "Hiring labor web platform: Facilitating the recruitment process, connecting employers with skilled workers, and streamlining labor management for various industries.",
    },
  ];
  return Data.map((data) => (
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
            {data.heading}
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
