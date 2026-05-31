import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-left"></div>
  <div className="copyright">
    &copy; 2026 PC Hardware Store. All rights reserved.
  </div>
  <div className="footer-right">
    <div className="social-media">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ fontSize: 30, color: "#ffffff" }} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon style={{ fontSize: 30, color: "#ffffff" }} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <GithubIcon style={{ fontSize: 30, color: "#ffffff" }} />
      </a>
    </div>
    <Link to="/About" className="contact-link">Contact Us</Link>
  </div>
</footer>
  );
};

export default Footer;
