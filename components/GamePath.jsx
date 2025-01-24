import React from "react";
import "./GamePath.css";
import "../src/App.css";
function GamePath() {

  const goTo = (btn) => {
    console.log("clicked ", btn);

    let top = btn.offsetTop;
    let left = btn.offsetLeft;
    console.log("top ", top, " left ", left);
    document.getElementById("cat").style.top = top + "px";
    document.getElementById("cat").style.left = left + "px";
    btn.style.backgroundColor = "red";
  };

  return (
    <>
      <div id="circle">
        <div id="cat">
          <img src="../src/assets/cat.png" alt="cat" />
        </div>
        <div id="mouse">
          <img src="../src/assets/mouse.png" alt="mouse" />
        </div>

        <div id="vertices">
          <div id="vertex0"></div>
          <div id="vertex1"></div>
          <div id="vertex2"></div>
          <div id="vertex3"></div>
          <div id="vertex4"></div>
          <div id="vertex5"></div>
        </div>
        <div id="edges">
          <div id="edge1"></div>
          <div id="edge2"></div>
          <div id="edge3"></div>
          <div id="edge4"></div>
          <div id="edge5"></div>
        </div>
        <div id="btns">
          <button id="btn0" onClick={(e) => goTo(e.target)}></button>
          <button id="btn1" onClick={(e) => goTo(e.target)}></button>
          <button id="btn2" onClick={(e) => goTo(e.target)}></button>
          <button id="btn3" onClick={(e) => goTo(e.target)}></button>
          <button id="btn4" onClick={(e) => goTo(e.target)}></button>
          <button id="btn5" onClick={(e) => goTo(e.target)}></button>
        </div>
      </div>
    </>
  );
}

export default GamePath;
