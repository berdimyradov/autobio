import React, { RefObject, useCallback, useRef } from "react";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { TextStep, TextProperties, VaraType } from "vara";
import { BookPageProps } from "pages/Book/book-pages";
import { calculateAge } from "common/utils";
import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikWave from "assets/gifs/hasbik-champ.gif";
import hasbikWave2 from "assets/gifs/hasbik-training.gif";
import { animationSpeedMode } from "pages/Book/config";
import styles from "./styles.module.css";

const animationDuration = 4 * 1000 * animationSpeedMode;
const id = "bio-three-back";
const amountOfyears = calculateAge(new Date("01/01/2015"), new Date());
const text = `${amountOfyears} years since passed and here you are about to learn about my skills and projects I took part in. Please pay attention! I might be your new champion :)`;

export const BioPageThreeBack = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 175, x: 55 }];
    const config: TextProperties = {
      fontSize: 12,
      strokeWidth: 2,
      letterSpacing: 1.5,
      autoAnimation: false,
    };
    console.log("BioPageBack:props:", props);

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
              src={hasbikWave}
              className="box-shadow-3d"
              alt="hasbik is waving at you"
            />
          </div>

          <div className={styles.emojies}>
            <img
              src={hasbikWave2}
              className="box-shadow-3d"
              alt="hasbik is waving at you"
            />
          </div>
        </div>
      </NotebookPaper>
    );
  }
);
