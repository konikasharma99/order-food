import styles from "../Header/Header.module.css";
import { LOGO_URL } from "../../utils/common";

const Header = () => {
  return (
    <div className={styles.headerMain}>
      <img className={styles.headerLogo} src={LOGO_URL} />
      <ul className={styles.linksList}>
        <li>Order now</li>
        <li>About us</li>
      </ul>
    </div>
  );
};
export default Header;
