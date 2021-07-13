import React from 'react';
import './SocialMedia.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="social-media-component">
            <div className="icon-bar">
                <a href="https://www.facebook.com/thohanurrahman.rahman/" target="_blank" className="facebook">
                    <i><FaFacebookSquare /></i>
                     
                </a>
                <a href="https://www.instagram.com/thohanur_rahman/" target="_blank" className="instagram">
                    <i><FaInstagramSquare /></i>
                     
                </a>
                <a href="https://www.linkedin.com/in/twahanur-rahman-b615271ba/" target="_blank" className="linkdin">
                    <i><FaLinkedin /></i>
                     
                </a>
                <a href="https://github.com/Thohanur" target="_blank" className="github">
                    <i><FaGithubSquare /></i>
                     
                </a>
                <a href="https://twitter.com/ThohanurRahman" target="_blank"  className="twitter">
                    <i><FaTwitterSquare /></i>
                     
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;