import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/">Inicio</a>
      <a href="/dashAdmin">DashBoard</a>
      <a href="/suppliers">Proveedores</a>
      <a href="/users">Usuarios</a>
    </footer>
  );
};

export default Footer;
