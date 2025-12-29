import { VaraAdapter } from "shared/ui/vara-adapter";
import { drawWorkaround } from "shared/ui/vara-adapter/utils";
import hasbikMoney from "shared/assets/gifs/hasbik-money-1.gif";
import { useObservable } from "shared/lib/hooks";
import { AnimationSpeedService } from "shared/lib/services";
import { NotebookPaper } from "shared/ui/templates/NotebookPaper";
import { BookPageProps } from "entities/book";
import React, { RefObject, useCallback, useRef, useState } from "react";
import { TextProperties, TextStep, VaraType } from "vara";
import styles from "../styles.module.css";

const animationDuration = 8000;
const id = "bio-three-front";
const text = `At the same time while I was studying for my master's degree I started my career as a software developer.`;

export const BioPageThreeFront = React.forwardRef<
  HTMLDivElement,
  BookPageProps
>((props, ref) => {
  const { isFocused, onAnimationFinished } = props;
  const textSteps: TextStep[] = [{ id, text, y: 150 }];
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
        <div className={styles.gif}>
          <img
            src={hasbikMoney}
            className="box-shadow-3d"
            alt="hasbik counting money"
          />
        </div>
      </div>
    </NotebookPaper>
  );
});
