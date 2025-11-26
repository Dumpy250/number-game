import { useState } from "react";
import Board from "./Board";
import { checkWinner } from "./checkWinner";

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(1);

    const winner = checkWinner(squares);
    const isGameOver = !!winner;

    function handleSquareClick(index) {
        // stop if game over
        if (isGameOver) return;

        // Square also protects this, but double-check doesn’t hurt
        if (squares[index] !== null) return;

        const nextSquares = squares.slice();
        nextSquares[index] = player;
        setSquares(nextSquares);

        if (!checkWinner(nextSquares)) {
            setPlayer(player === 1 ? 2 : 1);
        }
    }

    function handleReset() {
        setSquares(Array(9).fill(null));
        setPlayer(1);
    }

    let status;
    if (winner) {
        status = `Player ${winner} Wins!`;
    } else {
        status = `Player ${player}'s turn`;
    }

    return (
        <div className="board-wrapper">
            <div className="status">{status}</div>

            <Board
                squares={squares}
                disabled={isGameOver}
                onSquareClick={handleSquareClick}
            />

            <button className="reset-button" onClick={handleReset}>
                Reset Game
            </button>
        </div>
    );
}