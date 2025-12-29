import { VaraAdapter } from "shared/ui/vara-adapter";
import { drawWorkaround } from "shared/ui/vara-adapter/utils";
import { BlankPage } from "shared/ui/templates/BlankPage";
import { BookPageProps } from "entities/book";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { VaraType } from "vara";
import styles from "./styles.module.css";
import { useObservable } from "shared/lib/hooks";
import { AnimationSpeedService } from "shared/lib/services/AnimationSpeed";

const animationDuration = 1500;

export const DedicationPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    const [duration, setDuration] = useState(animationDuration);

    useObservable(AnimationSpeedService.getInstance().modificator, (it) => {
      setDuration(animationDuration * it);
    });

    const onChange = useCallback(
      (node: RefObject<VaraType | null>) => {
        drawWorkaround(() => {
          node?.current?.draw("dedication1", duration);
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
      <BlankPage ref={ref} className={styles.blankPage}>
        <div className={styles.container}>
          <div className={styles.vara}>
            {isVaraAlreadyRendered.current && (
              <VaraAdapter
                onVaraRef={onChange}
                textSteps={[
                  {
                    id: "dedication1",
                    text: "Dedicated to my fans :)",
                    fontSize: 18,
                    strokeWidth: 1.75,
                    letterSpacing: 3,
                    autoAnimation: false,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </BlankPage>
    );
  }
);
