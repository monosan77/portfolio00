import React from "react";
import styles from "./About.module.css";
import { profileData, skils } from "./AboutData";

export function About(props) {
  return (
    <div
      id={props.onoff === "swichOn" ? styles.switchOn : styles.swichOff}
      className={styles.contents}
    >
      <div className={styles.About}>
        <div className={styles.Profile}>
          <h2 className={styles.title}>Profile</h2>
          <div className={styles.content}>
            <div className={styles.left}>
              <img src="/index-IMG/me.jpg" alt="" />
            </div>
            <div className={styles.right}>
              <dl>
                {profileData.map((value, key) => {
                  return (
                    <div key={key}>
                      <dt>{value.title} : </dt>
                      <dd>{value.data}</dd>
                    </div>
                  );
                })}

                <p>【スキル・資格】</p>

                {skils.map((value, key) => {
                  return (
                    <div key={key}>
                      <dt>{value.title} : </dt>
                      <dd>{value.data}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
        <div className={styles.Comment}>
          <h2 className={styles.title}>Comment</h2>
          <div className={styles.text}>
            <p>
              将来、アプリ開発をしたく、毎日勉強に勤しんでいる25歳です。
              <br />
              前職はハウスメーカーの施工管理をしていました。
              <br />
              IT業界にはもともと非常に興味があり、今後の人生に後悔しないために転職を決意し、現在お客様先でPOSレジの入れ替え業務を行っています。
              <br />
              今後、まずはフロントエンドエンジニアになることを目標に、javascript(React,NextJs)を勉強中です。最近は特にプログラミングの楽しさを実感し毎日楽しく勉強しています。
              <br />
              実務未経験ではありますが、目標に向かって積極的に挑戦していきたいと思います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
