//components/TrackList.js
//note not using use state hook , instead use a single state object and update the key/value pairs.
//beacuse it is a single state object, must pass existing state object into new opject while
//we update it otherwise the whole object will be overwritten, that is what ...state syntax does

/* --------------------------------- imports -------------------------------- */
import React, { useContext } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext";//this is before reconfig

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";//new items
import {faPlay,faPause} from "@fortawesome/free-solid-svg-icons";//new items

import useMusicPlayer from "../hooks/useMusicPlayer";//new items
/* -------------------------------- TrackList ------------------------------- */
const TrackList = () => {
    //see after reconfig with new hook this is before
  const [state, setState] = useContext(MusicPlayerContext);

  return (
    <>
      {state.tracks.map((track) => (
        <div className="box">
          <div className="song-title">{track.name}</div>
        </div>
      ))}
      <button className="button is-primary is-medium is-outlined"
        onClick={() => setState((state) => ({ ...state, name: "Clicked!" }))}
      >
        {state.name}
      </button>
    </>
  );
};
export default TrackList;
