import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Chatbot from '../Chatbot/chatbot';
import './Home.css';

export const Home = () =>{
    return (
        <>
        <Header/>
        <div className="landing-container">
            <div className="container-landing">
            <div className="overlayT"></div>
            <div className="about">
            <p>Our vision is to empower individuals to make a positive impact on the environment.</p>
            </div>
            </div>
            <div className="functions">
                <h2>What is CO2 Prints?</h2>
            <p>At CO2 Prints, we're on a mission to drive sustainability through innovation. Our focus is solely on empowering individuals to make a positive impact on the environment. Our vision centers around helping individuals reduce their carbon footprint without compromising lifestyle or convenience.<br/><br/>
            We simplify the process by aggregating and analyzing diverse data sources, from energy consumption to daily habits, all in one user-friendly platform. This allows us to provide a holistic view of your environmental impact and suggest personalized improvements.<br/><br/>
            Benchmark your progress by comparing your carbon footprint against relevant standards. This not only offers valuable insights but also helps you understand how your efforts stack up against peers, motivating you to make meaningful changes.</p>
<h2>Why CO2 Prints?</h2>
<p>At CO2Prints, collaborating with us is a uniquely positive experience. Our unwavering commitment is to deliver the highest level of service, making your work not only meaningful but also executed seamlessly, rapidly, and cost-effectively. We specialize in offering a unique and personalized experience for individuals who are passionate about understanding and reducing their carbon footprint. </p>
            </div>
        </div>
        <Footer/>
        <Chatbot/>
        </>
    );
};