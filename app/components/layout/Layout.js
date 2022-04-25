import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
