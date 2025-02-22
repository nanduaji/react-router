import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.logo}>YourCompany</p>
        <p className={styles.tagline}>Innovating the Future, One Step at a Time.</p>

        <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}><FaFacebook /></a>
          <a href="#" className={styles.icon}><FaTwitter /></a>
          <a href="#" className={styles.icon}><FaInstagram /></a>
          <a href="#" className={styles.icon}><FaLinkedin /></a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
