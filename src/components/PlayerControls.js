/* --------------------------------- imports -------------------------------- */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../hooks/useMusicPlayer";
/* -------------------------------- controls -------------------------------- */
//note that marquee is depreciated - need to be updated
const PlayerControls = () => {
  const {
    isPlaying,
    currentTrackName,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{currentTrackName}</marquee>
        </div>
      </div>
      <button
        className="button has-text-light has-background-frey-dark"
        onClick={playPreviousTrack}
        disabled={!currentTrackName}
      >
        <FontAwesomeIcon icon={faStepBackward} />
      </button>

      <button
        className="button has-text-light has-background-grey-dark"
        onClick={togglePlay}
        disabled={currentTrackName}
      >
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>

      <button
        className="button has-text-light has-background-grey-dark"
        onClick={playNextTrack}
        disabled={!currentTrackName}
      >
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </>
  );
};

export default PlayerControls;
