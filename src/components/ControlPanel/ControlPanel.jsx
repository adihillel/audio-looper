//this component is a container for 3 buttons: play,pause and loop

import { useState } from "react";
import { useLoopContext } from "../../LoopProvider";
import "./ControlPanel.css";

function ControlPanel() {
  const loopProvider = useLoopContext();

  const [isPlayPressed, setPlayPressed] = useState(false);
  const [isStopPressed, setStopPressed] = useState(false);
  const [isLoopPressed, setLoopPressed] = useState(false);

  const playHandler = () => { //once the play btn is pressed , this handler will trigger the play sound method on the 
    loopProvider.playSound(); // loop provider folder and will cause all 8 sound to play simultaneously
    setPlayPressed((prevValue) => {
      return !prevValue;
    });
  };

  const stopHandler = () => { // similar to the play handler , the stop handler will trigger the stop sound method
    loopProvider.stopSound(); // and stop any sound that is playing at once , and reset the track to his begining
    setStopPressed((prevValue) => {
      return !prevValue;
    });
  };

  const loopHandler = () => { //the loop handler will trigger the loop sound method , once the sound track will reach
    loopProvider.loopSound(!isLoopPressed); // the end, the loop btn will re-play the track from the begining without delay
    setLoopPressed(!isLoopPressed);
  };

  return (
    <div className="control-panel">
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
