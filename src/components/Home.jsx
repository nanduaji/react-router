import React from 'react';
import styles from './Home.module.css';
import Button from 'react-bootstrap/esm/Button';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.companyTitle}>Welcome to <span>YourCompany</span></h1>
      <p className={styles.companyTagline}>
        Innovating the Future, One Step at a Time.
      </p>

      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="firstcontainer col-md-6 text-center">
            <img src="./users.avif" alt="Team" className="img-fluid" />
          </div>
          <div className="Secondcontainer col-md-6 text-center">
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <p className="lead">
              Empowering businesses with innovative solutions and cutting-edge technology.
            </p>
            <Button  className="primary" style={{borderRadius:'50px'}}>Read More</Button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
