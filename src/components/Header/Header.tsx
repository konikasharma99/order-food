import styles from "../Header/Header.module.css";
import { LOGO_URL } from "../../utils/common";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <img className={styles.headerLogo} src={LOGO_URL} />
      <ul className={styles.linksList}>
        <Link to={"/contact"} className={styles.linkStyles}>
          <li>Contact us</li>
        </Link>
        <Link to={"/about"} className={styles.linkStyles}>
          <li>About us</li>
        </Link>
        <Link to={"/"} className={styles.linkStyles}>
          <li>Home</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
