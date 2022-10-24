import { Crossword, CrosswordMode } from "common/components/Crossword";
import { useObservable } from "common/hooks";
import { AnimationSpeedService } from "common/services";
import { BasePage } from "common/templates/BasePage";
import { BookPageProps } from "pages/Book/book-pages";
import { crosswordAnimationSpeed } from "pages/Book/config";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

// prettier-ignore
const characters = [
  '-', '-', '-', '-', '-', '-', '-', '-', 'w', '-', '-', '-',
  '-', '-', '-', '-', '-', '-', '-', 'r', 'e', 'd', 'u', 'x',
  '-', '-', '-', 't', '-', '-', '-', '-', 'b', '-', '-', '-',
  '-', '-', '-', 'y', '-', 'y', '-', 'n', 'p', 'm', '-', '-',
  '-', '-', '-', 'p', '-', 'a', '-', '-', 'a', '-', '-', '-',
  'n', 'o', 'd', 'e', '-', 'r', 'e', 'a', 'c', 't', '-', '-',
  '-', '-', '-', 's', 'v', 'n', '-', '-', 'k', '-', '-', '-',
  '-', '-', '-', 'c', '-', '-', '-', '-', '-', '-', '-', '-',
  '-', '-', '-', 'r', '-', '-', '-', '-', '-', '-', '-', '-',
  '-', '-', 'v', 'i', 'm', '-', '-', '-', '-', '-', '-', '-',
  '-', '-', '-', 'p', '-', '-', '-', '-', '-', '-', '-', '-',
  '-', 'g', 'i', 't', '-', '-', '-', '-', '-', '-', '-', '-',
];
// prettier-ignore
const labels = [
  null, null, null, null, null, null, null, null, '1', null, null, null,
  null, null, null, null, null, null, null, '2', null, null, null, null,
  null, null, null, '3', null, null, null, null, null, null, null, null,
  null, null, null, null, null, '4', null, '5', null, null, null, null,
  null, null, null, null, null, null, null, null, null, null, null, null,
  '6', null, null, null, null, '7', null, null, null, null, null, null,
  null, null, null, '8', null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null, null, null,
  null, null, '9', null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null, null, null,
  null, '10', null, null, null, null, null, null, null, null, null, null,
];
// prettier-ignore
const delays = [
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 8, 2, 9, 10, 11,
  0, 0, 0, 12, 0, 0, 0, 0, 3, 0, 0, 0,
  0, 0, 0, 13, 0, 22, 0, 26, 4, 27, 0, 0,
  0, 0, 0, 14, 0, 23, 0, 0, 5, 0, 0, 0,
  28, 29, 30, 15, 0, 24, 31, 32, 6, 33, 0, 0,
  0, 0, 0, 16, 34, 25, 0, 0, 7, 0, 0, 0,
  0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 35, 19, 36, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 37, 38, 21, 0, 0, 0, 0, 0, 0, 0, 0,
];

const animationDuration = Math.max(...delays) * crosswordAnimationSpeed;

export const SkillsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const modeRef = useRef<CrosswordMode>("hidden");
    const [mode, setMode] = useState<CrosswordMode>("hidden");
    const [duration, setDuration] = useState(animationDuration);

    useObservable(AnimationSpeedService.getInstance().modificator, (it) =>
      setDuration(animationDuration * it)
    );

    useEffect(() => {
      let timer: NodeJS.Timer;
      if (isFocused && modeRef.current !== "shown") {
        modeRef.current = "animated";
        setMode("animated");
        timer = setTimeout(() => {
          modeRef.current = "shown";
          setMode("shown");
        }, duration);
      }
      if (isFocused && modeRef.current === "shown") {
        onAnimationFinished && onAnimationFinished();
      }
      return () => clearTimeout(timer);
    }, [isFocused, duration, modeRef.current]);

    return (
      <BasePage ref={ref} number={1}>
        <div className={styles.container}>
          <h3>Technical Skills</h3>
          <Crossword
            characters={characters}
            labels={labels}
            delays={delays}
            mode={mode}
          />
        </div>
      </BasePage>
    );
  }
);
