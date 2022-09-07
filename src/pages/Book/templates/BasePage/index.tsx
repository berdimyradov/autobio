import React from "react";
import { BlankPage } from "pages/Book/templates/BlankPage";
import styles from "./styles.module.css";

type Props = {
  children?: any;
  number?: number;
};

export const BasePage = React.forwardRef<HTMLDivElement, Props>(
  (props: Props, ref) => {
    const { children, number } = props;
    return (
      <BlankPage ref={ref} className={styles.blankPage}>
        <div className={styles.container}>
          {children && <div className={styles.content}>{children}</div>}
          {number && (
            <footer>
              <span className={styles.pageNumber}>{number}</span>
            </footer>
          )}
        </div>
      </BlankPage>
    );
  }
);
