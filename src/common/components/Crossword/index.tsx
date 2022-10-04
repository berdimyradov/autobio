import { useCallback, useMemo } from "react";
import styles from "./styles.module.css";

export type CrosswordMode = "hidden" | "animated" | "shown";

type Props = {
  characters: string[];
  labels: (string | null)[];
  delays: number[];
  mode?: CrosswordMode;
};

const cell = getComputedStyle(document.documentElement).getPropertyValue(
  "--cell"
);

export const Crossword = (props: Props) => {
  const { characters, labels, delays, mode = "hidden" } = props;

  const boardSize = useMemo(() => {
    const dimension = Math.sqrt(characters.length);
    return {
      width: `calc(${cell} * ${dimension})`,
      height: `calc(${cell} * ${dimension})`,
    };
  }, [characters.length]);

  const calcCardStyle = useCallback(
    (index: number) => {
      if (mode === "hidden") {
        return {
          animationName: undefined,
        };
      }

      if (mode === "shown") {
        return {
          animationName: undefined,
          animationFillMode: "forwards",
        };
      }

      return {
        animationName: styles.rotateCell,
        animationDuration: "0.8s",
        animationDelay: `${delays[index] * 3}00ms`,
        animationFillMode: "forwards",
      };
    },
    [mode]
  );

  return (
    <div className={styles.board} style={boardSize}>
      {characters.map((char, index) => {
        return char === "-" ? (
          <div key={`cell-${index}-blank`}></div>
        ) : (
          <div key={`cell-${index}-char`} className={styles.cell}>
            <div className={styles.card} style={calcCardStyle(index)}>
              <div className={styles.front}>
                {labels[index] && (
                  <label className="label">{labels[index]}</label>
                )}
              </div>
              <div className={styles.back}>
                {labels[index] && (
                  <label className="label">{labels[index]}</label>
                )}
                <span className="char">{char}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};