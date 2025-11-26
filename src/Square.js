// Square.js
export default function Square({ value, onClick, disabled }) {
    function handleClick() {
        if (disabled || value !== null) return;
        onClick();
    }

    return (
        <button className="square" onClick={handleClick}>
            {value ?? "?"}
        </button>
    );
}


