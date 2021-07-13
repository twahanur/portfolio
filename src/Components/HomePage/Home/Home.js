import React from 'react';
import Header from '../Header/Header/Header';
import About from '../About/About';
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Footer from '../../CommonComponents/Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import Blog from '../Blog/Blog';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <About/>
            <Experience />
            <Projects/>
            <Blog/>
            <ContactForm/>

        </div>
    );
}

export default Home;