"use client";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: open ? "auto" : 0, opacity: open ? 1 : 0 },
  });

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question}
      </div>
      <animated.div className="faq-answer" style={{ height, opacity }}>
        {answer}
      </animated.div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="faqs">
      <FaqItem
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
      <FaqItem
        question="Why use React?"
        answer="React allows developers to create reusable UI components."
      />
      {/* Add more FAQ items here */}
    </div>
  );
};

export default Faqs;
