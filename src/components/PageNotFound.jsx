import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorText}>Page Not Found</h2>
      <p className={styles.description}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles.homeButton}>Go Home</Link>
    </div>
  );
};

export default PageNotFound;
