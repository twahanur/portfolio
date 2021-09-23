import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'
import Typical from 'react-typical'
import AboutImg from './pp2.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
const About = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 100,
                duration: 1000,
                easing: 'ease',
            }
        );
    }, [])
    return (
        <div className="About-Container" id="About">
            <div className="row container m-auto">
                <div className="col-md-6 col-sm-12 img" data-aos="fade-up">
                    <img src={AboutImg} className="img-fluid" />
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12 text-white   d-flex align-items-center justify-content-end">
                    <div data-aos="fade-up">
                        <h1>Hello, <Typical className="text-info "
                            loop={Infinity}
                            wrapper="i"
                            steps={[

                                'I am Thohanur Rahman', 1000,
                                'I am a web developer', 1000,
                                'I am starting journey in 2019', 1000,
                                'I am Fully dedicated in web development', 1000,
                                'I am born in Khulna ', 1000,
                               
                            ]}

                        />.</h1>
                        <h4 className="text-start">
                            AssalamOwyalaicum ❤️ ❤️ ❤️
                           <br/> I am hungry for knowledge and responsible, and deeply interested in web development. I love to work with a growth-oriented amazing team and contribute to the development of the organization while upgrading my skill set and knowledge.
                        </h4>
                        <a href="#Contact"><button className="btn btn-outline-primary">Contact With Me</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;