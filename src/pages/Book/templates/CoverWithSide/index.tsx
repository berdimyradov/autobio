import React from "react";
import { FrontCover } from "../FrontCover";
import styles from "./styles.module.css";

export const CoverWithSide = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <div className={styles.contaier}>
        <div className={styles.wrapper}>
          <div className={styles.book}>
            <div className={styles.content}>
              <FrontCover />
            </div>
          </div>
          <div className={styles.side}>
            <h2>
              <span>Curriculum Vitae</span>
              <span>Kerim Berdimyradov</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
});
