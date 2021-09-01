import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Student Forum</h1>
          <p className="lead">
            Creating a Platform for Somaiya Students to connect and share their thoughts
             with each other!!!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing
