//context is an array with 2 values,
//an empty object and an empty function as initial value

//state object and setter func go into anarray, and pass that into context provider value
//(why an array with empty object and funtion was passed into context)

//to access Context state, import into component and use useContext
//multiple values there name the variable state
/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";
import Downtown from "../mp3s/downtown.mp3";
import Cute from "../mp3s/cute.mp3";
import Psychedelic from "../mp3s/psychedelic.mp3";

/* --------------------------- MusicPlayerContext --------------------------- */

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Downtown - Benjamin Tissot",
        file: Downtown,
        attribution: "Music: Bensound.com/free-music-for-videos",
        licensecode: "ATKS5ENRBVQ1PQID",
      },
      {
        name: "Cute - Benjamin Tissot",
        file: Cute,
        attribution:"Music I Use: https://www.bensound.com/free-music-for-videos",
        licensecode: "LKTSSRLPLVXUVY8I",
      },
      {
        name: "Psychedelic - Benjamin Tissot",
        file: Psychedelic,
        attribution: "Music I use: Bensound",
        licensecode: "FPZL95F7X8XU01CQ",
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
