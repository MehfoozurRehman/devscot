"use client";

import { Edit2, Menu, X } from "react-feather";
import { useCallback, useEffect, useState } from "react";

import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { delayAnimationsFor } from "@/app/Loader";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function changeNavState() {
    if (window.innerWidth < 1060) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const navLinkClass = useCallback(
    (path) => {
      if (pathname.split("/")[1] === path.replace("/", "")) {
        return "header__content__nav__link active";
      } else {
        return "header__content__nav__link";
      }
    },
    [pathname],
  );

  useEffect(() => {
    if (pathname === "/about") {
      document.querySelector(".header").style.backgroundColor = "#000";
    } else if (pathname === "/services") {
      document.querySelector(".header").style.backgroundColor = "#000";
    } else if (pathname.includes("/services")) {
      document.querySelector(".header").style.backgroundColor = "#000";
    } else if (pathname === "/projects") {
      document.querySelector(".header").style.backgroundColor = "#000";
    } else {
      document.querySelector(".header").style.backgroundColor = "transparent";
    }
  }, [pathname]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (window.innerWidth < 1060) setIsOpen(false);
      }}
    >
      <div
        className={"header" + (isScrolled ? " header__scrolled" : "")}
        style={
          isOpen && window.innerWidth < 1060
            ? { backgroundColor: "#fffff" }
            : null
        }
      >
        <div className="header__content">
          <Link href="/" className="header__content__logo">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: delayAnimationsFor }}
              src="/headerlogo.webp"
              alt="logo"
            />
          </Link>
          <motion.div
            initial={{ y: "-150%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ duration: .5, delay: delayAnimationsFor }}
            className="header__content__nav"
          >
            <Link
              href="/"
              className={navLinkClass("/")}
              onClick={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={navLinkClass("/services")}
              onClick={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={navLinkClass("/projects")}
              onClick={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={navLinkClass("/about")}
              onClick={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
              className="header__content__cta__button__outside"
            >
              Lets Talk
            </Link>
          </motion.div>
          <div className="header__content__cta">
            <button
              className="header__content__menu"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              title={isOpen ? "Close" : "Open"}
            >
              {isOpen ? (
                <X size={20} color="currentColor" />
              ) : (
                <Menu size={20} color="currentColor" />
              )}
            </button>
            <Link
              href="/contact"
              title="Lets Talk"
              className="header__content__cta__button"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delayAnimationsFor }}
              >
                Lets Talk
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: delayAnimationsFor }}
                className="header__content__cta__button__icon"
              >
                <Edit2 size={20} color="currentColor" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
