import React from "react";
import meImage from "assets/me.png";
import styles from "./styles.module.css";

export const BackCover = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.cover}>
        <img src={meImage} className={styles.logo} alt="logo" />
        <figure className={styles.quote}>
          <blockquote>Drop by drop fills the lake.</blockquote>
          <figcaption>Turkmen proverb</figcaption>
        </figure>
      </div>
    </div>
  );
});
