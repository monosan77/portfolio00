import React from "react";
import { Mainvisual } from "./Mainvisual/Mainvisual";
import { MainContents } from "./MainContents/MainContents";
import styles from "./Main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <Mainvisual />
      <MainContents />
    </main>
  );
}
