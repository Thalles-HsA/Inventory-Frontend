import styles from '@/styles/footer.module.scss';

const Footer = (): JSX.Element => (
  <footer className={styles.footer} data-testid="footer">
    <p>
      Projeto Inventory &copy; 2023 | Desenvolvido por
      <a href="https://www.linkedin.com/in/thalleshsa/" target="_blank" rel="noreferrer"> Thalles Henrique</a>
    </p>
  </footer>
);

export default Footer;
