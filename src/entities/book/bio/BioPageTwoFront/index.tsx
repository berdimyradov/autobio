import { VaraAdapter } from "shared/ui/vara-adapter";
import { drawWorkaround } from "shared/ui/vara-adapter/utils";
import { useObservable } from "shared/lib/hooks";
import { AnimationSpeedService } from "shared/lib/services";
import { NotebookPaper } from "shared/ui/templates/NotebookPaper";
import { BookPageProps } from "entities/book";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { TextProperties, TextStep, VaraType } from "vara";
import styles from "../styles.module.css";

const animationDuration = 8000;
const id = "bio-two-front";
const text = `Later in 2010 when I was 18 I enrolled in Baranovichi State University into engeening in the Faculty of Engineering and in 2015 received a degree in software engineering.  `;

export const BioPageTwoFront = React.forwardRef<HTMLDivElement, BookPageProps>(
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
