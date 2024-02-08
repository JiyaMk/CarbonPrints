import React from "react";
import './Dashboard.css';

const DisplayDash = ({ title, content }) => {
    const renderContent = (title) => {
        switch (title) {
            case 'Card 1': 
                return (
                    <h4>Results</h4>
                )
            case 'Card 2':
                return (
                    <h4>Energy Consumption</h4>
                    //other parts 
                )
            case 'Card 3':
                return (
                    <h4>Food and Diet</h4>
                    //other parts 
                )
            case 'Card 4':
                return (
                    <h4>Travel and Commuting</h4>
                    //other parts 
                )
            case 'Card 5':
                return (
                    <h4>Consumption Habits</h4>
                    //other parts 
                )
            case 'Card 6':
                return (
                    <h4>Waste Generation</h4>
                    //other parts 
                )
            default:
                return <h4>{content}</h4>; // Default content
        }
    };

    return (
        <>
        <div className="card"> {/*for displaying results (in tabular form)*/}
            {renderContent(title)}
        </div>
        <div className="card"> {/*for displaying future scope*/}
            {renderContent(title)}
        </div>
        </>
    );
};

export default DisplayDash;
