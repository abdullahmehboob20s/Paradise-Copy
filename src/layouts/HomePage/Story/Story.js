import React from "react";
import styles from "./Story.module.css";
import storyImg1 from "assets/images/story-img-1.png";
import storyImg2 from "assets/images/story-img-2.png";

function Story() {
  return (
    <>
      <div className="mb-50px">
        <div className="container-wrapper-2">
          <div className="mb-50px">
            <h1 className="fs-64px white-shadow-text font-paradise weight-3 lh-1_1 mb-40px">
              This story is of Bored Ape #9696, known by his friends as ‘Party
              Pete’.
            </h1>

            <div
              style={{
                maxWidth: "581px",
                width: "100%",
              }}
            >
              <p className="fs-20px white lh-1_5 mb-20px">
                Pete is a simple yet fun-loving ape, known as the life and soul
                of the party in a largely boring existence.
              </p>
              <p className="fs-20px white lh-1_5">
                He is an extremely social animal and loves to tell stories and
                entertain his fellow bored apes. One story that Pete
                particularly enjoys telling is the tale of Paradise Island, a
                mystical place only reached by drinking the notorious ‘trippy
                brew’. The brew is allegedly created by mixing the juices of 100
                trippy frogs and supposedly hasn’t been seen on these shores
                since the last blue moon.
              </p>
            </div>
          </div>
        </div>

        <div className="container-wrapper">
          <img
            src={storyImg1}
            style={{ borderRadius: "20px" }}
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div className="mb-50px">
        <div className="container-wrapper-2">
          <div className="mb-50px">
            <div
              style={{
                maxWidth: "581px",
                width: "100%",
              }}
            >
              <p className="fs-20px white lh-1_5 mb-20px">
                As the night wears on and with the beer in full flow, the barman
                announces that a batch of trippy brew has finally arrived. Party
                Pete is positively desperate to give it a go.
              </p>
            </div>
          </div>
        </div>

        <div className="container-wrapper">
          <img
            src={storyImg2}
            style={{ borderRadius: "20px" }}
            className="w-full"
            alt=""
          />
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className="mb-50px">
          <div
            style={{
              maxWidth: "581px",
              width: "100%",
            }}
          >
            <p className="fs-20px white lh-1_5 mb-20px">
              He begs the barman to give him a jar. Reluctantly and with a look
              of concern, the barman obliges, and Pete necks the brew
              confidently as his fellow apes watch in bewilderment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
