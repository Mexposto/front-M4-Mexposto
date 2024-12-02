import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`bleed ${styles.innerFooter}`}>Footer</div>
    </footer>
  );
};

export default Footer;
