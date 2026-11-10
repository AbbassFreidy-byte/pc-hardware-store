import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="hero-container">
      <section className="hero">
        <h2>Browse Our PC Parts</h2>
        <p>High-performance parts at affordable prices.</p>
        <Link to="/ProductsPage" className="btn">
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Home;