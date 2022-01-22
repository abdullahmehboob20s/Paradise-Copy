import React from "react";
import styles from "./SocialLink.module.css";

function SocialLink({ title, icon, link = "#", className }) {
  return (
    <a
      href={link}
      className={`${styles.navbarSocialLink} white uppercase fs-14px font-rubik-medium pointer ${className}`}
    >
      <img src={icon} alt="" />
      {title}
    </a>
  );
}

export default SocialLink;
