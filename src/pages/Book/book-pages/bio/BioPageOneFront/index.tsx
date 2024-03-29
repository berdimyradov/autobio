import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikWave from "assets/gifs/hasbik-wave.gif";
import { useObservable } from "common/hooks";
import { AnimationSpeedService } from "common/services";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { calculateAge } from "common/utils";
import { BookPageProps } from "pages/Book/book-pages";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { TextProperties, TextStep, VaraType } from "vara";
import styles from "../styles.module.css";

const animationDuration = 8000;
const age = calculateAge(new Date("10/14/1992"), new Date());
const id = "bio-front";
const text = `Hello my dear reader. Let's start our journey and introduce you myself. As you already may know my name is Kerim Berdimyradov.  I was born on October 14, 1992 which means that right now I'm ${age} years old :) and my childhood years were spent in sunny Turkmenistan`;

export const BioPageOneFront = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 75 }];
    const config: TextProperties = {
      fontSize: 12,
      strokeWidth: 2,
      letterSpacing: 1.5,
      autoAnimation: false,
    };
    const [duration, setDuration] = useState(animationDuration);

    useObservable(AnimationSpeedService.getInstance().modificator, (it) => {
      setDuration(animationDuration * it);
    });

    const onChange = useCallback(
      (node: RefObject<VaraType>) => {
        drawWorkaround(() => {
          node?.current?.draw(id, duration);
          setTimeout(() => {
            onAnimationFinished && onAnimationFinished();
          }, duration);
        });
      },
      [duration]
    );

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
