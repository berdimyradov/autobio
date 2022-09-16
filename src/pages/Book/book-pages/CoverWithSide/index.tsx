import clsx from "clsx";
import { BookPageProps, DelayBetweenPageFlipping } from "pages/Book/book-pages";
import React, { useEffect, useRef } from "react";
import frontCoverStyles from "./front-cover.module.css";
import styles from "./styles.module.css";

export const CoverWithSide = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const isAlreadyAnimated = useRef<boolean>(false);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isVisible && !isAlreadyAnimated.current) {
        timer = setTimeout(() => {
          onAnimationFinished();
          isAlreadyAnimated.current = true;
        }, DelayBetweenPageFlipping + 500);
      }

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <div ref={ref}>
        <div className={styles.container}>
          <div className={clsx(styles.wrapper, styles.animated)}>
            <div className={styles.book}>
              <div className={styles.content}>
                <div className={frontCoverStyles.container}>
                  <div className={frontCoverStyles.cover}>
                    <p className={frontCoverStyles.author}>
                      Kerim Berdimyradov
                    </p>
                  </div>
                </div>
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
  }
);