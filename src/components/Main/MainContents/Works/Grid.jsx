import Link from "next/link";
import React from "react";
import styles from "./Grid.module.css";

export function Grid(props) {
  const workData = [
    {
      title: "アクセサリーショップ",
      image: "./index-IMG/aks.image.png",
      href: "https://monosan77.com/",
      gitHref: "https://github.com/monosan77/accessoriesHP.git",
    },
    {
      title: "ハウスメーカーHP",
      image: "./index-IMG/homeHP.image.png",
      href: "https://monosan77.com/houseHP/",
      gitHref: "https://github.com/monosan77/HouseMaker.git",
    },
    {
      title: "作成中",
      image: "./index-IMG/sample.png",
      href: "",
      gitHref: "",
    },
  ];

  return (
    <div className={styles.grid}>
      {workData.map((value, key) => {
        return (
          <div key={key} className={styles.app}>
            <Link href={value.href} target="_blank">
              <img className={styles.image} src={value.image} alt="" />
            </Link>
            <div className={styles.textArea}>
              <div className={styles.Link}>
                <Link href={value.href} target="_blank">
                  <p>{value.title}</p>
                  <img src="/index-IMG/Link_btn.png" alt="" />
                </Link>
              </div>
              <div className={styles.git}>
                <Link href={value.gitHref} target="_blank">
                  <p>To Github</p>
                  <img src="/index-IMG/Link_btn.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
