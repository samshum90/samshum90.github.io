import React from "react";

import { profile } from "../../assets";
import "./about.scss";

const About = () => {
  return (
    <article className="about">
      <div className="about__image-wrapper">
        <img
          alt="Profile of Samuel Shum"
          className="about__image"
          src={profile}
        />
      </div>
      <p className="about__text">
        <span className="about__text-para">
          Hi, my name is Samuel Shum, aspiring full-stack software developer and
          <strong> Tech enthusiast</strong>, based in Edinburgh, Scotland. I'm a
          former Chemist and soon to be father. Currently volunteering at the
          Scottish Tech Army.
        </span>
        <span className="about__text-para">
          I started my coding journey back in Feb 2020, by quitting my job as a
          offshore waste chemist and moving to Edinburgh to pursue my passion by
          attending
          <strong> Code Clan</strong>. Scotland’s only award-winning digital
          skills academy, where I found my love of having an idea that captures
          my imagination and using my love of learning and problem solving to
          bring that idea from a concept to a meaningful digital solutions.
        </span>
        <span className="about__text-para">
          My biggest goal at the moment is to find my first webdev related job
          so I can become a professional developer and do what I love for a
          living.
        </span>
      </p>
    </article>
  );
};

export default About;
