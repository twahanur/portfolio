import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css'
import ProgressLine from "./ProgressLine";
const Experience = () => {
    useEffect(() => {
        AOS.init(
            {
                offset: 400,
                duration: 1000,
                easing: 'ease',
            }
        );
    }, [])
    return (
        <div className="ExperienceSection" id="Experience">
            <div className="row container m-auto">
                <div className="col-md-6 col-sm-12 col-lg-6" data-aos="slide-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <div className="experienceYear">
                        <h1>2<span style={{ color: 'red' }}>.</span></h1>
                        <div className="d-flex">
                            <div className="experienceDot ms-auto fw-lighter"></div>
                            <div className="text-white experienceText ms-auto">
                                Years <br /> Experience <br /> Working
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 pt-5" data-aos="slide-up"
                    data-aos-offset="20"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out">
                    <div className="">
                        <div className="mt-5 mb-5 text-white fs-1">
                            <h1>A Great Experience</h1>
                            <h5 className="fw-lighter">I never feel  its enough. thats why i am kept learning and learning it</h5>
                        </div>
                        <h1>Font-End</h1>
                        <ProgressLine
                            label="HTML"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "90%", color: "tomato" }]} />
                        <ProgressLine
                            label="CSS"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "85%", color: "tomato" }]} />
                        <ProgressLine
                            label="BOOTSTRAP"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "95%", color: "tomato" }]} />
                        <ProgressLine
                            label="JAVA SCRIPT"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "80%", color: "tomato" }]} />
                        <ProgressLine
                            label="REACT JS"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "75%", color: "tomato" }]} />
                        <ProgressLine
                            label="REACT NATIVE"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "60%", color: "tomato" }]} />
                        <h1>Back-End</h1>
                        <ProgressLine
                            label="Node js"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "73%", color: "red" }]} />
                        <ProgressLine
                            label="MONGODB"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "65%", color: "red" }]} />
                        <ProgressLine
                            label="Express js"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "63%", color: "red" }]} />
                        <ProgressLine
                            label="firebase"
                            backgroundColor="lightblue"
                            visualParts={[{ percentage: "72%", color: "red" }]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;