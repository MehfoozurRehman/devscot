"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeatureSectionCard() {
  return (
    <Link href="/">
      <div className="FeatureSection__content__right__content">
        <motion.img
          src="/FeatureSectionimg.png"
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
            Project Name
            <div className="FeatureSection__content__right__content__card__arrow">
              <ArrowUpRight />
            </div>
          </div>
          <div className="FeatureSection__content__right__content__card__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
