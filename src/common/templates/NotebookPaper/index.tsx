import { BlankPage } from "common/templates/BlankPage";
import React from "react";
import styles from "./styles.module.css";

type Props = {
  children?: React.ReactNode;
};

export const NotebookPaper = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children } = props;
    return (
      <BlankPage ref={ref} className={styles.blankPage}>
        <div className={styles.container}>
          <div className={styles.paper}>
            <div className={styles.lines}>{children}</div>
            <div className={styles.shadow}></div>
          </div>
        </div>
      </BlankPage>
    );
  }
);
