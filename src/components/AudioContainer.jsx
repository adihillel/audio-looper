//this component containes all 8 audio card and binds them together

import AudioCard from "./AudioCard";

function AudioContainer() {
  return (
    <div className="audio-container ">
      <AudioCard />
      <AudioCard />
      <AudioCard />
      <AudioCard />
      <AudioCard />
      <AudioCard />
      <AudioCard />
      <AudioCard />
    </div>
  );
}

export default AudioContainer;
