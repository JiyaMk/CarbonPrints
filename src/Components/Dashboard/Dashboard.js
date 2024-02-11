import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Chatbot from "../Chatbot/chatbot";
import './Dashboard.css';
import DisplayDash from './DisplayDash';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

function Dashboard() {
    const [visibleCard, setVisibleCard] = useState(1); // Default to card 1 being visible
    // Function to toggle visibility of each card
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const toggleCardVisibility = (cardNumber) => {
        setVisibleCard(cardNumber);
    };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };
    
    return (
        <>
            <Header/>
            <div className="dashbody">
                <div className="left-dash">
                <div className="right-dash">
                <h4>Profile Details</h4>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <button type="button" onClick={handleLogout}>Logout</button>
                </div>
                    <h4>Emissions by type</h4>
                    <div id="sidebar">
                    <button onClick={() => toggleCardVisibility(1)}>
                        All
                    </button>
                    <button onClick={() => toggleCardVisibility(2)}>
                        Energy
                    </button>
                    <button onClick={() => toggleCardVisibility(3)}>
                        Food and Diet
                    </button>
                    <button onClick={() => toggleCardVisibility(4)}>
                        Travel and Commuting
                    </button>
                    <button onClick={() => toggleCardVisibility(5)}>
                        Consumption Habits
                    </button>
                    <button onClick={() => toggleCardVisibility(6)}>
                        Waste Generation
                    </button>
                    </div>
                </div>
                <div className="mid-dash">
                    {visibleCard === 1 && <DisplayDash title="Card 1" content="Content for Card 1" />}
                    {visibleCard === 2 && <DisplayDash title="Card 2" content="Content for Card 2" />}
                    {visibleCard === 3 && <DisplayDash title="Card 3" content="Content for Card 3" />}
                    {visibleCard === 4 && <DisplayDash title="Card 4" content="Content for Card 4" />}
                    {visibleCard === 5 && <DisplayDash title="Card 5" content="Content for Card 5" />}
                    {visibleCard === 6 && <DisplayDash title="Card 6" content="Content for Card 6" />}
                </div>
            </div>
            <Footer/>
            <Chatbot/>
        </>
    );
};

export default Dashboard;
