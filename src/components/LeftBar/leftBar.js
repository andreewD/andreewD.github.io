import React from "react";
import styles from "./leftBar.module.css";
import Photo from "../../assets/profilePic.jpg"
function leftBar() {
  return (
    <div className={styles.navBarWrapper}>
      <ul className={styles.navBar}>
        <img src={Photo} alt="" />
        <li>
          <h1>Home</h1>
        </li>
        <li>
          <h1>About</h1>
        </li>
        <li>
          <h1>Resume</h1>
        </li>
        <li>
          <h1>Contact</h1>
        </li>
      </ul>
    </div>
  );
}

export default leftBar;
