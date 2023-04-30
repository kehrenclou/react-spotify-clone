/* --------------------------------- imports -------------------------------- */
import React, { useState } from "react";

/* --------------------------- MusicPlayerContext --------------------------- */

//context is an array with 2 values,
//an empty object and an empty function as initial value
const MusicPlayerContext = React.createContext([{}, () => {}]);

//state object and setter func go into anarray, and pass that into context provider value
//(why an array with empty object and funtion was passed into context)

//to access Context state, import into component and use useContext
const MusicPlayerProvider = (props) => {
  //multiple values there name the variable state
  const [state, setState] = useState({});
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
