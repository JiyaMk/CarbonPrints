import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Calculator.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Calculator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topics = [
    {
      title: 'Energy Usage',
      questions: ['How much electricity do you consume?', 'What is your primary mode of transportation?'],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      backgroundImage: 'url("energy.jpg")',
    },
    {
      title: 'Food and Diet',
      questions: ['What percentage of your diet is plant-based?', 'Can you estimate the distance your food travels?'],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      backgroundImage: 'url("food.jpg")',
    },
    {
      title: 'Travel and Commuting',
      questions: ['How often do you travel by personal car?', 'How can you minimize the environmental impact of air travel?'],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      backgroundImage: 'url("travel.jpg")',
    },
    {
      title: 'Consumption Habits',
      questions: ['How often do you purchase new items?', 'What steps can you take to reduce the use of single-use plastics?'],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      backgroundImage: 'url("consumption.jpg")',
    },
    {
      title: 'Waste Generation',
      questions: ['What is the composition of your household waste?', 'How can you minimize packaging waste when making purchases?'],
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      backgroundImage: 'url("waste.jpg")',
    },
  ];
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % topics.length;
    setCurrentIndex(nextIndex);
  };


  return (
    <>
      <Header />
      <div className="calculator-page">
        <div className="left-column">
          <h4>Topics</h4>
          <ul>
          {topics.map((topic, index) => (
            <li key={index}>
              <button onClick={() => setCurrentIndex(index)} className={currentIndex === index ? 'active' : ''}>
                {topic.title}
              </button>
            </li>
          ))}
          </ul>
        </div>
        <div className="carousel-container">
          <Carousel
            activeIndex={currentIndex}
            onSelect={(index) => setCurrentIndex(index)}
            controls={false} // Hide the default carousel controls
          >
            {topics.map((topic, index) => (
              <Carousel.Item key={index} style={{ backgroundImage: topic.backgroundImage, opacity: 0.9, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="center-content">
                <div className="content-wrapper">
                  <h3>{topic.title}</h3>
                  <p>{topic.questions[0]}</p>
                  <Button variant="light" style={{ opacity: 1, marginBottom: '2rem' }}>{topic.options[0]}</Button>
                  <Button variant="light" style={{ opacity: 1, marginBottom: '2rem' }}>{topic.options[1]}</Button>
                  <Button variant="light" style={{ opacity: 1, marginBottom: '2rem' }}>{topic.options[2]}</Button>
                  <Button variant="light" style={{ opacity: 1, marginBottom: '2rem' }}>{topic.options[3]}</Button>
                  <p>{topic.questions[1]}</p>
                  <Button variant="light">{topic.options[0]}</Button>
                  <Button variant="light">{topic.options[1]}</Button>
                  <Button variant="light">{topic.options[2]}</Button>
                  <Button variant="light">{topic.options[3]}</Button>
                </div>
              </div>
              <Button className='NextButton' variant="info" onClick={handleNext}>
              Next
            </Button>
            </Carousel.Item>
          ))}
          
          </Carousel>
          <div className="next-button-container">
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;