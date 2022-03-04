// the audio looper is the largest container (after the app component) which containes the rest of the components that this app
//will include
import AudioContainer from "./AudioContainer";
import ControlPanel from "./ControlPanel";
import Header from "./Header";
import "./AudioLooper.css";
import { sounds } from "../mySounds";

function AudioLooper() {
  return (
    <section className="container">
      <Header />
      <AudioContainer sounds={sounds} />
      <ControlPanel />
    </section>
  );
}

export default AudioLooper;
