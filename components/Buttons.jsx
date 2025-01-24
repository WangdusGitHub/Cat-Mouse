import React from "react";

function Buttons(id) {
  return (
    <div>
      <button id={id} onClick={(e) => goTo(e.target)}></button>
    </div>
  );
}

export default Buttons;