import { useState } from "react";
import dynamic from "next/dynamic";
import Square from "../components/Square";
dynamic(() => import("./Board"), {
  ssr: false,
});

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      } else {
        return val;
      }
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div>
      <p>{currentPlayer}</p>
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, i: number) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Board;
