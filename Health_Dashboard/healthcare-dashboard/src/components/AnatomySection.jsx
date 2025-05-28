import { ScanLine, ZoomIn } from "lucide-react";
import "../styles/AnatomySection.css";

const AnatomySection = () => {
  return (
    // <div>
    //   <img
    //     src="src\HumanAnatomy.png"
    //     width="400"
    //     height="500"
    //     alt="Human Anatomy image"
    //   />
    //   <ScanLine />
    //   <ScanLine />
    //   <div>Healthy Heart</div>
    //   <div>Healthy Bones</div>
    // </div>

    <div className="dashboard-wrapper">
      <h2>Dashboard</h2>
      <div className="body-card">
        <img
          src="src\data\HumanAnatomy.png"
          width="400"
          height="500"
          alt="Human Anatomy image"
          className="body-image"
        /> 
        <div className="heart-scan">
          <ScanLine />
        </div>
        <div className="leg-scan">
          <ScanLine />
        </div>
        <div className="zoomIn-icon">
          <ZoomIn />
        </div>
        <div className="heart-label">
          <span>❤️ Healthy Heart</span>
        </div>

        <div className="leg-label">
          <span>🦵 Healthy Leg</span>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
