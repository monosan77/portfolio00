import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/index-IMG/sydnyc.png" alt="ロゴ" />
        <nav className={styles.navi}>
          {/* <ul>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
            <li>
              <Link href="/Works">WORKS</Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
