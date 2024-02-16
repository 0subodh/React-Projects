import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ isxNext, squares, onPlay }) {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isxNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
      onPlay(nextSquares);
    }
    console.log(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `winner : ${winner}`;
  } else {
    status = `Next move: ${isxNext ? "X" : "O"}`;
  }

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="button-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="button-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="button-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function Game() {
  const [xnext, setXnext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const newSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXnext(!xnext);
  }

  return (
    <>
      <div className="game-board">
        <Board xnext={xnext} squares={newSquares} onPlay={handlePlay} />
      </div>
      <div className="game-details">
        <ul>
          <li>game moves</li>
        </ul>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
