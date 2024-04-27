"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";

export default function FeatureSectionCard() {
  const Data = [
    {
      delay: 100,
      img: "/project1img.webp",
      link: "projects/meetworth",
      title: "Meet Worth",
      info: "Business investor finder app: Streamlining connections between entrepreneurs and investors for efficient funding opportunities.",
    },
    {
      delay: 200,
      link: "projects/mark",
      img: "/project2img.webp",
      title: "Mark",
      info: "Banking app: Securely manage finances, transfer funds, pay bills, and access banking services conveniently from your mobile device.",
    },
    {
      delay: 300,
      link: "projects/unitedmeal",
      img: "/project3img.webp",
      title: "United Meal",
      info: "Food app: Discover, order, and enjoy a diverse range of cuisines from local restaurants, with options for delivery, pickup, and reservations.",
    },
    {
      delay: 400,
      link: "projects/sakenemaar",
      img: "/project4img.webp",
      title: "Saken Emaar",
      info: "Real estate  Search, buy, sell, or rent properties, access market insights, and connect with agents for seamless property transactions.",
    },
    {
      delay: 500,
      link: "projects/muslimbiz",
      img: "/project5img.webp",
      title: "Muslim Biz",
      info: "Hiring labor web platform: Facilitating the recruitment process, connecting employers with skilled workers, and streamlining labor management for various industries.",
    },
    {
      delay: 600,
      link: "projects/walking",
      img: "/walkingbanner.webp",
      title: "Walking App",
      info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    },
    {
      delay: 700,
      link: "projects/daltaswap",
      img: "/daltabanner.webp",
      title: "Dalta Swap ",
      info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    },
    {
      delay: 800,
      link: "projects/burns",
      img: "/burnsbanner.webp",
      title: "Burns ",
      info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    },
    {
      delay: 900,
      link: "projects/healthvital",
      img: "/healthbanner.webp",
      title: "Health Vital ",
      info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    },
    {
      delay: 1000,
      link: "projects/weekly",
      img: "/weeklybanner.webp",
      title: "Weekly ",
      info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
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
          transition={{ duration: 1, type: "tween", delay: delayAnimationsFor }}
        />
        <motion.div
          initial={{ x: 100, scale: 0.9 }}
          whileInView={{ x: 0, scale: 1 }}
          transition={{ duration: 1, delay: delayAnimationsFor }}
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
