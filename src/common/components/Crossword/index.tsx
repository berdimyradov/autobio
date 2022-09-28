import { useMemo } from "react";
import styles from "./styles.module.css";

type Props = {
  characters: string[];
  labels: (string | null)[];
  delays: number[];
};

const cell = getComputedStyle(document.documentElement).getPropertyValue(
  "--cell"
);

export const Crossword = (props: Props) => {
  const { characters, labels, delays } = props;

  const boardSize = useMemo(() => {
    const dimension = Math.sqrt(characters.length);
    return {
      width: `calc(${cell} * ${dimension})`,
      height: `calc(${cell} * ${dimension})`,
    };
  }, [characters.length]);

  return (
    <div className={styles.board} style={boardSize}>
      {characters.map((char, index) => {
        return char === "-" ? (
          <div key={`cell-${index}-blank`}></div>
        ) : (
          <div key={`cell-${index}-char`} className={styles.cell}>
            <div
              className={styles.card}
              style={{
                animationDelay: `${delays[index] * 3}00ms`,
              }}
            >
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
