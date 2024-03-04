"use client";

import { Edit2, Menu, X } from "react-feather";
import { useCallback, useEffect, useState } from "react";

import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  function changeNavState() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", changeNavState);
  }, []);

  const navLinkClass = useCallback(
    (path) => {
      if (pathname.split("/")[1] === path.replace("/", "")) {
        return "header__content__nav__link active";
      } else {
        return "header__content__nav__link";
      }
    },
    [pathname]
  );

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (window.innerWidth < 1000) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="header"
        style={
          isOpen && window.innerWidth < 1000
            ? { backgroundColor: "#fffff" }
            : null
        }
      >
        <div className="header__content">
          <Link href="/" className="header__content__logo">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.1 }}
              src="/headerlogo.png"
              alt="logo"
            />
          </Link>

          <motion.div
            initial={{ y: window.innerWidth > 1000 ? "0%" : "-100%" }}
            animate={{ y: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 1.5, delay: 0.1 }}
            className="header__content__nav"
          >
            <Link
              href="/"
              className={navLinkClass("/")}
              onClick={() => {
                if (window.innerWidth < 1000) {
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
                if (window.innerWidth < 1000) {
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
                if (window.innerWidth < 1000) {
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
                if (window.innerWidth < 1000) {
                  setIsOpen(false);
                }
              }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                if (window.innerWidth < 1000) {
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
              href="/"
              title="Lets Talk"
              className="header__content__cta__button"
            >
              <span>Lets Talk</span>
              <div className="header__content__cta__button__icon">
                <Edit2 size={20} color="currentColor" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}
