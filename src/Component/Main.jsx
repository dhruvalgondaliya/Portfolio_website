import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

function Main() {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('about');

    const gotoAbout = () => {
        navigate('/');
        setActivePage('about');
    }

    const gotoResume = () => {
        navigate('/resume');
        setActivePage('resume');
    }

    const gotoPortfolio = () => {
        navigate('/portfolio');
        setActivePage('portfolio');
    }

    const gotoContact = () => {
        navigate('/contact');
        setActivePage('contact');
    }

    return (
        <div className="container" id="main">
            <nav id="nav">
                <ul>
                    <li onClick={gotoAbout} className={activePage === 'about' ? 'active' : ''}>About</li>
                    <li onClick={gotoResume} className={activePage === 'resume' ? 'active' : ''}>Resume</li>
                    <li onClick={gotoPortfolio} className={activePage === 'portfolio' ? 'active' : ''}>Portfolio</li>
                    <li onClick={gotoContact} className={activePage === 'contact' ? 'active' : ''}>Contact</li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Main;