import React from "react";

// 経歴データ（詳細）
const Career = [
  "2021年3月　　某建築大学卒業",
  "2021年4月　　某ハウスメーカー　入社",
  "2023年5月　　SES系企業　入社",
];

// 有資格
const skil = [
  "2級建築士",
  "ITパスポート",
  "普通自動車免許",
  "Oracle Master Bronze DBA",
  "Oracle Master Silver SQL",
];

// 開発言語
const lang = ["HTML", "CSS(scss)", "javascript(React/NextJs"];
// その他のスキル
const other = ["AutoCAD", "JWCAD", "Figma", "github", "docker"];

// 経歴データ
export const profileData = [
  {
    title: "名前",
    data: "Yoshiki Noguchi",
  },
  {
    title: "年齢",
    data: "25",
  },
  {
    title: "出身",
    data: "千葉県（最寄り駅・新船橋）",
  },
  {
    title: "経歴",
    data: Career.map((vaule, key) => {
      return <p key={key}>{vaule}</p>;
    }),
  },
];

// スキル・資格
export const skils = [
  {
    title: "資格",
    data: skil.map((value, key) => {
      return <p key={key}>{value}</p>;
    }),
  },
  {
    title: "言語",
    data: lang.map((value, key) => {
      return <p key={key}>{value}</p>;
    }),
  },
  {
    title: "その他",
    data: other.map((value, key) => {
      return <p key={key}>{value}</p>;
    }),
  },
];
