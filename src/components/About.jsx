import React from 'react'
import styles from './About.module.css'
const About = () => {
  return (
    <div className="container py-5">
  <div className="row align-items-center text-center text-md-start">
    <div className="col-md-6">
      <h2 className="fw-bold text-primary">Empowering Your Business</h2>
      <p className="lead text-muted">
        We provide cutting-edge solutions to help you scale, innovate, and stay ahead of the competition.
      </p>
      <button className="btn btn-primary mt-3">Learn More</button>
    </div>
    <div className="col-md-6">
      <img src="./aboutus.avif" alt="Business" className="img-fluid rounded shadow" />
    </div>
  </div>
</div>

  )
}

export default About