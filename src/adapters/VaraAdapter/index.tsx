import { RefObject, useEffect, useRef } from "react";
import Vara, { TextStep, TextProperties, VaraType } from "vara";
import styles from "./styles.module.css";
import { FONTS } from "./utils";

type Props = {
  onVaraRef: (ref: RefObject<VaraType>) => void;
  textSteps: TextStep[];
  config?: TextProperties;
};

export const VaraAdapter = (props: Props) => {
  const { onVaraRef, textSteps, config } = props;
  const element = useRef<HTMLDivElement>(null);
  const randomElemId = (Math.random() + 1).toString(36).substring(7);
  const ref = useRef<VaraType | null>(null);

  useEffect(() => {
    if (!ref?.current) {
      const elem = `#${element.current?.id}`;
      ref.current = new Vara(elem, FONTS, textSteps, config);
      onVaraRef(ref);
    }
  }, []);

  return (
    <div
      ref={element}
      id={`vara${randomElemId}`}
      className={styles.adapter}
    ></div>
  );
};
