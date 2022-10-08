import React from "react";
import linktree from "assets/linktree.png";
import styles from "./styles.module.css";

export const BackCover = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.cover}>
        <img src={linktree} className={styles.logo} alt="logo" />
        <figure className={styles.quote}>
          <blockquote>Drop by drop fills the lake.</blockquote>
          <figcaption>Turkmen proverb</figcaption>
        </figure>
      </div>
    </div>
  );
});
