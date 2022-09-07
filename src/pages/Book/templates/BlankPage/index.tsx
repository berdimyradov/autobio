import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children?: any;
  color?: string;
  className?: string;
};

export const BlankPage = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, color, className } = props;
    return (
      <div ref={ref} className={clsx(styles.page, className)}>
        <div className={styles.content} style={{ background: color }}>
          {children && <div className={styles.children}>{children}</div>}
        </div>
      </div>
    );
  }
);
