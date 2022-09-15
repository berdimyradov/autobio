import clsx from "clsx";
import { FiniteAnimation } from "pages/Book/book-pages";
import { useEffect } from "react";
import styles from "./styles.module.css";

type Props = {
  speedMode?: 1 | 2 | 3 | 4; // 1 - slow(default) || 2 - medium || 3 - fast || 4 - super fast
} & FiniteAnimation;

const setCssVar = document.documentElement.style.setProperty.bind(
  document.documentElement.style
);

export const Greeting = (props: Props) => {
  const { speedMode, onAnimationFinished } = props;
  useEffect(() => {
    let animationDuration = 8.5; // for speedMode === 1
    switch (speedMode) {
      case 2:
        setCssVar("--typewriterSpeed", "2s");
        setCssVar("--fadeInDelay", "1s");
        setCssVar("--fadeInUpSpeed", "1.5s");
        setCssVar("--fadeOutDelay", "1s");
        setCssVar("--fadeOutUpSpeed", "0.5s");
        animationDuration = 6;
        break;
      case 3:
        setCssVar("--typewriterSpeed", "1.25s");
        setCssVar("--fadeInDelay", "0.25s");
        setCssVar("--fadeInUpSpeed", "1s");
        setCssVar("--fadeOutDelay", "0.25s");
        setCssVar("--fadeOutUpSpeed", "0.25s");
        animationDuration = 3;
        break;
      case 4:
        setCssVar("--typewriterSpeed", "1s");
        setCssVar("--fadeInDelay", "0s");
        setCssVar("--fadeInUpSpeed", "0.5s");
        setCssVar("--fadeOutDelay", "0s");
        setCssVar("--fadeOutUpSpeed", "0.25s");
        animationDuration = 1.75;
        break;
    }

    const timer = setTimeout(() => {
      onAnimationFinished();
    }, animationDuration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [speedMode]);
  return (
    <div className={clsx(styles.container)}>
      <h1 className={styles.title}>Hello &#128075;, my name is Kerim.</h1>
      <p className={styles.subtitle}>Let me tell you about myself &#128522;</p>
    </div>
  );
};
