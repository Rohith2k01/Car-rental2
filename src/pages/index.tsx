import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Booking from "../components/main/booking/booking";
import Banner from "../components/main/banner/banner";
import Subscriber from "../components/main/subscription/subscription";
import Steps from "../components/main/steps/steps";
import Locations from "../components/main/locations/locations";
import Questions from "../components/main/questions/questions";
import styles from "@/styles/Home.module.css"



export default function Home() {
  return (
    <div>
      <Head>
        <title>Car renral</title>
      </Head>
      <Header />
      <main>
        <Booking />
        <Banner />
        <Subscriber />
        <Steps />
        <Locations />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}
