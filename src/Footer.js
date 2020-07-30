import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

import './footer.scss';

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
                                <TwitterIcon />
                                <FacebookIcon />
                                <YoutubeIcon />
                                <InstagramIcon />
                            </div>
                    </div>
                </footer>
    )
}

export default Footer
