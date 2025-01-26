import "./App.css";
import GamePath from "../components/GamePath";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="gameTitle">Cat and Mouse</div>
        <div className="gameBox">
          <GamePath />
        </div>
      </div>
    </>
  );
}

export default App;
