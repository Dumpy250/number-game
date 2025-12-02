import { useState } from "react";
import Board from "./Board";
import { checkWinner } from "./checkWinner";

export default function Game() {
    // history is an array of board states
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // which move we’re currently viewing
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];
    const winner = checkWinner(currentSquares);
    const isGameOver = !!winner;

    // derive player from move number (so it stays correct when time traveling)
    const currentPlayer = currentMove % 2 === 0 ? 1 : 2;

    function handleSquareClick(index) {
        // stop if game is over or square already filled
        if (isGameOver || currentSquares[index] !== null) return;

        const nextSquares = currentSquares.slice();
        nextSquares[index] = currentPlayer;

        // throw away "future" history if we time-traveled back
        const nextHistory = history.slice(0, currentMove + 1);
        nextHistory.push(nextSquares);

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }

    function handleReset() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    let status;
    if (winner) {
        status = `Player ${winner} Wins!`;
    } else {
        status = `Player ${currentPlayer}'s turn`;
    }

    const moves = history.map((_, move) => {
        const description =
            move === 0 ? "Go to game start" : `Go to move #${move}`;
        return (
            <li key={move}>
                <button
                    onClick={() => jumpTo(move)}
                    disabled={move === currentMove}
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="board-wrapper">
            <div className="status">{status}</div>

            <Board
                squares={currentSquares}
                disabled={isGameOver}
                onSquareClick={handleSquareClick}
            />

            <button className="reset-button" onClick={handleReset}>
                Reset Game
            </button>

            <div className="history">
                <h2>Move History</h2>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
