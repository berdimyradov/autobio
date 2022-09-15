import { VaraAdapter } from "adapters/VaraAdapter";
import { drawWorkaround } from "adapters/VaraAdapter/utils";
import { NotebookPaper } from "common/templates/NotebookPaper";
import { calculateAge } from "common/utils";
import { BookPageProps } from "pages/Book/book-pages";
import React, { RefObject, useCallback, useRef } from "react";
import { TextProperties, TextStep, VaraType } from "vara";

const animationDuration = 40 * 1000;
// const animationDuration = 2 * 1000;
const age = calculateAge(new Date("10/14/1992"), new Date());
const id = "bio-front";
const text = `Hello my dear reader. Let's start our journey and introduce you myself. As you already may know my name is Kerim Berdimyradov.  I was born on October 14, 1992 which means that right now I'm ${age} years old :). My childhood years were spent in sunny Turkmenistan.  In 2008 at the age of 15 I got a scholarship to study abroid in USA as an exchange student.  Later in 2010 when I was 18 I enrolled in Baranovichi State University into engeening in the Faculty of Engineering and in 2015 received a degree in software engineering.  After graduating I enrolled in Belarusian State University of Informatics and Radioelectronics and a year later I received my master's `;

export const BioPageFront = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isVisible, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text }];
    const config: TextProperties = {
      fontSize: 12,
      strokeWidth: 2,
      letterSpacing: 1.5,
      autoAnimation: false,
    };
    console.log("BioPageFront:props:", props);

    const onChange = useCallback((node: RefObject<VaraType>) => {
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
        {isVaraAlreadyRendered.current && (
          <VaraAdapter
            onVaraRef={onChange}
            textSteps={textSteps}
            config={config}
          />
        )}
      </NotebookPaper>
    );
  }
);
