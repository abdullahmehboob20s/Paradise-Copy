import React from "react";
import SliderLayout from "layouts/SliderLayout/SliderLayout";

import nft1 from "assets/images/nft-1.png";
import nft2 from "assets/images/nft-2.png";
import nft3 from "assets/images/nft-3.png";

function BadTrip() {
  return (
    <div>
      <SliderLayout
        title="Bad Trip"
        titleEffect="red-glowing-effect"
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

export default BadTrip;
