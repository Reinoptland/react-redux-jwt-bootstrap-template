import { useState } from "react";

import { useDispatch } from "react-redux";

import { seqSettingsfilteraction } from "../../../store/seqState/actions";

export default function Filterslidercomp() {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(20000);

  dispatch(seqSettingsfilteraction(filter));

  return (
    <div>
      <div className="filter-slider">
        Filter <br></br>
        {filter}
        <div class="slidecontainer">
          <input
            type="range"
            min="80"
            max="4000"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
