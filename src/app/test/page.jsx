import React from "react";
import "@/styles/form.scss";
import { X } from "react-feather";

export default function page() {
  return (
    <div>
      <div className="formpage">
        <div className="formpage__content">
          <div className="formpage__crooss">
            {/* Link to home */}

            <X />
          </div>
          <div className="formpage__content__heading">
            Hello, Devscot. team!
          </div>
          <form action="">
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">My name is</label>
                <input type="text" id="name" placeholder="Your Name?" />
              </div>
              <div className="formpage__content__form__name">
                <label htmlFor="from">from</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Website Or Company Name?"
                />
              </div>{" "}
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">I’d like to discuss</label>
                <div className="formpage__content__form__name__button">
                  <div className="formpage__content__form__name__button__content">
                    <button>Ui/Ux</button>
                    <button>Web </button>
                    <button>Branding</button>
                    <button>Mobile</button>
                    <button>Other</button>{" "}
                  </div>{" "}
                </div>{" "}
                <label htmlFor="name">project idea & design brief.</label>
              </div>
            </div>{" "}
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <input
                  className="formpage__content__form__name__speacialinput"
                  type="project"
                  placeholder="Project Idea"
                />
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">A budget for this project is</label>
                <div className="formpage__content__form__name__button">
                  <button>Ui/Ux</button>
                  <button>Web </button>
                  <button>Branding</button>
                  <button>Mobile</button>
                  <button>Other</button>{" "}
                </div>
              </div>
            </div>
            <div className="formpage__content__form">
              <div className="formpage__content__form__name">
                <label htmlFor="name">Contact me back at</label>
                <input type="emal" placeholder="Your Email" />
              </div>
            </div>
            <div className="formpage__content__form__submitbutton">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
