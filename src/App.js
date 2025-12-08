import Board from "./Board";
import "./App.css";

function App() {
  return (
      <div className="app">
        <h1>Number Match</h1>
        <p>Players take turns clicking squares. 1 vs 2.</p>
        <Board />
      </div>
  );
}

export default App;

