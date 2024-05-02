import React, { useState } from "react";
import styles from "./Footer.module.css";
import { init, send } from "@emailjs/browser";
export function Footer() {
  const [name, setName] = useState(""); // 「ご氏名」の部分
  const [company, setCompany] = useState(""); // 「会社名」の部分
  const [email, setMail] = useState(""); // 「メールアドレス」の部分
  const [message, setMessage] = useState(""); // 「お問い合わせ内容」の部分
  const userID = "mono.noguyoshi.230876@gmail.com";
  const serviceID = "service_bwpgcwg";
  const templateID = "template_kidx7gi";
  console.log(serviceID);

  const sendMail = () => {
    // ここに処理を書いていきます。

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init("mono.noguyoshi.230876@gmail.com");

      const template_param = {
        name: name,
        company: company,
        email: email,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        window.alert("お問い合わせを送信致しました。");

        setName("");
        setCompany("");
        setMail("");
        setMessage("");
      });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  const disableSend = name === "" || email === "" || message === "";
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <div className={styles.form}>
          <div className={styles.left}>
            <p>
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="company">会社名</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setMail(e.target.value)}
              />
            </p>
          </div>
          <div className={styles.right}>
            <p>
              <label htmlFor="comment">お問い合わせ内容</label>
              <textarea
                name=""
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
          </div>
        </div>

        <div className={styles.button}>
          <button onClick={handleClick} disabled={disableSend}>
            送信する
          </button>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Yoshiki Noguchi</p>
      </div>
    </div>
  );
}
