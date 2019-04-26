import React, {useRef, useState} from "react";
import video from "./smoke.mp4";
import "./Splash.css";
import classnames from "classnames";

export const Splash = (props) => {
  const [videoDownloaded, setVideoDownloaded] = useState(false);
  const vidRef = useRef(undefined);

  const container = classnames("container", {"ready": videoDownloaded});
  const sprint = classnames("sprint", {"open": videoDownloaded});
  const hive = classnames("hive", {"open": videoDownloaded});

  return (
    <div className={container}>
      <div className="layer">
        <div className="videoBackground">
          <video className="videoBackground" muted ref={vidRef} src={video}
                 onCanPlayThrough={() => {
                   vidRef.current.play();
                   setVideoDownloaded(true);
                 }}
                 onEnded={props.ended}>
            <source src={video} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div className="layer title">
        <span className={sprint}>S</span>
        <span className={sprint}>p</span>
        <span className={sprint}>r</span>
        <span className={sprint}>i</span>
        <span className={sprint}>n</span>
        <span className={sprint}>t</span>
        <span className={hive}>H</span>
        <span className={hive}>i</span>
        <span className={hive}>v</span>
        <span className={hive}>e</span>
      </div>

    </div>
  )
};
