import styles from "../Header/Header.module.css";
import { SEARCH_BAR_LOGO, LOGO_URL } from "../../utils/common";
const Header = () => {
  return (
    <div className={styles.headerMain}>
      <img className={styles.headerLogo} src={LOGO_URL} />
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="Search for food" />
        <img className={styles.searchLogo} src={SEARCH_BAR_LOGO} />
      </div>
      <ul className={styles.linksList}>
        <li>Order now</li>
        <li>About us</li>
      </ul>
    </div>
  );
};
export default Header;
