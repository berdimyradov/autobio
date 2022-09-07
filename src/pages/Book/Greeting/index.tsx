import React from "react";
import styles from "./styles.module.css";

export const Greeting = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello &#128075;, my name is Kerim.</h1>
      <p className={styles.subtitle}>Let me tell you about myself &#128522;</p>
    </div>
  );
};
