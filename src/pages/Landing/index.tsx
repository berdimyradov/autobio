import { Link } from "react-router-dom";
import meImage from "../../assets/me.png";
// import styles from "./App.module.css";

function Landing() {
  return (
    <div className="">
      <header className="">
        <Link to="/book">
          <img src={meImage} className="" alt="logo" />
        </Link>
        <p>
          <code>Berdimyradov Kerim</code>
        </p>
        <a
          className=""
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

export default Landing;
