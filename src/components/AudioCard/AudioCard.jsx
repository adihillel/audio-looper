//each audio card represents a sound and its mute btn
import { useState } from "react";
import { useLoopContext } from "../../LoopProvider";
import "./AudioCard.css";

function AudioCard(props) {
  const loopProvider = useLoopContext();

  const [isPressed, setIsPresses] = useState(false);

  const clickMuteHandler = () => {
    //once the mute button is clicked this handler will set in motion the mute action
    loopProvider.muteHandler(props.index); // and will mute only the sound that relates to the mute btn that was pressed
    setIsPresses((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="audio-card">
      <div className="audio-card__title">
        {/* <p>{props.audio.title}</p> */}
        <img className="image" src={props.audio.img} />
      </div>
      <button
        style={{ backgroundColor: isPressed ? "#510674" : "#b14fdf" }}
        className="audio-card__btn"
        onClick={clickMuteHandler}
      >
        mute
      </button>
    </div>
  );
}
export default AudioCard;
