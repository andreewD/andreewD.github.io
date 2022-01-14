import React from "react";
import LeftBar from "../LeftBar/leftBar";
import styles from "./home.module.css";
import Particles from "./particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function home() {
  return (
    <div className={styles.home}>
      <LeftBar />
      {/* <Particles /> */}
      <div className={styles.main}>
        <h1>
          Hi , I am <h1 className={styles.skyBlue}>Andree Anchi</h1>
        </h1>

        <h2>
          I am a computer science student. I consider myself a very passionate
          person in what I do. <br />I like doing research and my areas of
          interest are Blockchain and Security.
        </h2>
        <div className={styles.social}>
          <a href="https://www.facebook.com/Dree.Duenas/">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} size="3x" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/hairton-andree-anchi-due%C3%B1as-27a2b2193/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
          </a>
          <a href="https://github.com/andreewD">
            {" "}
            <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default home;
