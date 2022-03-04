//each audio card represents a sound and its mute btn
import { useLoopContext } from "../LoopProvider";
import "./AudioCard.css";

function AudioCard(props) {
  const loopProvider = useLoopContext();

  const clickMuteHandler = () => {
    loopProvider.muteHandler(props.index);
  };

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <p>{props.audio.title}</p>
        {/* <img src={props.audio.img} /> */}
      </div>
      <button className="expense-item__price" onClick={clickMuteHandler}>
        mute
      </button>
    </div>
  );
}
export default AudioCard;
