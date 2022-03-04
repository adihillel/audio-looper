import { useState } from "react";
import { useLoopContext } from "../LoopProvider";
import "./ControlPanel.css";

function ControlPanel() {
  const loopProvider = useLoopContext();

  const [isPlayPressed, setPlayPressed] = useState(false);
  const [isStopPressed, setStopPressed] = useState(false);
  const [isLoopPressed, setLoopPressed] = useState(false);

  const playHandler = () => {
    loopProvider.playSound();
    setPlayPressed((prevValue) => {
      return !prevValue;
    });
  };

  const stopHandler = () => {
    loopProvider.stopSound();
    setStopPressed((prevValue) => {
      return !prevValue;
    });
  };

  const loopHandler = () => {
    loopProvider.loopSound(!isLoopPressed);
    setLoopPressed(!isLoopPressed);
  };

  return (
    <div className="new-expense">
      <button
        style={{ backgroundColor: isPlayPressed ? "#510674" : "#b14fdf" }}
        onClick={playHandler}
      >
        play
      </button>
      <button
        style={{ backgroundColor: isStopPressed ? "#510674" : "#b14fdf" }}
        onClick={stopHandler}
      >
        stop
      </button>
      <button
        style={{ backgroundColor: isLoopPressed ? "#510674" : "#b14fdf" }}
        onClick={loopHandler}
      >
        loop
      </button>
    </div>
  );
}
export default ControlPanel;
