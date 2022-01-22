import React from "react";
import styles from "./Navbar.module.css";

import logo from "assets/images/logo.svg";
import twitterIcon from "assets/images/twitter-icon.png";
import discordIcon from "assets/images/discord-icon.png";
import openseaIcon from "assets/images/opensea-icon.png";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import SocialLink from "components/SocialLink/SocialLink";

function Navbar() {
  return (
    <div className={styles.navbarWrapepr}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <ScrollLink
              offset={-120}
              to="story"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              Story
            </ScrollLink>
            <ScrollLink
              offset={-120}
              to="rarity"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              Rarity
            </ScrollLink>
            <ScrollLink
              offset={-120}
              to="roadmap"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              Roadmap
            </ScrollLink>
            <Link
              to="/"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              Island
            </Link>
            <ScrollLink
              offset={-120}
              to="faq"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              FAqs
            </ScrollLink>
            <ScrollLink
              offset={-120}
              to="team"
              className={`${styles.navbarScrollLink} white uppercase fs-14px font-rubik-medium pointer`}
            >
              Team
            </ScrollLink>
          </div>
          <div className={styles.navbarCenter}>
            <img src={logo} className={styles.navbarBrand} alt="" />
          </div>
          <div className={styles.navbarRight}>
            <SocialLink link="#" title="twitter" icon={twitterIcon} />
            <SocialLink link="#" title="discord" icon={discordIcon} />
            <SocialLink link="#" title="opensea" icon={openseaIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
