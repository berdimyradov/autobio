import { RefObject, useEffect, useRef } from "react";
import Vara, { TextStep, TextProperties, VaraType } from "vara";
import styles from "./styles.module.css";

// NOTE: see: https://raw.githubusercontent.com/akzhy/Vara/master/src/vara.js
const FONTS =
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json";
  // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json";

const varaConfig: Partial<TextStep> = {
  fontSize: 18,
  strokeWidth: 1.75,
  delay: 750,
  duration: 1500,
  letterSpacing: 3,
};

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
