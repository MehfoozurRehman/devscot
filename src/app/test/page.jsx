"use client";
import React from "react";
import Testimonial from "@/components/Testimonial";
import { useState } from "react";
import { Footer, Header } from "@/components";
const page = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <div className="Frequently__ask__questions__main__container__all">
        <div className="Frequently__ask__questions__main__container">
          <div className="Frequently__ask__questions__sub__container">
            <div className="Frequently__ask__questions__header">
              Frequently asked questions
            </div>
            <div className="Frequently__ask__questions__wrapper">
              <div className="Frequently__ask__questions__accordion">
                {data.map((item, i) => (
                  <div
                    style={{
                      border: selected === item.id ? "3px solid #926FFF" : "",
                      width: "fit-content",
                      padding: "0px",
                      marginBottom: "20px",
                      borderRadius: "10px",
                    }}
                    className="Frequently__ask__questions__item"
                    key={item.id}
                  >
                    <div
                      className="Frequently__ask__questions__title "
                      onClick={() => toggle(item.id)}
                    >
                      <div
                        style={{
                          color: selected === item.id ? "#926FFF" : "",
                        }}
                        className="items__questions"
                      >
                        {item.question}
                      </div>

                      <span>{selected === item.id ? "-" : "+"} </span>
                    </div>
                    <div
                      className={
                        selected === item.id ? "content show " : "content"
                      }
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Service__agency__main__container">
        <div className="Service__agency__sub__container">
          <div className="title__content">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3036 8.69762C12.3036 9.06429 12.6036 9.36429 12.9703 9.36429H14.3036C14.6703 9.36429 14.9703 9.06429 14.9703 8.69762C14.9703 8.33095 14.6703 8.03095 14.3036 8.03095H12.9703C12.6036 8.03095 12.3036 8.33095 12.3036 8.69762Z"
                fill="#7F56D9"
              />
              <path
                d="M11.3636 11.911C11.1436 12.2043 11.2036 12.611 11.497 12.8243C11.8503 13.0843 12.2236 13.3643 12.577 13.631C12.8703 13.851 13.2836 13.791 13.497 13.4976C13.497 13.491 13.5036 13.491 13.5036 13.4843C13.7236 13.191 13.6636 12.7776 13.3703 12.5643C13.017 12.2976 12.6436 12.0176 12.297 11.7576C12.0036 11.5376 11.5903 11.6043 11.3703 11.8976C11.3703 11.9043 11.3636 11.911 11.3636 11.911Z"
                fill="#7F56D9"
              />
              <path
                d="M13.5103 3.90429C13.5103 3.89762 13.5036 3.89762 13.5036 3.89095C13.2836 3.59762 12.8703 3.53762 12.5836 3.75762C12.2303 4.02429 11.8503 4.30429 11.5036 4.57095C11.2103 4.79095 11.157 5.20429 11.377 5.49095C11.377 5.49762 11.3836 5.49762 11.3836 5.50429C11.6036 5.79762 12.0103 5.85762 12.3036 5.63762C12.657 5.37762 13.0303 5.09095 13.3836 4.82429C13.6703 4.61095 13.7236 4.19762 13.5103 3.90429Z"
                fill="#7F56D9"
              />
              <path
                d="M5.63696 6.69762H2.9703C2.23696 6.69762 1.63696 7.29762 1.63696 8.03095V9.36429C1.63696 10.0976 2.23696 10.6976 2.9703 10.6976H3.63696V12.6976C3.63696 13.0643 3.93696 13.3643 4.30363 13.3643C4.6703 13.3643 4.9703 13.0643 4.9703 12.6976V10.6976H5.63696L8.9703 12.6976V4.69762L5.63696 6.69762Z"
                fill="#7F56D9"
              />
              <path
                d="M10.637 8.69762C10.637 7.81095 10.2503 7.01095 9.63696 6.46429V10.9243C10.2503 10.3843 10.637 9.58429 10.637 8.69762Z"
                fill="#7F56D9"
              />
            </svg>
            Our services
          </div>
        </div>
        <div className="Service__agency__trust__container">
          <div className="omega__title__main__title">
            We're a full-service <br />
            <span>
              digital
              <svg
                width="130"
                height="16"
                viewBox="0 0 266 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12.1784C43.7594 6.95554 151.922 -1.40459 262.496 6.93771"
                  stroke="#FBBF6A"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {""}agency
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
};
const data = [
  {
    id: 1,
    question: "Is TripleM REI suitable for beginners in real estate investing?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, qui rem? Molestiae cupiditate commodi reiciendis nesciunt? Quod ipsa mollitia obcaecati nisi, maiores repellat molestias minima non dolor eligendi ipsam. Atque",
  },
  {
    id: 2,
    question:
      "Can TripleM REI help me find investment opportunities in my local area?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, qui rem? Molestiae cupiditate commodi reiciendis nesciunt? Quod ipsa mollitia obcaecati nisi, maiores repellat molestias minima non dolor eligendi ipsam. Atque",
  },
  {
    id: 3,
    question: "How much does TripleM REI cost?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, qui rem? Molestiae cupiditate commodi reiciendis nesciunt? Quod ipsa mollitia obcaecati nisi, maiores repellat molestias minima non dolor eligendi ipsam. Atque",
  },
  {
    id: 4,
    question: "Is my data secure with TripleM REI?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, qui rem? Molestiae cupiditate commodi reiciendis nesciunt? Quod ipsa mollitia obcaecati nisi, maiores repellat molestias minima non dolor eligendi ipsam. Atque",
  },
];

export default page;
