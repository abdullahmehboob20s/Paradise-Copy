import React, { useRef } from "react";
import styles from "./GoodTrip.module.css";

import nft1 from "assets/images/nft-1.png";
import nft2 from "assets/images/nft-2.png";
import nft3 from "assets/images/nft-3.png";
import SliderLayout from "layouts/SliderLayout/SliderLayout";

function GoodTrip() {
  return (
    <SliderLayout
      title="Good trip"
      titleEffect="green-glowing-effect"
      sliderData={[
        { img: nft1, title: "Alligator" },
        { img: nft2, title: "Bunny" },
        { img: nft3, title: "Frog" },
        { img: nft1, title: "Alligator" },
        { img: nft2, title: "Bunny" },
        { img: nft3, title: "Frog" },
      ]}
    />
  );
}

export default GoodTrip;
