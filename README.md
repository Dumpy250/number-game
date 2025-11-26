Number Match Game (React.js)

A simple interactive 3×3 grid game built with React.
Players take turns clicking squares to reveal their number (Player 1 → 1, Player 2 → 2).
The first player to get three matching numbers in a row wins.

⭐ Features
✅ 3×3 Clickable Grid

Displays nine squares initialized with "?"

Clicking a square reveals the current player’s number (1 or 2)

✅ Turn-Based Gameplay

Players alternate turns automatically

Turn indicator updates dynamically

✅ Prevents Overwriting

Once a square has been clicked, it cannot be changed

Both the Square and game logic guard against accidental overwriting

✅ Win Detection

Game detects three identical numbers in:

Rows

Columns

Diagonals

Displays "Player X Wins!" when a winning line is found

Prevents any further moves after a winner is declared

✅ Modular Architecture

The game is broken into clean, reusable components:

src
- Game.js         # Top-level game controller (state, winner logic)
- Board.js        # Renders the 3×3 grid
- Square.js       # Individual square with click protection
- checkWinner.js  # Pure function that checks all winning lines
- App.js          # Root component

🚀 How to Run the Project
1. Install dependencies
``npm install
``
2. Start the development server
``npm start
``
3. View in your browser
``http://localhost:3000
``

🧩 How It Works
Square Component

Displays "?" if empty

Shows either 1 or 2 after being clicked

Ignores additional clicks (prevents overwriting)

Supports a disabled flag to block input after the game ends

Board Component

Renders the 3×3 grid of Square components

Pure presentation — no game logic inside

Uses props to receive square values and click handlers

Game Component

Stores:

Square values ([null, null, ...])

Current player (1 or 2)

Winner (if any)

Handles:

Alternating turns

Updating the grid

Resetting the game

checkWinner.js

Scans all 8 winning combinations

Returns the winning player or null

🔄 Resetting the Game

A “Reset Game” button clears the board and starts a new round with Player 1.

🛠️ Tech Stack

React.js

JavaScript (ES6+)

CSS for layout/grid styling

IntelliJ IDEA Ultimate (development environment)