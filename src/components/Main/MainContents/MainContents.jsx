import Link from "next/link";
import React from "react";
import styles from "./MainContents.module.css";
import { Works } from "./Works/Works";
import { About } from "./About/About";

export function MainContents() {
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h1>Works</h1>
        <h1 className={styles.active}>About</h1>
      </div>
      {/* <Works /> */}
      <About />
    </div>
  );
}
