import React from "react";
import styles from "./GetOne.module.css";

import openSeaIconNomral from "assets/images/opensea-icon-norma.png";
import useMediaQuery from "hooks/useMediaQuery";

function GetOne() {
  const isBellow760 = useMediaQuery("(max-width: 760px)");

  return (
    <div className="container-wrapper-2">
      <div className={styles.container}>
        <div className={`${styles.left}`}>
          <h1
            className={`font-paradise fs-64px weight-3 lh-1_1 white-shadow-text ${
              isBellow760 ? "" : "mb-60px"
            } `}
          >
            How do I <br /> get one?
          </h1>

          {isBellow760 ? (
            ""
          ) : (
            <button
              className={`${styles.btn} fs-18px font-rubik-bold pointer black block margin-center `}
            >
              <img src={openSeaIconNomral} style={{ width: "30px" }} alt="" />
              Opensea
            </button>
          )}
        </div>

        <div className={styles.right}>
          <p className="fs-16px lh-1_6 mb-20px">
            Firstly, why do you want one? Not only will you receive a unique
            NFT, you will gain entry to our community, forever. You can also
            expect creature-specific access within our evolving world as well as
            an array of treasure hunts, giveaways and a lot more fun stuff!
          </p>
          <p className="fs-16px lh-1_6">
            We are sold out now but you can purchase a Trippie on the
            aftermarket through{" "}
            <a href="#" className="underline">
              Opensea
            </a>
            . Make sure to follow us on Twitter{" "}
            <a href="" className="orange">
              @Trippies
            </a>{" "}
            and join our community of 10,000+ strong to collaborate and conquer
            together.
          </p>

          {isBellow760 ? (
            <button
              className={`${styles.btn} fs-18px font-rubik-bold pointer black block `}
              style={{ marginTop: "40px" }}
            >
              <img src={openSeaIconNomral} style={{ width: "30px" }} alt="" />
              Opensea
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default GetOne;
