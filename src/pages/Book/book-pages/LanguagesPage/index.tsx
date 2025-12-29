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
  't', 'u', 'r', 'k', 'm', 'e', 'n',
  '-', '-', 'u', '-', '-', 'n', '-',
  '-', '-', 's', '-', '-', 'g', '-',
  '-', '-', 's', '-', '-', 'l', '-',
  '-', '-', 'i', '-', '-', 'i', '-',
  '-', '-', 'a', '-', '-', 's', '-',
  '-', '-', 'n', '-', '-', 'h', '-',
];
// prettier-ignore
const labels = [
  '1', null, '2', null, null, '3', null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
];
// prettier-ignore
const delays = [
  1, 2, 3, 4, 5, 6, 7,
  0, 0, 8, 0, 0, 15, 0,
  0, 0, 9, 0, 0, 16, 0,
  0, 0, 10, 0, 0, 17, 0,
  0, 0, 11, 0, 0, 18, 0,
  0, 0, 12, 0, 0, 19, 0,
  0, 0, 13, 0, 0, 20, 0,
  0, 0, 14, 0, 0, 21, 0,
];

const animationDuration = Math.max(...delays) * crosswordAnimationSpeed;

export const LanguagesPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const mode = useRef<CrosswordMode>("animated");
    const [duration, setDuration] = useState(animationDuration);

    useObservable(AnimationSpeedService.getInstance().modificator, (it) =>
      setDuration(animationDuration * it)
    );

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;
      if (isFocused && mode.current !== "shown") {
        timer = setTimeout(() => {
          mode.current = "shown";
          onAnimationFinished && onAnimationFinished();
        }, duration);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [isFocused, duration]);

    return (
      <BasePage ref={ref} number={2}>
        <div className={styles.container}>
          <h3>Languages</h3>
          <Crossword
            characters={characters}
            labels={labels}
            delays={delays}
            mode={mode.current}
          />
        </div>
      </BasePage>
    );
  }
);
