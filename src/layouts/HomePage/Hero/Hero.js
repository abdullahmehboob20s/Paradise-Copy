import React from "react";
import styles from "./Hero.module.css";
import trippleVision from "assets/images/tripple-vision.png";
import heroImg from "assets/images/hero-img.jpg";

import heroLeftTree from "assets/images/hero-left-tree.png";
import heroRightTree from "assets/images/hero-right-tree.png";
import enterIsland from "assets/images/enter-island.png";
import useMediaQuery from "hooks/useMediaQuery";

function Hero() {
  const isBellow1200 = useMediaQuery("(max-width: 1200px)");

  return (
    <div className={styles.hero}>
      <div className="container-wrapper">
        <div className={`${styles.heroTtitle} text-center mb-50px`}>
          <h1 className="font-paradise fs-64px mb-20px purple lh-1_1 weight-3">
            Welcome to the home {isBellow1200 ? "" : <br />} of the Paradise
            Trippies
          </h1>
          <p className="fs-20px white lh-1_5 weight-4 mb-30px">
            A collection of 10,000 unique NFTs that were{" "}
            {isBellow1200 ? "" : <br />} born from Party Pete's (BAYC #9696)
          </p>

          <img src={trippleVision} style={{ width: "174px" }} alt="" />
        </div>

        <div className="mb-70px">
          <div className={styles.heroImg}>
            <img src={heroLeftTree} className={styles.heroLeftTree} alt="" />
            <img src={heroRightTree} className={styles.heroRightTree} alt="" />

            <img src={heroImg} className={`${styles.mainImg} w-full`} alt="" />

            <img src={enterIsland} className={styles.enterIsland} alt="" />
          </div>
        </div>
        <div className={`${styles.heroVideo} w-full`}>
          <iframe
            src="//player.vimeo.com/video/660503838?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1"
            width="100%"
            height="100%"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            title="ksdjkasdjk"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
