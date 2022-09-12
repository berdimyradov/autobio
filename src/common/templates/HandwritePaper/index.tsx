import { BlankPage } from "common/templates/BlankPage";
import { VaraAdapter } from "adapters/VaraAdapter";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  id: string;
  texts: Array<string>;
};

export const HandwritePaper = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => (
    <BlankPage ref={ref} className={styles.blankPage}>
      <div className={styles.container}>
        <div className={styles.paper}>
          <div className={styles.lines}>
            <div className={styles.text}>
              {/* <VaraAdapter {...props} /> */}
            </div>
          </div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </BlankPage>
  )
);
