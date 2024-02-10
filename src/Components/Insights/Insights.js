import React from "react";
import "./Insights.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Insights() {
  return (
    <>
      <Header />
      <div className="insight-page">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="videobg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="insight-content">
          <div className="left-content">
            <h2>Carbon Footprint</h2>
            <p className="para Right">
            A "carbon footprint" represents the total amount of greenhouse gases, primarily carbon dioxide, 
            emitted directly or indirectly by human activities. This encompasses various actions, from driving cars
             and using electricity to consuming goods and services. By quantifying our carbon footprint, we gain insight into our environmental impact and 
            can identify opportunities for reducing emissions to combat climate change and promote sustainability.
            </p>
          </div>
          <div className="right-content">
            <p className="para left">
            Sustainability refers to the practice of meeting the needs of the present without compromising the 
            ability of future generations to meet their own needs. It involves balancing economic, social, and 
            environmental considerations to ensure that resources are used responsibly and equitably, fostering 
            resilience and long-term well-being for both people and the planet. Embracing sustainability involves
             adopting practices and policies that promote conservation, minimize waste, promote renewable energy,
              protect biodiversity.
            </p>
            <h2>Sustainability</h2>
          </div>
        

        {/* Card Container and Cards */}
        <h2 className="Stepstoward">Steps towards Sustainability</h2>
        <div className="card-container">
      
        <div className="cardI" style={{ width: "18rem" }}>
        <a href="https://www.globalcitizen.org/en/content/tips-reduce-plastic/" target="_blank" rel="noopener noreferrer">
            <img src="reuse.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <p className="card-text">
              Avoid single-use plastics and disposable items.Reuse and recycle.
              </p>
            </div>
          </div>
          
        
          <div className="cardI" style={{ width: "18rem" }}>
          <a href="https://www.sustainableprinceton.org/your-home/efficient-bulbs-and-appliances/" target="_blank" rel="noopener noreferrer">
            <img src="energyC.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <p className="card-text">
              Switching to energy-efficient light bulbs, such as LEDs, can lower electricity consumption .
        
              </p>
            </div>
          </div>

          <div className="cardI" style={{ width: "18rem" }}>
          <a href="https://www.treehugger.com/how-to-go-green-public-transportation-4858768" target="_blank" rel="noopener noreferrer">
            <img src="Ptrasnsport.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <p className="card-text">
              Opting for public transportation, such as buses or trains, instead of individual cars can significantly reduce carbon emissions.
              </p>
            </div>
          </div>

          <div className="cardI" style={{ width: "18rem" }}>
          <a href="https://sustainabilityinfo.com/sustainability/how-sustainable-are-reusable-water-bottles/" target="_blank" rel="noopener noreferrer">
            <img src="water.jpg" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <p className="card-text">
              Opt for reusable water bottles made of sustainable materials to reduce plastic waste and promote water conservation.
        
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Insights;
