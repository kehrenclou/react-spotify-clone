/* --------------------------------- imports -------------------------------- */
import React from "react";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import TrackList from "./components/TrackList";

/* ----------------------------------- App ---------------------------------- */
const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
