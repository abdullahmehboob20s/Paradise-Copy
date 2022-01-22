import React from "react";
import styles from "./Card.module.css";

function Card({ img, title }) {
  return (
    <div className={styles.card}>
      <img src={img} className="w-full" alt="" />
      <div
        className={`${styles.cardTitle} fs-22px black font-paradise weight-3`}
      >
        {title}
      </div>
    </div>
  );
}

export default Card;
