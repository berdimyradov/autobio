import React from "react";
import styles from "./styles.module.css";

export const FrontCover = React.forwardRef<HTMLDivElement>(
  (props: any, ref) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.cover}>
          <p className={styles.author}>Kerim Berdimyradov</p>
        </div>
      </div>
    );
  }
);
