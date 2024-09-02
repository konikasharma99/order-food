import styles from "../Header/Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerMain}>
      <img
        className={styles.headerLogo}
        src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
      />
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="Search for food" />
        <img
          className={styles.searchLogo}
          src="https://cdn-icons-png.flaticon.com/512/61/61088.png"
        />
      </div>
      <ul className={styles.linksList}>
        <li>Order now</li>
        <li>About us</li>
      </ul>
    </div>
  );
};
export default Header;
