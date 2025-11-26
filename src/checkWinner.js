export function checkWinner(squares) {
    const lines = [
        [0, 1, 2], // rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // cols
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // diagonals
        [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (
            squares[a] !== null &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]; // 1 or 2
        }
    }

    return null;
}
