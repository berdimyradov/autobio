import clsx from "clsx";
import { BookPageProps } from "pages/Book/book-pages";
import { delayBetweenPageFlipping } from "pages/Book/config";
import React, { useEffect, useRef } from "react";
import coverStyles from "../cover.module.css";
import styles from "./styles.module.css";

const animationDuration = delayBetweenPageFlipping + 500;

export const FrontCover = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const isAlreadyAnimated = useRef<boolean>(false);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isFocused && !isAlreadyAnimated.current) {
        timer = setTimeout(() => {
          onAnimationFinished && onAnimationFinished();
          isAlreadyAnimated.current = true;
        }, animationDuration);
      }

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div ref={ref}>
        <div className={clsx(coverStyles.container, styles.container)}>
          <div className={clsx(coverStyles.wrapper, coverStyles.animated)}>
            <div className={coverStyles.book}>
              <div className={coverStyles.content}>
                <div className={clsx(coverStyles.cover, styles.cover)}>
                  <p className={styles.author}>Kerim Berdimyradov</p>
                </div>
              </div>
            </div>
            <div className={clsx(coverStyles.side, styles.side)}>
              <h2>
                <span>Curriculum Vitae</span>
                <span>Kerim Berdimyradov</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
