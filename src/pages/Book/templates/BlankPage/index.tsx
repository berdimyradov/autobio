import React from "react";
import styles from "./styles.module.css";

type Props = {
  children: any;
  pageNumber: number;
};

export const BlankPage = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    return (
      <div className={styles.page} ref={ref}>
        <div className={styles.content}>
          <p className={styles.children}>{props.children}</p>
          <footer>
            <span className={styles.pageNumber}>{props.pageNumber}</span>
          </footer>
        </div>
      </div>
    );
  }
);
