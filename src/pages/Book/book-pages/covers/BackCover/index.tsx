import linktree from "assets/linktree.png";
import clsx from "clsx";
import React from "react";
import common from "../cover.module.css";
import styles from "./styles.module.css";

export const BackCover = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <div className={clsx(common.container, styles.container)}>
        <div className={clsx(common.wrapper, styles.animated, styles.wrapper)}>
          <div className={clsx(common.book, styles.book)}>
            <div className={common.content}>
              <div className={clsx(common.cover, styles.cover)}>
                <img src={linktree} className={styles.logo} alt="logo" />
                <figure className={styles.quote}>
                  <blockquote>Drop by drop fills the lake.</blockquote>
                  <figcaption>Turkmen proverb</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className={clsx(common.side, styles.side)}>
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
