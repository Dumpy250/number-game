import "./App.css";
import Game from "./Game";

function App() {
    return (
        <div className="app">
            <h1>Number Game</h1>
            <p>Players take turns clicking squares to reveal 1 or 2.</p>
            <Game />
        </div>
    );
}

export default App;
