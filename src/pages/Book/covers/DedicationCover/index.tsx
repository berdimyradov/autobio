import { VaraAdapter } from "adapters/VaraAdapter";
import { BlankPage } from "common/templates/BlankPage";
import React, { RefObject, useCallback, useRef } from "react";
import { VaraType } from "vara";
import styles from "./styles.module.css";

type Props = {
  onVaraRef: (ref: RefObject<VaraType>) => void;
  isVisible: boolean;
};

export const DedicationCover = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { onVaraRef, isVisible } = props;
    const onChange = useCallback((node: RefObject<VaraType>) => {
      onVaraRef(node);
    }, []);

    let isVaraAlreadyRendered = useRef<boolean>(false);
    if (isVisible) {
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
                    duration: 3000,
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
