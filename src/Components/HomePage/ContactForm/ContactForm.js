import React from 'react';
import "./ContactForm.css";
import { MdPhoneInTalk, MdLocationCity, MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaTwitterSquare, FaDribbbleSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cloud1 from './cloud1.png'
import cloud2 from './cloud2.png'
import cloud3 from './cloud3.png'
import cloud4 from './cloud4.png'
import cloud5 from './cloud5.png'

const ContactForm = () => {
    function sendEmail(e) {
        console.log("console result", e);
        e.preventDefault();
        emailjs.sendForm('service_8rd2hzq', 'template_erhwjjt', e.target, 'user_G8Q7Qv5SpbOY1tbrLghVR')
            .then((result) => {
                console.log(result.text);
                toast.success("Email send successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                console.log(error.text);
                toast.error('Email send unSuccessful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        e.target.reset();
    }
    return (

        <div className="ContactSection py-5" id="Contact" >
            <ToastContainer
                transition={Slide} />
            <div className="container">
                <div className="d-flex justify-content-center pb-5">
                    <div className="contactTouch px-5 py-3 fw-bold d-flex">
                        GET IN TOUCH
                    </div>
                </div>

                <div className="row row-cols-2 direction py-5 mb-5" data-aos="slide-up"
                    data-aos-offset="300"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out">
                    <div className="col-sm-3 col-md-3">
                        <div className="icon d-flex justify-content-start ps-5"><i><MdLocationCity /></i></div>
                        <h3 className="fw-bold">Address</h3>
                        <h6 className="fw-lighter">Gutudia, Dumuria, Khulna, Bangladesh</h6>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="icon d-flex justify-content-start ps-5"><i><MdPhoneInTalk /></i></div>
                        <h3 className="fw-bold">Phone</h3>
                        <h6 className=" fw-lighter">+8801708902648</h6>
                        <h6 className=" fw-lighter">+8801642182314</h6>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="icon d-flex justify-content-start ps-5"><i><MdEmail /></i></div>
                        <h3 className="fw-bold">Email</h3>
                        <h6 className=" fw-lighter">thohanur143@gmail.com</h6>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="icon d-flex justify-content-start ps-5"><i><RiMessengerFill /></i></div>
                        <h3 className="fw-bold">Facebook Chat</h3>
                        <h6 className=" fw-lighter">me.thohanur</h6>
                    </div>
                </div>


                
                    <h1>Let's Connect</h1>
                    <div className="row row-cols-2 fs-4" >
                        <a href="https://www.facebook.com/thohanurrahman.rahman/" target="_blank" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="facebook"><FaFacebookSquare /> </i>  <span>Facebook</span></a>
                        <a href="https://www.instagram.com/thohanur_rahman/" target="_blank" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="instagram"><FaInstagramSquare /> </i> <span>Instagram</span></a>
                        <a href="https://www.linkedin.com/in/twahanur-rahman-b615271ba/" target="_blank" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="linkdin"><FaLinkedin /> </i> <span>Linkdin</span></a>
                        <a href="https://twitter.com/ThohanurRahman" target="_blank" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="twitter"><FaTwitterSquare /> </i> <span>Twitter</span></a>
                        <a href="#" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="dribble"><FaDribbbleSquare /> </i> <span>Dribble</span></a>
                        <a href="https://github.com/Thohanur" target="_blank ContactSocialMedia" className="col-sm-4 col-md-2 py-2 icon ContactSocialMedia"><i className="github"><FaGithubSquare /> </i> <span>github</span></a>
                    </div>
                


                <div className="mx-auto mt-lg-5 mt-md-3 mt-sm-2">
                    <h1 className="text-start text-info fw-bold">Fell Free To Contact With Me</h1>
                    <form className="pt-5 pb-5 form d-flex justify-content-center" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-12 mx-auto form-group">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input className="form-control" type="text" name="name" required placeholder="Name" />
                            </div>
                            <div className="col-12 mx-auto form-group pt-2">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input className="form-control" type="email" name="email" required placeholder="Email" />
                            </div>
                            <div className="col-12 mx-auto form-group pt-2">
                                <label>Subject</label>
                                <textarea className="form-control" name="subject" required placeholder="Subject" />
                            </div>
                            <div className="col-12 mx-auto form-group pt-2">
                                <label>Message</label>
                                <textarea className="form-control" name="message" required placeholder="Message" />
                            </div>
                            <div className="col-12 mx-auto  pt-2 d-flex justify-content-end">
                                <input className="btn btn-outline-info" type="submit" value="Send Message" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <div className="clouds">
                <img src={cloud1} alt="" style={{ '--i': 1 }} />
                <img src={cloud2} alt="" style={{ '--i': 2 }} />
                <img src={cloud3} alt="" style={{ '--i': 3 }} />
                <img src={cloud4} alt="" style={{ '--i': 4 }} />
                <img src={cloud5} alt="" style={{ '--i': 5 }} />
                <img src={cloud3} alt="" style={{ '--i': 6 }} />
                <img src={cloud4} alt="" style={{ '--i': 7 }} />
                <div className="container-fluid CopyRight">
                    <div className="row">
                        <div className="m-0 text-center col-md-6 col-sm-12 col-lg-6">
                            Copyright &copy;
                            <span> {new Date().getFullYear()} Thohanur_Rahman </span>
                        </div>
                        <div className="m-0 text-center col-md-6 col-sm-12 col-lg-6">
                            Made with React Js ❤️ by Thohanur Rahman 🔥
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;