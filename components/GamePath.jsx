import React, { useState } from "react";
import "./css/GamePath.css";
import "../src/App.css";
import { useEffect } from "react";

function GamePath() {
  const [catPosition, setCatPosition] = useState(3);
  const [mousePosition, setMousePosition] = useState(2);
  const [selectedAnimal, setSelectedAnimal] = useState("cat");
  const [gameOver, setGameOver] = useState(false);

  const possiblePath = {
    0: [1, 4, 5],
    1: [0, 2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [0, 2, 5],
    5: [0, 3, 4],
  };

  const isMoveAllowed = (currentPosition, newPosition) => {
    return possiblePath[currentPosition].includes(newPosition);
  };

  const handleCatDragStart = (e) => {
    if (selectedAnimal === "cat") {
      e.dataTransfer.setData("catPosition", catPosition);
    } else {
      e.preventDefault();
    }
  };

  const handleMouseDragStart = (e) => {
    if (selectedAnimal === "mouse") {
      e.dataTransfer.setData("mousePosition", mousePosition);
    } else {
      e.preventDefault();
    }
  };

  const handleCatDrop = (e, newPosition) => {
    e.preventDefault();
    const draggedPosition = e.dataTransfer.getData("catPosition");
    if (isMoveAllowed(parseInt(draggedPosition), newPosition)) {
      // Check if move is allowed
      setCatPosition(newPosition);
      switchSelectedAnimal();
    }
  };

  const handleMouseDrop = (e, newPosition) => {
    e.preventDefault();
    const draggedPosition = e.dataTransfer.getData("mousePosition");
    if (isMoveAllowed(parseInt(draggedPosition), newPosition)) {
      // Check if move is allowed
      setMousePosition(newPosition);
      switchSelectedAnimal();
    }
  };

  const switchSelectedAnimal = () => {
    setSelectedAnimal(selectedAnimal === "cat" ? "mouse" : "cat");
  };

  useEffect(() => {
    if (catPosition === mousePosition) {
      setGameOver(true);
      alert("GameOver! Cat caught the mouse!");
      handleRestart();
    }
  }, [catPosition, mousePosition]);

  const handleRestart = () => {
    setCatPosition(3); // Reset cat position
    setMousePosition(2); // Reset mouse position
    setGameOver(false); // Reset game over state
    setSelectedAnimal("cat"); // Reset to cat's turn
  };

  const renderCat = () => (
    <img
      className="draggable"
      id="cat"
      src="../src/assets/cat.png"
      alt="cat"
      draggable
      onDragStart={handleCatDragStart}
    />
  );

  const renderMouse = () => (
    <img
      className="draggable"
      id="mouse"
      src="../src/assets/mouse.png"
      alt="mouse"
      draggable
      onDragStart={handleMouseDragStart}
    />
  );

  return (
    <>
      <div id="circle">
        <div id="vertices">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              id={`vertex${i}`}
              key={i}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                if (e.dataTransfer.getData("catPosition")) {
                  handleCatDrop(e, i);
                }
                if (e.dataTransfer.getData("mousePosition")) {
                  handleMouseDrop(e, i);
                }
              }}
              onClick={() => {
                if (selectedAnimal === "cat" && isMoveAllowed(catPosition, i)) {
                  setCatPosition(i);
                  switchSelectedAnimal();
                }
                if (
                  selectedAnimal === "mouse" &&
                  isMoveAllowed(mousePosition, i)
                ) {
                  setMousePosition(i);
                  switchSelectedAnimal();
                }
              }}
            >
              {catPosition === i ? renderCat() : null}
              {mousePosition === i ? renderMouse() : null}
              <button
                id={`btn${i}`}
                className="btn"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from triggering parent's onClick
                  if (
                    selectedAnimal === "cat" &&
                    isMoveAllowed(catPosition, i)
                  ) {
                    setCatPosition(i);
                    switchSelectedAnimal();
                  }
                  if (
                    selectedAnimal === "mouse" &&
                    isMoveAllowed(mousePosition, i)
                  ) {
                    setMousePosition(i);
                    switchSelectedAnimal();
                  }
                }}
              >
                {/* <h1>{i}</h1> */}
              </button>
            </div>
          ))}
        </div>
        <div id="edges">
          <div id="edge1"></div>

          <div id="edge4"></div>

          <div id="edge5"></div>
        </div>
      </div>
    </>
  );
}

export default GamePath;
