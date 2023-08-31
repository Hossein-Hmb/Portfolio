import React from "react";
import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";
import "../CSS_files/FooterCSS.css";

function Footer() {
  return (
    <div className="Footer">
      <h1 className="footer-h1">Hossein Hajmirbaba</h1>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/hossein-hajmirbaba"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon">
          <SiLinkedin size={40} />
        </a>
        <a
          href="https://twitter.com/H_Hmb10"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon">
          <SiTwitter size={40} />
        </a>
        <a
          href="https://github.com/Hossein-Hmb"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon">
          <SiGithub size={40} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
