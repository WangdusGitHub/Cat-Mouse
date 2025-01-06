import "./App.css";
import GamePath from "../components/GamePath";

function App() {
  return (
    <>
      <div className="wrap h-screen w-screen flex align-middle flex-col bg-zinc-800 text-white">
        <div className="h-8 w-full flex justify-center align-middle text-2xl my-4">
          Cat and Mouse
        </div>

        <div className="m-auto h-96 w-11/12 bg-zinc-700 p-4 rounded flex place-content-center">
          <GamePath />
        </div>
      </div>
    </>
  );
}

export default App;
