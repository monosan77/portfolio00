import Link from "next/link";
import React from "react";
import styles from "./Works.module.css";
import { Grid } from "./Grid";

export function Works(props) {
  return (
    <div
      id={props.onoff === "swichOn" ? styles.switchOn : styles.swichOff}
      className={styles.contents}
    >
      <div
        id={props.onoff === "swichOn" ? styles.switchOn : styles.swichOff}
        className={styles.Works}
      >
        <Grid />
        <div className={styles.links}>
          <Link
            className={styles.anchor}
            href="https://www.figma.com/file/IEGcKQ1AzyewKrDR85gpP8/My-Portfolio?type=design&node-id=1%3A2&mode=design&t=aWF1WKMwt4iO1c8d-1"
            target="_blank"
          >
            <p>To Figma </p>
            <img src="/index-IMG/Link_btn.png" alt="" />
          </Link>
        </div>
        <div className={styles.links}>
          <Link
            className={styles.anchor}
            href="https://github.com/monosan77/portfolio00.git"
            target="_blank"
          >
            <p>To Github </p>
            <img src="/index-IMG/Link_btn.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
