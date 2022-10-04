import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children?: any;
  className?: string;
};

export const BlankPage = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, className } = props;
    return (
      <div ref={ref} className={clsx(styles.page, className)}>
        <div className={styles.container}>
          <div className={styles.content}>
          {children && <div className={styles.children}>{children}</div>}
          </div>
        </div>
      </div>
    );
  }
);
