import React from 'react';
import { Link } from "react-router-dom";
import BackgroundMedia from '../components/BackgroundMedia';
import homeVideo from "../assets/videos/IntroVid.mp4";
import "../styles/Home.css";

const Home = () => {
  return (
    <section class="hero">
      <BackgroundMedia src={homeVideo} />
      <h2>Build Your Dream PC</h2>
      <p>High-performance parts at affordable prices.</p>
       <Link to="/ProductsPage" class="btn">Shop Now</Link>
    </section>
    );  
};

export default Home;