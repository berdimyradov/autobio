import clsx from "clsx";
import { FiniteAnimation } from "entities/book";
import { greetingDuration } from "pages/book/config";
import { useEffect } from "react";
import styles from "./styles.module.css";

const setCssVar = document.documentElement.style.setProperty.bind(
  document.documentElement.style
);

export const Greeting = (props: FiniteAnimation) => {
  const { onAnimationFinished } = props;
  useEffect(() => {
    switch (greetingDuration) {
      case 6000:
        setCssVar("--typewriterSpeed", "2s");
        setCssVar("--fadeInDelay", "1s");
        setCssVar("--fadeInUpSpeed", "1.5s");
        setCssVar("--fadeOutDelay", "1s");
        setCssVar("--fadeOutUpSpeed", "0.5s");
        break;
      case 3000:
        setCssVar("--typewriterSpeed", "1.25s");
        setCssVar("--fadeInDelay", "0.25s");
        setCssVar("--fadeInUpSpeed", "1s");
        setCssVar("--fadeOutDelay", "0.25s");
        setCssVar("--fadeOutUpSpeed", "0.25s");
        break;
    }

    const timer = setTimeout(() => {
      onAnimationFinished && onAnimationFinished();
    }, greetingDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className={clsx(styles.container)}>
      <h1 className={styles.title}>Hello &#128075;, my name is Kerim.</h1>
      <p className={styles.subtitle}>Let me tell you about myself &#128522;</p>
    </div>
  );
};
