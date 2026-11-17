# Number Match Game (React.js)

A simple interactive 3×3 grid game built with React. Players take turns placing their number (Player 1 → 1, Player 2 → 2). The first player to get three matching numbers in a row, column or diagonal wins.

## ⭐ Features

- Nine squares initially display `?`; clicking an empty square places the current player's number.
- Turns alternate, with a visible player indicator.
- Both `Square` and `Game` guard against overwriting an occupied square.
- A winning line displays **“Player X Wins!”** and blocks new moves on that winning board.
- **Move History** lets you return to an earlier position. Playing from there discards the later moves and starts a new branch.
- **Reset Game** clears the board and history, returning to Player 1.

## 🧩 How It Works

| File | Responsibility |
|---|---|
| `src/index.js` | Mounts React's root |
| `src/App.js` | Root application presentation |
| `src/Game.js` | Stores board history/current move; derives current player and winner; handles moves, history jumps and reset |
| `src/Board.js` | Renders the grid from props |
| `src/Square.js` | Displays a value and ignores guarded clicks |
| `src/checkWinner.js` | Checks eight winning lines; returns the player or `null` |
| `src/App.css` | Board/grid styling |

The current player and winner are derived values, not separate stored state. A winner stops moves only on the selected winning position; history navigation remains available. The `disabled` prop is checked by click handlers, not applied as the native HTML button's `disabled` attribute.

## 🛠️ Tech Stack and requirements

- React and React DOM **19.2.0** in the lockfile
- JavaScript and CSS
- Create React App tooling through **`react-scripts` 5.0.1**
- Node.js and npm; no project-specific Node/npm version pin

IntelliJ IDEA is optional, not required to run the project. `react-scripts` declares Node `>=14`, but this is not a tested minimum for the complete dependency tree or a recommendation to use an obsolete Node release. Use a maintained Node LTS version after checking compatibility with this older toolchain.

**Maintenance note:** [Create React App is deprecated](https://react.dev/blog/2025/02/14/sunsetting-create-react-app) and in maintenance mode. For future development, consider a separately reviewed migration to maintained tooling rather than assuming this setup is a current default. No dependency migration is required merely to read the source.

## 🚀 How to Run the Project

**Source-checked, unexecuted instructions**, from the repository root:

```sh
npm ci
```

This uses the checked-in lockfile, downloads dependencies and replaces an existing `node_modules` directory. Dependency resolution and compatibility have not been verified by a fresh install; do not force an incompatible install or silently rewrite the lockfile.

```sh
npm start
```

This starts the development server and may open a browser. The usual address is `http://localhost:3000`; use the URL actually reported in the terminal.

Other declared scripts:

- `npm run build` — generates production assets in `build/`.
- `npm test` — starts the Create React App test runner; no test source files are included in this revision.
- `npm run eject` — rewrites tooling configuration and is not needed for normal use.

## Limitations

- **No draw detection:** a full board without a winner still displays a player's turn. Occupancy guards prevent another placement; reset or navigate history to continue.
- State/history are in memory only and reset when the page reloads.
- No online multiplayer, AI opponent, persistent scores or evaluated gameplay/accessibility coverage is provided.
