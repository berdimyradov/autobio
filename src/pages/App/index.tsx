import { Link } from "react-router-dom";
import meImage from "../../assets/me.png";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/book">
          <img src={meImage} className={styles.logo} alt="logo" />
        </Link>
        <p>
          <code>Berdimyradov Kerim</code>
        </p>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/berdimyradov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
