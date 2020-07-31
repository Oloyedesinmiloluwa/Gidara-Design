import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left">
          <div className="category">
            <p>Store</p>
            <a href="">Catalog</a>
            <a href="">Popular</a>
            <a href="">Features</a>
          </div>
          <div className="category">
            <p>About</p>
            <a href="">Catalog</a>
            <a href="">Popular</a>
            <a href="">Features</a>
          </div>
          <div className="category">
            <p>Catalog</p>
            <a href="">Catalog</a>
            <a href="">Popular</a>
            <a href="">Features</a>
          </div>
        </div>
        <div className="footer-right">
          <img src="/gidara-logo.jpg" />
          <div>
            <p> Gidara</p>
            <p>Your music career success partner</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2018. All rights reserved</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sinmiloluwa-oloyede-749077106/"><TwitterIcon /></a>
          <a href="https://www.github.com/oloyedesinmiloluwa"><FacebookIcon /></a>
          <a href="https://www.linkedin.com/in/sinmiloluwa-oloyede-749077106/"><YoutubeIcon /></a>
          <a href="https://www.github.com/oloyedesinmiloluwa"><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
