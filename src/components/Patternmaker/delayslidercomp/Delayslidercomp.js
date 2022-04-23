import { useState } from "react";

import { useDispatch } from "react-redux";

import { seqSettingsDelayaction } from "../../../store/seqState/actions";

export default function Delayslidercomp() {
  const dispatch = useDispatch();

  const [delaydrywet, setDelaydrywet] = useState(0);

  dispatch(seqSettingsDelayaction(delaydrywet));

  return (
    <div className="volume-slider">
      <div class="slidecontainer">
        <input
          type="range"
          min="0"
          max="0.5"
          value={delaydrywet}
          onChange={(e) => {
            setDelaydrywet(e.target.value);
          }}
          step="0.05"
        />
        <input
          type="range"
          min="0"
          max="0.5"
          value={delaydrywet}
          onChange={(e) => {
            setDelaydrywet(e.target.value);
          }}
          step="0.05"
        />
        <input
          type="range"
          min="0"
          max="0.5"
          value={delaydrywet}
          onChange={(e) => {
            setDelaydrywet(e.target.value);
          }}
          step="0.05"
        />
      </div>
      echo:{delaydrywet}
    </div>
  );
}
