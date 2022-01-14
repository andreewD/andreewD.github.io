import React from "react";
import LeftBar from "../LeftBar/leftBar";
import styles from "./about.module.css";
function about() {
  return (
    <div className={styles.mainAbout}>
      <LeftBar />
      <div className={styles.about}></div>
    </div>
  );
}

export default about;
