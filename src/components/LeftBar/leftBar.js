import React from "react";
import styles from "./leftBar.module.css";
import Photo from "../../assets/profilePic.jpg";
import { Link } from "react-router-dom";
function leftBar() {
  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <img src={Photo} alt="" />
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <h1>Resume</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default leftBar;
