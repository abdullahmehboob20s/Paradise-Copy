import React from "react";
import styles from "./HowRare.module.css";
import howRare from "assets/images/how-rare.png";
import rarityDaimond from "assets/images/rarity-daimond.png";
import Icon_umbrella from "assets/images/Icon_umbrella.png";
import Icon_crystal from "assets/images/Icon_crystal.png";

const Card = ({ icon, title, desc }) => {
  return (
    <div className={styles.card}>
      <img src={icon} style={{ width: "120px", marginLeft: "-22px" }} alt="" />
      <h4 className="fs-24px white font-paradise weight-3 mb-10px">{title}</h4>
      <p className="lh-1_6 fs-16px white opacity-0_7">{desc}</p>
    </div>
  );
};

function HowRare() {
  return (
    <div>
      <div className="container-wrapper-2">
        <h1 className="fs-64px white weight-3 font-paradise">
          How rare is my piece?
        </h1>
        <div
          className="mb-30px"
          style={{
            maxWidth: "750px",
            width: "100%",
          }}
        >
          <p className="fs-20px white lh-1_5 mb-20px">
            Paradise Trippies were not all created evenly. While we love all of
            our creatures the same, some have rarer traits than others. The
            supply of each creature is also different and we have a collection
            of super rares. Will you be lucky enough to draw one?
          </p>
        </div>

        <div className={styles.tools}>
          <a href="#" className={`${styles.daimond} block`}>
            <img src={rarityDaimond} className="w-full" alt="" />
          </a>

          <button className={`${styles.btn} pointer fs-18px font-paradise`}>
            Rarity Tools
          </button>
        </div>
      </div>

      <div className="mb-30px">
        <div className="container-wrapper">
          <img src={howRare} className="w-full" alt="" />
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={styles.cards}>
          <Card
            icon={Icon_umbrella}
            title="Charity"
            desc="4 of our pieces will contain an offering of 5 ETH each to be
                  donated to charity. Those who draw the charity pieces will get to
                  nominate the charity of their choice, at which point 5 ETH (or USD
                  equivalent) will be donated. The lucky charity piece holders will
                  also get personalized honorary Trippies designed for them (within
                  a reasonable timeframe post-launch), representative of their
                  chosen charities. A snap shot of the pieces will be taken in
                  January and the holders of the tokens will be contacted."
          />
          <Card
            icon={Icon_crystal}
            title="Iterations"
            desc="Our collection comprises 14 different core creatures and 6 specials. The characters have been split in half, good and bad, to represent both sides of the trippy experience. Where will your journey take you? Shortly you will be able to check the map (members only) to find out more about your Trippie and the part of the island they occupy. Soon thereafter, the map will become interactive and a whole new world will open up to Trippie holders. There are a lot of mysteries to solve on Paradise Island, and those successful will be rewarded with some serious loot."
          />
        </div>
      </div>
    </div>
  );
}

export default HowRare;
