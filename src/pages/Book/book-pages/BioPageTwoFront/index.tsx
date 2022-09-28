import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikOperator from "assets/gifs/hasbik-operator.gif";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { calculateAge } from "common/utils";
import { BookPageProps } from "pages/Book/book-pages";
import React, { RefObject, useCallback, useRef } from "react";
import { TextProperties, TextStep, VaraType } from "vara";
import { animationSpeedMode } from "pages/Book/config";
import styles from "./styles.module.css";

const animationDuration = 8 * 1000 * animationSpeedMode;
const age = calculateAge(new Date("10/14/1992"), new Date());
const id = "bio-two-front";
const text = `Later in 2010 when I was 18 I enrolled in Baranovichi State University into engeening in the Faculty of Engineering and in 2015 received a degree in software engineering.  `;

export const BioPageTwoFront = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 75 }];
    const config: TextProperties = {
      fontSize: 12,
      strokeWidth: 2,
      letterSpacing: 1.5,
      autoAnimation: false,
    };
    console.log("BioPageTwoFront:props:", props);

    const onChange = useCallback((node: RefObject<VaraType>) => {
      drawWorkaround(() => {
        node?.current?.draw(id, animationDuration);
        setTimeout(() => {
          onAnimationFinished && onAnimationFinished();
        }, animationDuration);
      });
    }, []);

    const isVaraAlreadyRendered = useRef<boolean>(false);
    if (isVisible) {
      isVaraAlreadyRendered.current = true;
    }

    return (
      <NotebookPaper ref={ref}>
        <div className={styles.container}>
          {isVaraAlreadyRendered.current && (
            <VaraAdapter
              onVaraRef={onChange}
              textSteps={textSteps}
              config={config}
            />
          )}
          <div className={styles.gif}>
            <img
              src={hasbikOperator}
              className="box-shadow-3d"
              alt="hasbik is waving at you"
            />
          </div>
        </div>
      </NotebookPaper>
    );
  }
);
