import React, { useState, useRef, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Calculator.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Leaderboard from '../Leaderboard';

const Calculator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resultRef = useRef(null);
 

  const topics = [
    {
      title: 'Energy Usage',
      questions: [
        {
          questionText: 'How much electricity do you consume at home on a monthly basis?',
          options: ['Less than 500 kWh', '500-1000 kWh', '1000-1500 kWh', 'More than 1500 kWh']
        },
        {
          questionText: 'What is your primary mode of transportation for commuting?',
          options: ['Personal car', 'Public transportation', 'Cycling or walking', 'Carpooling or ridesharing']
        }
      ],
      backgroundImage: 'url("energy.jpg")'
    },
    {
      title: 'Food and Diet',
      questions: [
        {
          questionText: 'What percentage of your diet consists of plant-based foods?',
          options: ['Less than 25%', '25-50%', '50-75%', 'More than 75%']
        },
        {
          questionText: 'Can you estimate the distance your food travels to reach your plate?',
          options: ['Local or regional (less than 100 miles)', 'National (100-500 miles)', 'International (more than 500 miles)', 'Not sure']
        }
      ],
      backgroundImage: 'url("food.jpg")'
    },
    {
      title: 'Travel and Commuting',
      questions: [
        {
          questionText: 'How often do you travel by personal car?',
          options: ['Rarely or never', 'Occasionally (once a week)', 'Frequently (multiple times a week)', 'Daily']
        },
        {
          questionText: 'If you frequently fly, what measures can you take to minimize the environmental impact of air travel?',
          options: ['Choose non-stop flights', 'Offset carbon emissions through a reputable program', 'Fly economy class', 'All of the above']
        }
      ],
      backgroundImage: 'url("travel.jpg")'
    },
    {
      title: 'Consumption Habits',
      questions: [
        {
          questionText: 'How often do you purchase new items?',
          options: ['Rarely (once a month or less)', 'Occasionally (once a week)', 'Frequently (several times a week)', 'Daily']
        },
        {
          questionText: 'What steps can you take to reduce your use of single-use plastics and other disposable items?',
          options: ['Use reusable water bottles and bags', 'Choose products with minimal packaging', 'Avoid single-use utensils and straws', 'All']
        }
      ],
      backgroundImage: 'url("consumption.jpg")'
    },
    {
      title: 'Waste Generation',
      questions: [
        {
          questionText: 'What is the composition of your household waste?',
          options: ['Mostly recyclables', 'Mostly organic (food) waste', 'Mostly non-recyclable plastics', 'A mix of recyclables and non-recyclables']
        },
        {
          questionText: 'How can you minimize packaging waste when making purchases?',
          options: ['Choose products with eco-friendly packaging', 'Buy in bulk to reduce packaging', 'Bring your own reusable bags and containers', 'All']
        }
      ],
      backgroundImage: 'url("waste.jpg")'
    }
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: topics.length }, () => [-1, -1]));
  const [friends, setFriends] = useState([]); // State for storing friends' scores
  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem('friends'));
    if (storedFriends) {
      setFriends(storedFriends);
    }
  }, []);

  // Save friends' scores to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  const scrollToResult = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOptionSelect = (topicIndex, questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    if (updatedSelectedOptions[topicIndex][questionIndex] === optionIndex) {
      updatedSelectedOptions[topicIndex][questionIndex] = -1;
    } else {
      updatedSelectedOptions[topicIndex][questionIndex] = optionIndex;
    }
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNext = () => {
    const currentSelectedOptions = selectedOptions[currentIndex];
    if (currentSelectedOptions.includes(-1)) {
      alert("Please select an option for each question before proceeding.");
      return;
    }
    const nextIndex = (currentIndex + 1) % topics.length;
    setCurrentIndex(nextIndex);
  };

  const handleRetakeTest = () => {
    setCurrentIndex(0);
    setSelectedOptions(Array.from({ length: topics.length }, () => [-1, -1]));
  };

  const isLastTopic = currentIndex === topics.length - 1;
  const handleAddFriend = (friendName, friendScore) => {
    setFriends([...friends, { name: friendName, score: friendScore }]);
  };
  return (
    <>
      <Header />
      <div className="calculator-page">
        <div className="left-column">
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>
                <button onClick={() => setCurrentIndex(index)} className={currentIndex === index ? 'active' : ''}>
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
          <Button className='RetakeTestButton' variant="info" onClick={handleRetakeTest}>
            Retake Test
          </Button>
        </div>
        <div className="carousel-container">
          <Carousel
            activeIndex={currentIndex}
            onSelect={(index) => setCurrentIndex(index)}
            controls={false} 
            interval={null} 
          >
            {topics.map((topic, index) => (
              <Carousel.Item key={index} style={{ backgroundImage: topic.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="center-content">
                  <div className="content-wrapper">
                    <h3>{topic.title}</h3>
                    {topic.questions.map((question, qIndex) => (
                      <div key={qIndex}>
                        <p>{question.questionText}</p>
                        {question.options.map((option, oIndex) => (
                          <Button 
                            key={oIndex} 
                            variant={selectedOptions[currentIndex][qIndex] === oIndex ? 'success' : 'light'}
                            style={{  
                              marginBottom: '2rem' 
                            }}
                            disabled={selectedOptions[currentIndex][qIndex] !== -1 && selectedOptions[currentIndex][qIndex] !== oIndex}
                            onClick={() => handleOptionSelect(currentIndex, qIndex, oIndex)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                  {isLastTopic && (
                  <Button className='ViewResultButton' variant="info" onClick={scrollToResult}>
                    View Result
                  </Button>
                )}
                {!isLastTopic && (
                  <Button className='NextButton' variant="info" onClick={handleNext}>
                    Next
                  </Button>
                )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="next-button-container"></div>
        </div>
      </div>
      <section ref={resultRef} id="sectionId">
        <div className='Result'>
          <h1 className='ResultHeading'>Your Result</h1>
          <div className='ResultContainer'>
            <p className='ResultContent'>Space for result</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Calculator;
