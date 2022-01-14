import React from 'react'
import LeftBar from "../LeftBar/leftBar";
import styles from "./contact.module.css";
function contact() {
    return (
        <div className={styles.mainContact}>
        <LeftBar />
        <div className={styles.contact}>
            contact
        </div>
      </div>
    )
}

export default contact
