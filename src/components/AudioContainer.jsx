//this component containes all 8 audio card and binds them together

import AudioCard from "./AudioCard";
import "./AudioContainer.css";

function AudioContainer(props) {
  return (
    <div className="audio-container ">
      {props.sounds.map((sound, i) => {
        return <AudioCard audio={sound} index={i} key={i} />;
      })}
    </div>
  );
}

export default AudioContainer;
