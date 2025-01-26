import React from "react";
import "./GamePath.css";
import "../src/App.css";
function GamePath() {

  const goTo = (btn) => {
    console.log("clicked ", btn.id);
  };

  return (
    <>
      <div id="circle">
        <div id="vertices">
          <div id="vertex0">
            <button
              id="btn0"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
          <div id="vertex1">
            <button
              id="btn1"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
          <div id="vertex2">
            <img
              id="mouse"
              src="../src/assets/mouse.png"
              alt="mouse"
              draggable
            />
            <button
              id="btn2"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
          <div id="vertex3">
            <img id="cat" src="../src/assets/cat.png" alt="cat" draggable />

            <button
              id="btn3"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
          <div id="vertex4">
            <button
              id="btn4"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
          <div id="vertex5">
            <button
              id="btn5"
              className="btn"
              onClick={(e) => goTo(e.target)}
            ></button>
          </div>
        </div>
        <div id="edges">
          <div id="edge1"></div>
          {/* <div id="edge2"></div> */}
          {/* <div id="edge3"></div> */}
          <div id="edge4"></div>
          <div id="edge5"></div>
        </div>
      </div>
    </>
  );
}

export default GamePath;
