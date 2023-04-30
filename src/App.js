/* --------------------------------- imports -------------------------------- */
import React from "react";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";

/* ----------------------------------- App ---------------------------------- */
const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
