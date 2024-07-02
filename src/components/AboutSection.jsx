"use client";

import Fade from "@/components/Fade";

export default function AboutSection({}) {
  return (
    <section className="hero__section__aboutus">
      <div className="hero__section__aboutus__content">
        <Fade up delay={100}>
          <div className="hero__section__aboutus__content__left">
            We unlock the potential of your business with{" "}
            <span>creative digital solutions.</span>
          </div>
        </Fade>
        <Fade up delay={300}>
          <div className="hero__section__aboutus__content__right">
            From traditional PR and thought leadership campaigns to storytelling
            and creative social media management we’ve got you covered.
            Something is not your average order-taking vendor. We are proud to
            be the go-to partner for some of the world’s biggest agencies and
            brands because they trust our expertise.
          </div>
        </Fade>
      </div>
      <div className="line" />
    </section>
  );
}
