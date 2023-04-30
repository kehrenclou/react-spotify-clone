
//context is an array with 2 values,
//an empty object and an empty function as initial value

//state object and setter func go into anarray, and pass that into context provider value
//(why an array with empty object and funtion was passed into context)

//to access Context state, import into component and use useContext
  //multiple values there name the variable state
/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";

/* --------------------------- MusicPlayerContext --------------------------- */


const MusicPlayerContext = React.createContext([{}, () => {}]);


const MusicPlayerProvider = (props) => {

  const [state, setState] = useState({
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
      },
      {
        name: "The Hipsta - Shaken Soda",
      },
      {
        name: "Tobu - Such Fun",
      },
    ],
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
