import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import "./styles/MobileWarning.css";

const MobileWarning = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="mobile-warning-overlay">
      <div className="mobile-warning-content">
        <div className="mobile-warning-icon">
          <FaLaptopCode />
        </div>
        <h2>Desktop Recommended</h2>
        <p>
          For the most immersive 3D experience and interaction, we recommend viewing this portfolio on a desktop or laptop computer.
        </p>
        <button 
          className="mobile-warning-button" 
          onClick={() => setIsVisible(false)}
        >
          Continue on Mobile
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;
