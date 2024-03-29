import React, { RefObject, useCallback, useRef, useState } from "react";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { TextStep, TextProperties, VaraType } from "vara";
import { BookPageProps } from "pages/Book/book-pages";
import { calculateAge } from "common/utils";
import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import styles from "../styles.module.css";
import { useObservable } from "common/hooks";
import { AnimationSpeedService } from "common/services";

const animationDuration = 4000;
const id = "bio-three-back";
const amountOfyears = calculateAge(new Date("01/01/2015"), new Date());
const text = `${amountOfyears} years since passed and here you are about to learn about my skills and projects I took part in. Please pay attention! I might be your new champion :)`;

export const BioPageThreeBack = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 175, x: 55 }];
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
        </div>
      </NotebookPaper>
    );
  }
);
