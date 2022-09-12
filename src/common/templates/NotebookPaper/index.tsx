import React from "react";
import { BlankPage } from "common/templates/BlankPage";
import styles from "./styles.module.css";

export const NotebookPaper = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <BlankPage ref={ref} className={styles.blankPage}>
      <div className={styles.container}>
        <div className={styles.paper}>
          <div className={styles.lines}>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptate, asperiores deleniti temporibus aliquam itaque
              blanditiis libero quidem aspernatur, iure id, quam expedita rerum.
              Sapiente expedita in sed placeat vel.
            </div>
          </div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </BlankPage>
  );
});
