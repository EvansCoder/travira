import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Safety from "../components/Safety";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Travira Air</title>
        <meta name="description" content="Travia Air by Wanga Evans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-32 overflow-hidden min-h-screen scroll-smooth">
        <Header />
        <Hero/>
        <Service/>
        <Safety/>
      </div>
    </div>
  );
}
