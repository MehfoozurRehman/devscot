"use client";

import "@/styles/form.scss";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import splitText from "@/utils/splitText";

const ideas = ["Ui/Ux", "Web", "Branding", "Mobile", "Other"];

const budgets = ["10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k-60k"];

export default function Contact() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [idea, setIdea] = useState("");
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
    <div className="formpage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
                  {ideas.map((item, index) => (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 1.5 }}
                      key={index}
                      type="button"
                      onClick={() => setIdea(item)}
                      className={item === idea ? "active" : ""}
                    >
                      {item}
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
                      transition={{ delay: index * 0.1, duration: 1.5 }}
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
                type="emal"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="formpage__content__form__submitbutton"
          >
            <button>{splitText("Submit")}</button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
