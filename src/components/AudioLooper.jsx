// the audio looper is the largest container (after the app component) which containes the rest of the components that this app
//will include
import AudioContainer from "./AudioContainer";
import ControlPanel from "./ControlPanel";
import Header from "./Header";

function AudioLooper() {
  return (
    <section className="container">
      <Header />
      <div className="grand-container">
        <AudioContainer />
      </div>
      <ControlPanel/>
    </section>
  );
}

export default AudioLooper;
