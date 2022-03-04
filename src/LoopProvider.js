import { createContext, useContext } from "react";
import { sounds } from "./mySounds";

const LoopContext = createContext(null);
export const useLoopContext = () => useContext(LoopContext);

export const LoopProvider = ({ children }) => {
  const arrayOfSounds = [true, true, true, true, true, true, true, true];

  const playSound = () => {
    arrayOfSounds.forEach((sound, index) => {
      sound && sounds[index].audio.play();
    });
  };

  const stopSound = () => {
    arrayOfSounds.forEach((sound, index) => {
      sounds[index].audio.pause();
      sounds[index].audio.currentTime = 0;
    });
  };

  const muteHandler = (index) => {
    arrayOfSounds[index] = !arrayOfSounds[index];
    if (arrayOfSounds[index]) sounds[index].audio.volume = 1;
    else sounds[index].audio.volume = 0;
  };

  return (
    <LoopContext.Provider value={{ playSound, stopSound, muteHandler }}>
      {children}
    </LoopContext.Provider>
  );
};
