import React from "react";
import BadTrip from "layouts/HomePage/BadTrip/BadTrip";
import GetOne from "layouts/HomePage/GetOne/GetOne";
import GoodTrip from "layouts/HomePage/GoodTrip/GoodTrip";
import Hero from "layouts/HomePage/Hero/Hero";
import HowRare from "layouts/HomePage/HowRare/HowRare";
import Story from "layouts/HomePage/Story/Story";
import JoinDiscord from "layouts/JoinDiscord/JoinDiscord";
import Navbar from "layouts/Navbar/Navbar";
import Specials from "layouts/Specials/Specials";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import styles from "./Home.module.css";
import FAQ from "layouts/HomePage/FAQ/FAQ";
import Team from "layouts/HomePage/Team/Team";
import Footer from "layouts/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className="mb-100px">
          <Hero />
        </div>
        <div className="mb-150px">
          <GetOne />
        </div>
        <div className="mb-100px">
          <GoodTrip />
        </div>
        <div className="mb-100px">
          <BadTrip />
        </div>
        <div className="mb-100px">
          <Specials />
        </div>
        <div className="mb-100px">
          <JoinDiscord />
        </div>
        <div className="mb-100px" id="story">
          <Story />
        </div>
        <div className="mb-100px" id="rarity">
          <HowRare />
        </div>
        <div className="mb-100px" id="roadmap">
          <Roadmap />
        </div>
        <div className="mb-100px" id="faq">
          <FAQ />
        </div>
        <div className="mb-100px" id="team">
          <Team />
        </div>
        <div className="mb-50px">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;
