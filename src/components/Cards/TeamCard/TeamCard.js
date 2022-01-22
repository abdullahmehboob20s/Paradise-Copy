import React from "react";
import styles from "./TeamCard.module.css";
import { FaTwitter } from "react-icons/fa";

function TeamCard({ title, desc, link = "#", img }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.img_container} mb-15px`}>
        <img src={img} className="w-full" alt="" />
        <a href={link} className={styles.btn}>
          <FaTwitter size={25} />
        </a>
      </div>

      <p className="white-shadow-text font-paradise weight-3 fs-22px white mb-10px">
        {title}
      </p>

      <p className="fs-14px lh-1_6 font-rubik-regular">{desc}</p>
    </div>
  );
}

export default TeamCard;
