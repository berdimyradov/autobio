import React, { RefObject, useCallback, useRef, useState } from "react";
import { NotebookPaper } from "shared/ui/templates/NotebookPaper";
import { TextStep, TextProperties, VaraType } from "vara";
import { BookPageProps } from "entities/book";
import { VaraAdapter } from "shared/ui/vara-adapter";
import { drawWorkaround } from "shared/ui/vara-adapter/utils";
import styles from "../styles.module.css";
import { useObservable } from "shared/lib/hooks";
import { AnimationSpeedService } from "shared/lib/services";

const animationDuration = 4000;
const id = "bio-two-back";
const text = `After graduating I enrolled in Belarusian State University of Informatics and Radioelectronics and a year later I received my master's degree in computer science.`;

export const BioPageTwoBack = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const textSteps: TextStep[] = [{ id, text, y: 150, x: 55 }];
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
      (node: RefObject<VaraType | null>) => {
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
