import React, { useState } from 'react';
import './Leaderboard.css'; // Import CSS file
import Header from './Header/header';
import Footer from './Footer/footer';
import Chatbot from './Chatbot/chatbot';;


const sampleLeaderboardData = [
  { name: "Alice", score: 100, date: "2024-02-10" },
  { name: "Bob", score: 80, date: "2024-02-09" },
  { name: "Charlie", score: 120, date: "2024-02-08" },
  { name: "David", score: 90, date: "2024-02-07" },
  { name: "Eve", score: 110, date: "2024-02-06" },
  { name: "Frank", score: 95, date: "2024-02-05" },
  { name: "Grace", score: 85, date: "2024-02-04" },
  { name: "Henry", score: 115, date: "2024-02-03" },
  { name: "Isabel", score: 105, date: "2024-02-02" },
  { name: "Jack", score: 75, date: "2024-02-01" }
];

const Leaderboard = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showStaticContent, setShowStaticContent] = useState(false);

  const handleButtonClick = () => {
    setShowStaticContent(!showStaticContent);
  };

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const handleViewLessClick = () => {
    setShowAll(false);
  };

  return (
    <>
    <Header/>
    <div className="leaderboard-container">
      <h2 className='headdd'>Leaderboard</h2>
      <div className="winner-cards">
        {sampleLeaderboardData.slice(0, 3).map((winner, index) => (
          <div key={index} className="winner-card">
            <h3>Rank: {index + 1}</h3>
            <h4>{winner.name}</h4>
            <p>Score: {winner.score}</p>
          </div>
        ))}
      </div>
      <button className="show-info-btn" onClick={handleButtonClick}>
        Show Info
      </button>
      {showStaticContent && (
        <div className="static-info">
           <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Your Name</th>
                <th>Your Score</th>
                <th>Your Rank</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>100</td>
                <td>1</td>
                <td>2024-02-01</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      )}
       <div className="table-container">
      <table>
        
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {showAll ? (
            sampleLeaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.date}</td>
              </tr>
            ))
          ) : (
            sampleLeaderboardData.slice(0, 6).map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
      <div className="button-container">
        {!showAll ? (
          <button className="view-all-btn" onClick={handleViewAllClick}>
            View All
          </button>
        ) : (
          <button className="view-all-btn" onClick={handleViewLessClick}>
            View Less
          </button>
        )}
      </div>
      {selectedUser && (
        <div className="user-info">
          <p>Your Name: {selectedUser.name}</p>
          <p>Your Score: {selectedUser.score}</p>
          <p>Your Rank: {selectedUser.rank}</p>
          <p>Your Date: {selectedUser.date}</p>
        </div>
      )}
    </div>
    <Footer/>
    <Chatbot/>
    </>
  );
};

export default Leaderboard;
