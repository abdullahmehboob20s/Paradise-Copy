import React from "react";
import styles from "./Roadmap.module.css";
import roadmapImg from "assets/images/roadmap-img.jpeg";
import roadmapTree from "assets/images/roadmap-tree.png";

function Roadmap() {
  return (
    <div className="container-wrapper-2">
      <h1 className="white-shadow-text fs-64px weight-3 font-paradise mb-15px">
        Roadmap
      </h1>

      <div style={{ maxWidth: "571px", width: "100%" }} className="mb-50px">
        <p className="fs-18px font-rubik-regular lh-1_5 mb-25px">
          We are now sold out and will shortly move on to phase 2 of our
          adventure in Paradise.
        </p>
        <p className="fs-18px font-rubik-regular lh-1_5 mb-25px">
          Sections of the world map will gradually be revealed as Pete navigates
          his way through Paradise Island. Interactive locations will become
          available to Trippie holders exclusively, along with games, puzzles
          and treasure hunts.
        </p>
        <p className="fs-18px font-rubik-regular lh-1_5">
          Events and merch drops are in the works, and our cool shop will be
          deployed in the coming months.
        </p>
      </div>

      <div className="relative">
        <img src={roadmapTree} className={styles.roadmapTree} alt="" />
        <img
          src={roadmapImg}
          className="w-full"
          style={{ borderRadius: "30px" }}
          alt=""
        />
      </div>
    </div>
  );
}

export default Roadmap;
