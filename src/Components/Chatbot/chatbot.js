import React, {useState, useRef, useEffect}from 'react';
import './chatbot.css'; // Create this file for your styles

const Chatbot = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'incoming',
      content: 'Hi there 👋\nWelcome to CO2 Prints! How can I assist you today?',
    },
  ]);

  const userDropdownRef = useRef(null);

  const toggleChatbot = () => {
    setChatbotVisible((prevVisible) => !prevVisible);
  };

  const generateResponse = (message) => {
    switch (message) {
      case "What analytics features does your platform offer?":
        return "Our platform provides personalized monthly and yearly reports, allowing you to track your carbon footprint over time. You can generate detailed reports, visualize your data, and receive personalized recommendations to help you reduce your environmental impact.";
      case "Tell me about sustainable practices for reducing my carbon footprint.":
        return "To reduce your carbon footprint, you can adopt sustainable practices such as reducing energy consumption in your home, using public transportation or carpooling, eating a plant-based diet, and minimizing waste by recycling and composting.";
      case "Can you explain the features of dashboard?":
        return "Certainly! Your dashboard provides a personalized view of your environmental impact. It includes key metrics, graphs, and tips tailored to your lifestyle. Feel free to explore each section for a detailed overview and actionable insights.";
      case "How to calculate our carbon footprints?":
        return "To calculate your carbon footprint, login and navigate to the calculate page. Input details such as your energy consumption, transportation habits, diet, and lifestyle choices. The system will then provide you with a detailed analysis and personalized recommendations.";
      default:
        return "I'm sorry, I didn't understand that.";
    }
  };
  
  
  const handleChat = () => {
    const message = userDropdownRef.current.value.trim();
  
    if (!message) return;
  
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: 'outgoing', content: message },
    ]);
  
    const responseMessage = generateResponse(message);
  
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: 'incoming', content: responseMessage },
      ]);
    }, 600);
  };

  const chatboxRef = useRef(null);
  useEffect(() => {
    if(chatboxRef.current){
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [chatMessages]
  );


  return (
    <div className="Chatbot">
      <button id="chatbot-toggler" onClick={toggleChatbot}>
        <span className={`material-symbols-outlined ${chatbotVisible ? 'close' : 'mode_comment'}`} />
      </button>
      {chatbotVisible && (
        <div className="chatbot">
          <header>
            <h2>Welcome to CO2 Prints</h2>
          </header>
          <ul className="chatbox" ref={chatboxRef}>
            {chatMessages.map((message, index) => (
              <li key={index} className={`chat ${message.type}`}>
                {message.type === 'incoming' && (
                  <span className="material-symbols-outlined">smart_toy</span>
                )}
                <p>{message.content}</p>
              </li>
            ))}
          </ul>
          <div className="chat-input">
            <div className="options-container">
              <label htmlFor="user-dropdown" id="label-text">Choose an option:</label>
              
              <select id="user-dropdown" ref={userDropdownRef}>
                
                <option value="What analytics features does your platform offer?">What analytics features does your platform offer?</option>
                <option value="Tell me about sustainable practices for reducing my carbon footprint.">Tell me about sustainable practices for reducing my carbon footprint.</option>
                <option value="Can you explain the features of dashboard?">Can you explain the features of dashboard?</option>
                <option value="How to calculate our carbon footprints?">How to calculate our carbon footprints?</option>
              </select>
            </div>
            <span id="send-btn" className="material-symbols-outlined" onClick={handleChat}>
              send
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;