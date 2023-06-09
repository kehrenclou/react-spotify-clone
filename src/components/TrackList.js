//components/TrackList.js
//note not using use state hook , instead use a single state object and update the key/value pairs.
//beacuse it is a single state object, must pass existing state object into new opject while
//we update it otherwise the whole object will be overwritten, that is what ...state syntax does

/* --------------------------------- imports -------------------------------- */
import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //new items
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"; //new items

import useMusicPlayer from "../hooks/useMusicPlayer"; //new items
/* -------------------------------- TrackList ------------------------------- */
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
      
    </>
  );
};
export default TrackList;
