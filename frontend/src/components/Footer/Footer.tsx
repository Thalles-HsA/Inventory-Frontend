import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>Projeto Inventory &copy; 2023 | Desenvolvido por <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank" rel="noreferrer">Thalles Henrique</a> </p>
    </footer>
  );
};

export default Footer;
