//this file containes all the needed functions for the app, in order to keep the code clean

import { createContext, useContext } from "react";
import { sounds } from "./mySounds";

const LoopContext = createContext(null);
export const useLoopContext = () => useContext(LoopContext);

export const LoopProvider = ({ children }) => {
  const arrayOfSounds = [true, true, true, true, true, true, true, true]; 

  //---- play method --- see explanation in ControlPanel.jsx //  
  const playSound = () => {
    arrayOfSounds.forEach((sound, index) => {
      sound && sounds[index].audio.play();
    });
  };

  //---- stop method --- see explanation in ControlPanel.jsx //  
  const stopSound = () => {
    arrayOfSounds.forEach((sound, index) => {
      sounds[index].audio.pause();
      sounds[index].audio.currentTime = 0;
    });
  };

  //---- mute method --- see explanation in AudioCard.jsx //  
  const muteHandler = (index) => {
    arrayOfSounds[index] = !arrayOfSounds[index];
    if (arrayOfSounds[index]) sounds[index].audio.volume = 1;
    else sounds[index].audio.volume = 0;
  };

  //---- loop method --- see explanation in ControlPanel.jsx //  
  const loopSound = (status) => {
    if (status) {
      arrayOfSounds.forEach((sound, index) => {
        sounds[index].audio.loop = true;
      });
    } else {
      arrayOfSounds.forEach((sound, index) => {
        sounds[index].audio.loop = false;
      });
    }
  };

  return (
    <LoopContext.Provider value={{ playSound, stopSound, muteHandler,loopSound }}>
      {children}
    </LoopContext.Provider>
  );
};
