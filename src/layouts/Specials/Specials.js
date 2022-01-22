import React from "react";
import styles from "./Specials.module.css";
import SliderLayout from "layouts/SliderLayout/SliderLayout";

import nft1 from "assets/images/nft-1.png";
import nft2 from "assets/images/nft-2.png";
import nft3 from "assets/images/nft-3.png";

function Specials() {
  return (
    <div>
      <SliderLayout
        title="Specials"
        titleEffect="purple-glowing-effect"
        sliderData={[
          { img: nft1, title: "Alligator" },
          { img: nft2, title: "Bunny" },
          { img: nft3, title: "Frog" },
          { img: nft1, title: "Alligator" },
          { img: nft2, title: "Bunny" },
          { img: nft3, title: "Frog" },
        ]}
      />
    </div>
  );
}

export default Specials;
