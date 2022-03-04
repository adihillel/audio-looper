import { useLoopContext } from "../LoopProvider";
import "./ControlPanel.css";

function ControlPanel() {
  const loopProvider = useLoopContext();

  const playHandler = () => {
    loopProvider.playSound();
  };

  const stopHandler = () => {
    loopProvider.stopSound();
  };

  return (
    <div className="new-expense">
      <button onClick={playHandler}>play</button>
      <button onClick={stopHandler}>stop</button>
      <button>loop</button>
    </div>
  );
}
export default ControlPanel;
