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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="right-content">
            <p className="para left">
              Paragraph Left 1 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <h2>Sustainability</h2>
          </div>
        

        {/* Card Container and Cards */}
        <h2 className="Stepstoward">Steps towards Sustainability</h2>
        <div className="card-container">
        
          <div className="card" style={{ width: "18rem" }}>
            <img src="reuse.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="energyC.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="Ptrasnsport.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="water.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
