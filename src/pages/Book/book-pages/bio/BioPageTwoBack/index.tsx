import React, { RefObject, useCallback, useRef } from "react";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { TextStep, TextProperties, VaraType } from "vara";
import { BookPageProps } from "pages/Book/book-pages";
import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikWave from "assets/gifs/hasbik-phone.gif";
import { animationSpeedMode } from "pages/Book/config";
import styles from "./styles.module.css";

const animationDuration = 4 * 1000 * animationSpeedMode;
const id = "bio-two-back";
const text = `After graduating I enrolled in Belarusian State University of Informatics and Radioelectronics and a year later I received my master's degree in computer science.`;

export const BioPageTwoBack = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 150, x: 55 }];
    const config: TextProperties = {
      fontSize: 12,
      strokeWidth: 2,
      letterSpacing: 1.5,
      autoAnimation: false,
    };

    const onChange = useCallback((node: RefObject<VaraType>) => {
      console.log("BioPageBack:onChange", node.current);
      drawWorkaround(() => {
        node?.current?.draw(id, animationDuration);
        setTimeout(() => {
          onAnimationFinished && onAnimationFinished();
        }, animationDuration);
      });
    }, []);

    const isVaraAlreadyRendered = useRef<boolean>(false);
    if (isFocused) {
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
              src={hasbikWave}
              className="box-shadow-3d"
              alt="hasbik is waving at you"
            />
          </div>
        </div>
      </NotebookPaper>
    );
  }
);
