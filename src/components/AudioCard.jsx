//each audio card represents a sound and its mute btn
import { useState } from "react";
import { useLoopContext } from "../LoopProvider";
import "./AudioCard.css";

function AudioCard(props) {
  const loopProvider = useLoopContext();

  const [isPressed, setIsPresses] = useState(false);

  const clickMuteHandler = () => {
    loopProvider.muteHandler(props.index);
    setIsPresses((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <p>{props.audio.title}</p>
        {/* <img src={props.audio.img} /> */}
      </div>
      <button
        style={{ backgroundColor: isPressed ? "#510674" : "#b14fdf" }}
        className="expense-item__price"
        onClick={clickMuteHandler}
      >
        mute
      </button>
    </div>
  );
}
export default AudioCard;
