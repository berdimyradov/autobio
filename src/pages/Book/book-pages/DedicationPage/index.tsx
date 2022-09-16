import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import { BlankPage } from "common/templates/BlankPage";
import { BookPageProps } from "pages/Book/book-pages";
import React, { RefObject, useCallback, useRef } from "react";
import { VaraType } from "vara";
import styles from "./styles.module.css";

const animationDuration = 1500;

export const DedicationPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const onChange = useCallback((node: RefObject<VaraType>) => {
      drawWorkaround(() => {
        node?.current?.draw("dedication1", animationDuration);
        setTimeout(() => {
          onAnimationFinished();
        }, animationDuration);
      });
    }, []);

    const isVaraAlreadyRendered = useRef<boolean>(false);
    if (isVisible) {
      isVaraAlreadyRendered.current = true;
    }

    return (
      <BlankPage ref={ref} className={styles.blankPage}>
        <div className={styles.container}>
          <div className={styles.vara}>
            {isVaraAlreadyRendered.current && (
              <VaraAdapter
                onVaraRef={onChange}
                textSteps={[
                  {
                    id: "dedication1",
                    text: "Dedicated to my fans :)",
                    fontSize: 18,
                    strokeWidth: 1.75,
                    letterSpacing: 3,
                    autoAnimation: false,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </BlankPage>
    );
  }
);