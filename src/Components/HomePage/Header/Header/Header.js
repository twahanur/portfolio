import React, { useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
const Header = () => {
    useEffect(() => {
        AOS.init({

        })
    }, [])
    return (
        <div className="headerSection" id="Home">
            <div className="headerBackground">

                <div className="Header-Typical fs-1" >
                    <div className="Thohanur"
                        data-aos="fade-down-right"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out">
                        I'm Thohanur Rahman
                    </div>
                    <p className="fw-bold">
                        {/* <span style={{ color: 'red' }}>W</span>
        <span style={{ color: 'green' }}>E</span>
        <span style={{ color: 'blue' }}>L</span>
        <span style={{ color: 'orange' }}>C</span>
        <span style={{ color: 'white' }}>O</span>
        <span style={{ color: 'pink' }}>M</span>
        <span style={{ color: 'yellow' }}>E</span> */}
                        <h2 className="text-info" 
                         data-aos="fade"
                         data-aos-offset="200"
                         data-aos-delay="200"
                         data-aos-duration="3000"
                         data-aos-easing="ease-in-out">WELCOME</h2>
                    </p>
                    <h3 className="fst-italic fw-light">To The Site Of {' '}
                        <Typical
                            loop={Infinity}
                            wrapper="i"
                            steps={[

                                'A Web Designer', 1000,
                                'A Content Creator', 1000,
                                'A Web Developer', 1000,
                                'A Youtuber', 1000,
                                'A Marketing Expert', 1000,
                                ' A Brother', 1000,
                                ' A Prince Of A Fathers Kingdom', 1000,

                            ]}

                        />
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;