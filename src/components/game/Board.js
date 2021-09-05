import React from "react";
import Square from "./Square";

const style = {
  border: "2px solid black",
  width: "300px",
  height: "300px",
  marginLeft: "40%",
  marginTop: "10%",
  display: "grid",
  gridTemplate: "repeat(3,1fr)/repeat(3,1fr)",
};

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Board;
