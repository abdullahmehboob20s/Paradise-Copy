import Accordion from "components/Accordion/Accordion";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className="container-wrapper-2">
      <h1 className="fs-64px white-shadow-text font-paradise weight-3 lh-1_2 mb-50px">
        Frequently <br /> asked questions
      </h1>

      <div className={styles.accordions}>
        <Accordion
          title="How many Trippies will there be?"
          descriptions={[
            "There will be 10,000 unique NFTs in the Paradise Trippies collection.",
          ]}
        />
        <Accordion
          title="What chain are Paradise Trippies minted on?"
          descriptions={[
            "PTs is an Ethereum-based project minted with ERC-721 tokens.",
          ]}
        />
        <Accordion
          title="When is the Roadmap Launching?"
          descriptions={[
            "The Roadmap will gradually be released here on the website and on discord in the coming weeks.",
          ]}
        />
        <Accordion
          title="What is the inspiration behind the Paradise Trippies?"
          descriptions={[
            "Andy Booth has been a BAYC member for a long time and has always considered trippy fur as the primary apesthetic. He envisioned a story of endless possibility through trippy imagination. These are the results.",
          ]}
        />
        <Accordion
          title="Who are the artists and what are their backgrounds?"
          descriptions={[
            "Our art is all drawn and illustrated by Rui Duarte and Joe Ruiz. ",
            "Rui Duarte has been in professional illustration and has forged a caricature career since 2003 which led him to become a storyboard and comic artist. In the NFT world he is best known for drawing the art of Bulls on the Block.",
            "Joe Ruiz, a Georgia based painter and illustrator, has been mastering his talents since his art school days in the early 90s. A disciple of the San Francisco Art Institute, he has illustrated popular books, games, and print work for the last 3 decades.",
          ]}
        />
        <Accordion
          title="Do I own the commercial rights to my NFTs"
          descriptions={[
            "Yes. They are free for you to use under a non exclusive license. We do own and protect the logos and trademarks of Paradise Trippies and ask that you ask permission before using these. We also reserve the rights to use all pieces in our personal marketing and promotion. ",
          ]}
        />
      </div>
    </div>
  );
}

export default FAQ;
