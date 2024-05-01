import Link from "next/link";
import React from "react";
import styles from "./MainContents.module.css";

export function MainContents() {
  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <h1>Works</h1>
        <h1 className={styles.active}>About</h1>
      </div>
      <div className={styles.contents}>
        <div className={styles.Works}>
          <div className={styles.grid}>
            <div className={styles.app}></div>
            <div className={styles.app}></div>
            <div className={styles.app}></div>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.anchor}
              href="https://www.figma.com/file/IEGcKQ1AzyewKrDR85gpP8/My-Portfolio?type=design&node-id=1%3A2&mode=design&t=aWF1WKMwt4iO1c8d-1"
              target="_blank"
            >
              <p>To Figma </p>
              <img src="/index-IMG/icons8-外部リンク-48.png" alt="" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.anchor}
              href="https://github.com/monosan77/portfolio00.git"
              target="_blank"
            >
              <p>To Github </p>
              <img src="/index-IMG/icons8-外部リンク-48.png" alt="" />
            </Link>
          </div>
        </div>
        {/* <div className="About">

        </div> */}
      </div>
    </div>
  );
}
