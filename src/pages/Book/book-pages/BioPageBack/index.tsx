import React, { RefObject, useCallback, useRef } from "react";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { TextStep, TextProperties, VaraType } from "vara";
import { BookPageProps } from "pages/Book/book-pages";
import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import hasbikWave from "assets/gifs/hasbik-pizza.gif";
import styles from "./styles.module.css";

const animationDuration = 4 * 1000;
const id = "bio-back";
const text = `In 2008 at the age of 15 I got a scholarship to study abroid in USA as an exchange student. `;
const anotherOne = `Later in 2010 when I was 18 I enrolled in Baranovichi State University into engeening in the Faculty of Engineering and in 2015 received a degree in software engineering.  `;
const anotherTwo = `After graduating I enrolled in Belarusian State University of Informatics and Radioelectronics and a year later I received my master's degree in computer science.`;
const anotherThree = `At the same time while I was studying for my master's degree I started my career as a software developer.`;

export const BioPageBack = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 225, x: 55 }];
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
            <p>🇺🇸 🥤 🍕</p>
          </div>
        </div>
      </NotebookPaper>
    );
  }
);
