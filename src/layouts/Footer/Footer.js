import React from "react";
import styles from "./Footer.module.css";

import logo from "assets/images/logo.svg";
import twitterIcon from "assets/images/twitter-icon.png";
import discordIcon from "assets/images/discord-icon.png";
import openseaIcon from "assets/images/opensea-icon.png";

import { Link as ScrollLink } from "react-scroll";
import SocialLink from "components/SocialLink/SocialLink";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-wrapper-2 ">
      <div className={`${styles.footer} mb-30px`}>
        <div className={styles.footer_left}>
          <img src={logo} className={styles.logo} alt="" />

          <div className={styles.links}>
            <ScrollLink
              offset={-120}
              to="story"
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
            >
              Story
            </ScrollLink>
            <ScrollLink
              offset={-120}
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
              to="rarity"
            >
              Rarity
            </ScrollLink>
            <ScrollLink
              offset={-120}
              to="roadmap"
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
            >
              Roadmap
            </ScrollLink>
            <Link
              to="/"
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
            >
              Island
            </Link>
            <ScrollLink
              offset={-120}
              to="faq"
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
            >
              FAqs
            </ScrollLink>
            <ScrollLink
              offset={-120}
              to="team"
              className={`${styles.navbarScrollLink} white uppercase fs-16px font-rubik-medium pointer`}
            >
              Team
            </ScrollLink>
          </div>
        </div>
        <div className={styles.footer_right}>
          <SocialLink
            link="#"
            title="twitter"
            icon={twitterIcon}
            className="fs-16px"
          />
          <SocialLink
            link="#"
            title="discord"
            icon={discordIcon}
            className="fs-16px"
          />
          <SocialLink
            link="#"
            title="opensea"
            icon={openseaIcon}
            className="fs-16px"
          />
        </div>
      </div>

      <p className="fs-14px text-center white opacity-0_3">
        Paradise © Copyright 2021
      </p>
    </div>
  );
}

export default Footer;
