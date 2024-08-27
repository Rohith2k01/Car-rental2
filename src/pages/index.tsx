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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Playwrite+DE+Grund:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
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
