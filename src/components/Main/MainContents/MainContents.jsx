import Link from "next/link";
import React, { useState } from "react";
import styles from "./MainContents.module.css";
import { Works } from "./Works/Works";
import { About } from "./About/About";

export function MainContents() {
  const [works, setWorks] = useState(true);
  const [about, setAbout] = useState(false);
  const handleChange = () => {
    setWorks(!works);
    setAbout(about ? false : true);
  };
  console.log(works);
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h1
          className={works ? styles.active : styles.close}
          onClick={works ? null : handleChange}
        >
          Works
        </h1>
        <h1
          className={about ? styles.active : styles.close}
          onClick={about ? null : handleChange}
        >
          About
        </h1>
      </div>
      <Works onoff={works ? "swichOn" : "swichOff"} />
      <About onoff={about ? "swichOn" : "swichOff"} />
    </div>
  );
}
