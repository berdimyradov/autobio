import { FrontCover } from "../FrontCover";
import styles from "./styles.module.css";

export const CoverWithSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.book}>
          <div className={styles.cover}>
            <FrontCover />
          </div>
        </div>
        <div className={styles.side}>
          <h2>
            <span>Kerim Berdimyradov</span>
            <span>1992</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
