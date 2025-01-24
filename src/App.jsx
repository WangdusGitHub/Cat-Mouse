import "./App.css";
import GamePath from "../components/GamePath";

function App() {
  return (
    <div className="wrap">
      <div className="title flex center">Cat and Mouse</div>
      <div className="game flex center">
        <div className="circle">
          <div className="dot center"></div> {/* Center dot */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="dot" style={{ "--i": i }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
