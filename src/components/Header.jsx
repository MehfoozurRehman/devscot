import React, { useEffect, useState } from "react";
import headerlogo from "../assets/headerlogo.png";
import ClickAwayListener from "react-click-away-listener";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";

export default function Header() {
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
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1000
          ? { backgroundColor: "#fffff" }
          : null
      }
    >
      <div className="header__content">
        <NavLink to="/" className="header__content__logo">
          <img src={headerlogo} alt="logo" />
        </NavLink>

        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Services
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__cta__button"
              >
                Lets Talk
              </NavLink>
            </div>
          </ClickAwayListener>
        ) : null}

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

          <NavLink
            to="/"
            title="Lets Talk"
            className="header__content__cta__button"
          >
            Lets Talk
          </NavLink>
        </div>
      </div>
    </div>
  );
}
