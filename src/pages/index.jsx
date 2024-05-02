import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Mainvisual } from "@/components/Mainvisual";
import { MainContents } from "@/components/MainContents";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Mainvisual />
      <MainContents />
      <Footer />
    </>
  );
}
