import React from "react";
import styles from "./Team.module.css";

import teamImg1 from "assets/images/team-img-1.png";
import teamImg2 from "assets/images/team-img-2.png";
import teamImg3 from "assets/images/team-img-3.png";
import teamImg4 from "assets/images/team-img-4.png";
import TeamCard from "components/Cards/TeamCard/TeamCard";

function Team() {
  return (
    <div className="container-wrapper-2">
      <header className={`${styles.header} mb-70px`}>
        <div className={styles.left}>
          <h1 className="fs-64px font-paradise white-shadow-text weight-3">
            Team
          </h1>
        </div>
        <div className={styles.right}>
          <p
            className="fs-16px lh-1_6 white font-rubik-regular"
            style={{ maxWidth: "387px" }}
          >
            We are a whacky team, all ages and all backgrounds, like you'd
            expect from a team of Trippies. <br />
            We are Trippy Creative.
          </p>
        </div>
      </header>

      <main className={styles.cards}>
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg1}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg2}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg3}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg4}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg1}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg2}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg3}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg4}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg1}
        />
        <TeamCard
          title="Rui Duarte"
          desc="FC Porto enthusiast with the artistic strength of an ox. Breaks a lot of pencils."
          img={teamImg2}
        />
      </main>
    </div>
  );
}

export default Team;
