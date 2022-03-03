//each audio card represents a sound and its mute btn
import "./AudioCard.css";

function AudioCard() {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <p>Adi</p>
      </div>
      <button className="expense-item__price">mute</button>
    </div>
  );
}
export default AudioCard;
