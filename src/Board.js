import { useState } from "react";
import Square from "./Square";

export default function Board() {
    // 9 squares, all empty to start
    const [squares, setSquares] = useState(Array(9).fill(null));
    // current player: 1 or 2
    const [player, setPlayer] = useState(1);

    function handleSquareClick(index) {
        // ignore clicks on already-filled squares
        if (squares[index] !== null) return;

        const nextSquares = squares.slice();
        nextSquares[index] = player; // set this square to 1 or 2
        setSquares(nextSquares);

        // alternate between 1 and 2
        setPlayer(player === 1 ? 2 : 1);
    }

    return (
        <div className="board">
            {squares.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    onClick={() => handleSquareClick(index)}
                />
            ))}
        </div>
    );
}
