import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { HiPlus } from "react-icons/hi";

function Accordion({ title, descriptions }) {
  const menuRef = useRef(null);
  const [active, setActive] = useState(false);

  const toggler = () => {
    if (menuRef.current.clientHeight === 0) {
      menuRef.current.style.height = menuRef.current.scrollHeight + "px";
      setActive(true);
    } else {
      menuRef.current.style.height = 0;
      setActive(false);
    }
  };

  return (
    <div className={`${styles.accordion} ${active ? styles.active : ""}`}>
      <div className={`${styles.accordionBtn} pointer`} onClick={toggler}>
        <h1 className="fs-24px font-paradise weight-3 ">{title}</h1>

        <span>
          <HiPlus size={25} />
        </span>
      </div>

      <div className={styles.accordionBody} ref={menuRef}>
        <div className={styles.accordionBody_content}>
          {descriptions.map((desc, index) => (
            <p
              className={`fs-18px font-rubik-regular weight-5 opacity-0_8 lh-1_6 ${
                descriptions.length === 1 ? "" : "mb-20px"
              }`}
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
