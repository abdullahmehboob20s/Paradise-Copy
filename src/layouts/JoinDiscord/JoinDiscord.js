import React from "react";
import styles from "./JoinDiscord.module.css";
import { FaDiscord } from "react-icons/fa";

function JoinDiscord() {
  return (
    <div className="container-wrapper-2">
      <div className={styles.wrapper}>
        <h1 className="fs-64px lh-1_2 weight-3 white-shadow-text-2 mb-40px font-paradise">
          join our discord <br /> server
        </h1>

        <button
          className={`${styles.btn} fs-18px pointer black weight-8 font-rubik-bold`}
        >
          <FaDiscord size={25} />
          Join now
        </button>
      </div>
    </div>
  );
}

export default JoinDiscord;
