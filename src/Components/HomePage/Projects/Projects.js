import React from 'react';
import { useState } from 'react';
import './Projects.css';
import ProjectSlider from './ProjectSlider';
import citybus from './citybus.jpg';
import html1 from './html1.jpg';
import html2 from './html2.jpg';
import html3 from './html3.jpg';
import css1 from './css1.jpg';
import css3 from './css3.jpg';
import js1 from './js1.jpg';
import js2 from './js2.jpg';
import js3 from './js3.jpg';
import react1 from './react1.jpg';
import react2 from './react2.jpg';
import full1 from './full1.jpg';
import full2 from './full2.jpg';
import full3 from './full3.jpg';
const Projects = () => {
    const [projects, setProjects] = useState("All")
    const [isActive, setIsActive] = useState(false)
    const imgs = [

        //all
        { author: "Deshi Trolly", tag: "All", code: "https://github.com/Porgramming-Hero-web-course/full-stack-server-Thohanur", livesite: "https://deshi-trolly.web.app/", details: "A full stack site for a e-commerce site with authentication and admin panel using react node mongo firebase", src: `${full2}` },
        { author: "Fast-Travell", tag: "All", code: "https://github.com/Porgramming-Hero-web-course/react-auth-Thohanur", livesite: "https://fast-travell.web.app/", details: "A full stack site for a e-commerce site with authentication and admin panel using react node mongo firebase", src: `${full3}` },
        { author: "Team Builder", tag: "All", code: "https://github.com/Porgramming-Hero-web-course/simple-react-Thohanur", livesite: "https://make-your-football-tram.netlify.app/", details: "A simple react project using react hook and react router dom", src: `${react2}` },
        { author: "Basic E-commerce", tag: "All", code: "https://github.com/Thohanur/penguin-ecommerce", livesite: "https://thohanur.github.io/penguin-ecommerce/", details: "Basic html and css projects. using css Flex-Box property for made structure", src: `${html2}` },
        { author: "Testy Treate", tag: "All", code: "https://github.com/Thohanur/Testy-Treat", livesite: "https://thohanur.github.io/Testy-Treat/", details: "Restaurent design with dynamic search option using js and design with bootstrap and css", src: `${js3}` },
        { author: "Mega City Bus", code: "https://github.com/Thohanur/Mega-city-bus", livesite: "https://thohanur.github.io/Mega-city-bus/", tag: "All", details: "mega city bus is a calculating project of java script fot counting cost", src: `${citybus}` },
        { author: "Shopping Cart", tag: "All", code: "https://github.com/Thohanur/mobile-shopping-card", livesite: "https://thohanur.github.io/mobile-shopping-card/", details: "Shopping cart calculation made using java script and sedign using css", src: `${js2}` },
        
        { author: "Basic HTML", tag: "All", code: "https://github.com/Thohanur/fun-project-waiving", livesite: "https://thohanur.github.io/fun-project-waiving/", details: "It's a basic html and css projects. using css position property for made structure", src: `${css1}` },
        { author: "T-Commerce", tag: "All", code: "https://github.com/Thohanur/Thohanur-T-Commerce", livesite: "https://thohanur.github.io/Thohanur-T-Commerce/", details: "A e commerce site design using Bootstrap and css. added carosol and many kinds of effects", src: `${html3}` },



        //html
        { author: "Basic HTML", tag: "HTML", code: "https://github.com/Thohanur/NewPortpholio", livesite: "https://thohanur.github.io/NewPortpholio/", details: "It's a basic html and css projects. using css position property for made structure", src: `${html1}` },

        { author: "Basic E-commerce", tag: "HTML", code: "https://github.com/Thohanur/penguin-ecommerce", livesite: "https://thohanur.github.io/penguin-ecommerce/", details: "Basic html and css projects. using css Flex-Box property for made structure", src: `${html2}` },


        { author: "T-Commerce", tag: "HTML", code: "https://github.com/Thohanur/Thohanur-T-Commerce", livesite: "https://thohanur.github.io/Thohanur-T-Commerce/", details: "A e commerce site design using Bootstrap and css. added carosol and many kinds of effects", src: `${html3}` },


        //css
        { author: "Penguin E-commerce", tag: "CSS", code: "https://github.com/Thohanur/penguin-ecommerce", livesite: "https://thohanur.github.io/penguin-ecommerce/", details: "Basic html and css projects. using css Flex-Box property for made structure", src: `${html2}` },

        { author: "T-Commerce", tag: "CSS", code: "https://github.com/Thohanur/Thohanur-T-Commerce", livesite: "https://thohanur.github.io/Thohanur-T-Commerce/", details: "A e commerce site design using Bootstrap and css. added carosol and many kinds of effects", src: `${html3}` },

        { author: "Basic HTML", tag: "CSS", code: "https://github.com/Thohanur/NewPortpholio", livesite: "https://thohanur.github.io/NewPortpholio/", details: "It's a basic html and css projects. using css position property for made structure", src: `${html1}` },
        
        { author: "Basic HTML", tag: "CSS", code: "https://github.com/Thohanur/Fun-project-mooving-cursor", livesite: "https://thohanur.github.io/Fun-project-mooving-cursor/", details: "It's funny time pass css projects. using css and js window pointer porterity for detact cursur then design it", src: `${css3}` },

        { author: "Basic HTML", tag: "CSS", code: "https://github.com/Thohanur/fun-project-waiving", livesite: "https://thohanur.github.io/fun-project-waiving/", details: "It's a basic html and css projects. using css position property for made structure", src: `${css1}` },


        //js       
        { author: "Testy Treate", tag: "JS", code: "https://github.com/Thohanur/Testy-Treat", livesite: "https://thohanur.github.io/Testy-Treat/", details: "Restaurent design with dynamic search option using js and design with bootstrap and css", src: `${js3}` },
        { author: "Thoha-Bank", tag: "JS", code: "https://github.com/Thohanur/T-Bank", livesite: "https://thohanur.github.io/T-Bank/", details: "A simple calculation like a calculator made with js  design with boorstrap. its can calculate deposit and withdraw of a bank", src: `${js1}` },
        { author: "Mega City Bus", code: "https://github.com/Thohanur/Mega-city-bus", livesite: "https://thohanur.github.io/Mega-city-bus/", tag: "JS", details: "mega city bus is a calculating project of java script fot counting cost", src: `${citybus}` },
        { author: "Shopping Cart", tag: "JS", code: "https://github.com/Thohanur/mobile-shopping-card", livesite: "https://thohanur.github.io/mobile-shopping-card/", details: "Shopping cart calculation made using java script and sedign using css", src: `${js2}` },



        //react
        
        { author: "Team Builder", tag: "REACT", code: "https://github.com/Porgramming-Hero-web-course/simple-react-Thohanur", livesite: "https://make-your-football-tram.netlify.app/", details: "A simple react project using react hook and react router dom", src: `${react2}` },

        { author: "Club Details Finder", tag: "REACT", code: "https://github.com/Thohanur/Club-details-finder", livesite: "https://club-details-finder.netlify.app/", details: "You can find details of any club listed in English premier league made by react", src: `${react1}` },

        { author: "T-Courier", tag: "Full", code: "https://github.com/Thohanur/T-Courier-CLient", livesite: "https://t-courier-1fbe1.web.app/", details: "A full stack site for a courier service with authentication and admin panel using react node mongo firebase", src: `${full1}` },



        //full
        { author: "Fast-Travell", tag: "Full", code: "https://github.com/Porgramming-Hero-web-course/react-auth-Thohanur", livesite: "https://fast-travell.web.app/", details: "A full stack site for a e-commerce site with authentication and admin panel using react node mongo firebase", src: `${full3}` },
        { author: "T-Courier", tag: "REACT", code: "https://github.com/Thohanur/T-Courier-CLient", livesite: "https://t-courier-1fbe1.web.app/", details: "A full stack site for a courier service with authentication and admin panel using react node mongo firebase", src: `${full1}` },
        { author: "Deshi Trolly", tag: "Full", code: "https://github.com/Porgramming-Hero-web-course/full-stack-server-Thohanur", livesite: "https://deshi-trolly.web.app/", details: "A full stack site for a e-commerce site with authentication and admin panel using react node mongo firebase", src: `${full2}` },

    ];

    const filters = [
        // { name: "All", tag: "All",  status: false },
        { name: " HTML", tag: "HTML", status: false },
        { name: "CSS", tag: "CSS", status: false },
        { name: "JS", tag: "JS", status: false },
        { name: "React", tag: "REACT", status: false },
        { name: "Full Stack", tag: "Full", status: false }
    ];
    const handleFilter = (data) => {
        setProjects(data)
        setIsActive(!isActive);
    }
    return (
        <div>
            <div className="Projects-Section" id="Projects">
                <div className="container">
                    <div data-aos="slide-up"
                        data-aos-offset="300"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out">
                        <div className=" text-center Project-Text">My Projects</div>
                        <ul className="text-center pb-5">
                            <button className="btn btn-outline-info" onClick={() => handleFilter("All")}>ALL</button>
                            {filters.map(id => <button className='btn btn-outline-info mx-lg-2 mx-md-2 mx-sm-1' onClick={() => handleFilter(id.tag)}>{id.name}</button>)}
                        </ul>
                    </div>
                    <div className="row " data-aos="slide-up"
                        data-aos-offset="00"
                        data-aos-delay="50"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out">
                        {imgs.filter(tag => tag.tag === projects).map(data => <div className="col-md-6 col-sm-10  col-lg-4 mb-2">
                            <div className="box">
                                <div className="img" style={{ backgroundImage: `url(${data.src})`, backgroundPosition: 'center', backgroundSize: '100% 100%' }}></div>
                                <div className="overlay"></div>
                                <div className="overlay2"></div>
                                <div class="text">
                                    <span></span><span></span><span></span><span></span>
                                    <h3 class="">{data.author}</h3>
                                    <p>{data.details}</p>
                                    <a href={data.livesite} target="_blank" class="btn btn-warning">Live Site</a>
                                    <a href={data.code} target="_blank" class="btn btn-primary">Sourse Code</a>
                                </div>
                            </div>
                        </div>)}
                    </div>

                    <div className=" btn btn-primary fs-xl-5 fw-lighter d-block w-25 ms-auto">Load More>>> </div>
                </div >



            </div >
            <ProjectSlider />
        </div>
    );
};

export default Projects;