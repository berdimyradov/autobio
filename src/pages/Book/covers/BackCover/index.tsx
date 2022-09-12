import React from "react";
import meImage from "assets/me.png";
import styles from "./styles.module.css";

export const BackCover = React.forwardRef<HTMLDivElement>(
  (props: any, ref) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.cover}>
          <img src={meImage} className={styles.logo} alt="logo" />
          <p className={styles.author}>The End</p>
        </div>
      </div>
    );
  }
);
