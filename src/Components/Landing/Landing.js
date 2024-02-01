import React from 'react';
import './Landing.css'; // You will need to create a CSS file for styling
import Header from '../Header/header';
import Footer from '../Footer/footer';
const Landing = () => {
  return (
    <>
    <Header/>
    <div className="landing-page">
      <video className="video-background" autoPlay loop muted>

        <source src="videoL.MP4" type="video/mp4" />
        Your browser does not support this video.
      </video>
      <div className="content">
        <h1 className="heading">Welcome to Carbon Prints</h1>
        <p className="paragraph">Elevate Consciousness, Minimize Footprints: Charting a Course Towards Sustainability.</p>
        <button className="button">Get Started</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Landing;
