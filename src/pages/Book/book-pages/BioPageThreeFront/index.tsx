import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikWave from "assets/gifs/hasbik-money-1.gif";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { calculateAge } from "common/utils";
import { BookPageProps } from "pages/Book/book-pages";
import React, { RefObject, useCallback, useRef } from "react";
import { TextProperties, TextStep, VaraType } from "vara";
import { animationSpeedMode } from "pages/Book/config";
import styles from "./styles.module.css";

const animationDuration = 8 * 1000 * animationSpeedMode;
const age = calculateAge(new Date("10/14/1992"), new Date());
const id = "bio-three-front";
const text = `At the same time while I was studying for my master's degree I started my career as a software developer.`;

export const BioPageThreeFront = React.forwardRef<
  HTMLDivElement,
  BookPageProps
>((props, ref) => {
  const { isFocused, onAnimationFinished } = props;
  const textSteps: TextStep[] = [{ id, text, y: 150 }];
  const config: TextProperties = {
    fontSize: 12,
    strokeWidth: 2,
    letterSpacing: 1.5,
    autoAnimation: false,
  };

  const onChange = useCallback((node: RefObject<VaraType>) => {
    drawWorkaround(() => {
      node?.current?.draw(id, animationDuration);
      setTimeout(() => {
        console.log("BioPageThreeFront:onAnimationFinished");
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
});
