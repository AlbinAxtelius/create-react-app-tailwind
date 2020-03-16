import {
  mdiDeathStarVariant,
  mdiClose,
  mdiMinus,
  mdiPin,
  mdiPinOutline
} from "@mdi/js";
import { ipcRenderer, remote } from "electron";
import { Icon } from "@mdi/react";
import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";

const Titlebar: React.FC = () => {
  const [pinOn, setPinOn] = useState(false);
  const [opacityValue, setOpacityValue] = useState<number>(1);

  useEffect(() => {}, []);

  const handlePinToggle = () => {
    const newStatus = !pinOn;
    setPinOn(newStatus);
    ipcRenderer.send("toggleAlwaysOnTop", newStatus);
  };

  const setOpacity = (opacity: number) => {
    ipcRenderer.send("setOpacity", opacity);
    setOpacityValue(opacity);
  };

  const handleClose = () => {
    remote.app.quit();
  };

  const handleMinimize = () => {
    remote.getCurrentWindow().minimize();
  };

  return (
    <div className="w-full text-teal-600 shadow drag">
      <div className="sticky top-0 flex items-center justify-between h-8 max-w-screen-xl mx-auto xl:px-0">
        <Icon path={mdiDeathStarVariant} className="w-5 h-5 m-2 fill-current" />
        <div className="flex no-drag">
          <div className="w-16 h-8 mx-2">
            <input
              title={`Window opacity ${opacityValue * 100}%`}
              type="range"
              defaultValue={1}
              className="w-full h-1 origin-bottom-right transform bg-gray-400 rounded outline-none appearance-none slider-thumb"
              min={0.1}
              max={1}
              step={0.1}
              onChange={e => setOpacity(+e.target.value)}
            />
          </div>
          <button
            onClick={handlePinToggle}
            title={"Window on top"}
            className="flex items-center justify-center w-10 h-8 hover:bg-gray-200 focus:outline-none"
          >
            <Icon
              path={pinOn ? mdiPin : mdiPinOutline}
              className="w-4 h-4 m-2 fill-current"
            />
          </button>
          <button
            onClick={handleMinimize}
            className="flex items-center justify-center w-10 h-8 hover:bg-gray-200 focus:outline-none"
          >
            <Icon path={mdiMinus} className="w-4 h-4 m-2 fill-current" />
          </button>
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-10 h-8 hover:bg-gray-200 focus:outline-none"
          >
            <Icon path={mdiClose} className="w-4 h-4 m-2 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
