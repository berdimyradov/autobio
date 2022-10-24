import styles from "./styles.module.css";

export const InfoLog = () => {
  return (
    <div className={styles.infoLog}>
      <div className={styles.content}>
        <div className={styles.title}>Presentaion Mode</div>
        <div className={styles.message}>
          User interactions are disabled. Fast-forward to finish faster!
        </div>
      </div>
    </div>
  );
};
