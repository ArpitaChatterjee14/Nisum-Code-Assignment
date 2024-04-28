import { Inter } from "next/font/google";
import { Landing } from "@/components/Landing";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing backgroundPic="/background.jpg"/>
    </main>
  );
}