import "../styles/HealthStatusCards.css";

const HealthStatusCards = () => {
  return (
    <>
      <div className="health-cards">
        <div className="card">
          <div className="card-container">
             <img
              src="/data/HumanLungs.png" width="28" height="28" alt="" className="image"
            /> 
            <div>
              <h3>Lungs</h3>
            </div>
          </div>
          <div className="card-content">
            <p>Date: 24 May 2025</p>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ backgroundColor: "#A84445" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <span className="icon">🦷</span>
            <div>
              <h3>Teeth</h3>
            </div>
          </div>
          <div className="card-content">
            <p>Date: 24 May 2025</p>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ backgroundColor: "#7ACABB" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-container">
            <span className="icon">🦴</span>
            <div>
              <h3>Bone</h3>
            </div>
          </div>
          <div className="card-content">
            <p>Date: 24 May 2025</p>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ backgroundColor: "#FF7E5F" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthStatusCards;

