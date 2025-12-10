import Square from "./Square";

export default function Board({ squares, onSquareClick, disabled }) {
    return (
        <div className="board">
            {squares.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    disabled={disabled}
                    onClick={() => onSquareClick(index)}
                />
            ))}
        </div>
    );
}

