import { useState, useEffect } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import History from "./History";

const pStyle = {
  margin: "15px",
  fontSize: "1.5rem",
};

const endStyle = {
  marginLeft: "38%",
  marginTop: "10%",
  fontSize: "1rem",
  border: "1px solid black",
  borderRadius: "2px",
  width: "290px",
  height: "110px",
  backgroundColor: "lightblue",
};

const Game = ({ name1, name2, setLogged, id, setId }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const [draw, setDraw] = useState(false);
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [drawCounter, setDrawCounter] = useState(0);

  const clickHandler = (i) => {
    const copyBoard = [...board];

    if (winner) return;

    if (copyBoard[i] === "X" || copyBoard[i] === "O") {
      return alert("Please choose unoccupied space!");
    }

    copyBoard[i] = xIsNext ? "X" : "O";
    setBoard(copyBoard);
    setXIsNext(!xIsNext);
  };

  const newGame = (e) => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setDraw(false);
    setId(id + 1);
  };

  const reset = (e) => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setDraw(false);
    setId(1);
    setFirstCounter(0);
    setSecondCounter(0);
    setLogged(false);
    localStorage.clear();
  };

  useEffect(() => {
    if (
      winner === null &&
      board[0] !== null &&
      board[1] !== null &&
      board[2] !== null &&
      board[3] !== null &&
      board[4] !== null &&
      board[5] !== null &&
      board[6] !== null &&
      board[7] !== null &&
      board[8] !== null &&
      board[9] !== null
    ) {
      setDraw(true);
      setDrawCounter(drawCounter + 1);

      let trenutno = new Date();
      let datum =
        trenutno.getDate() +
        "." +
        trenutno.getMonth() +
        ". " +
        trenutno.getHours() +
        ":" +
        trenutno.getMinutes();
      let hist =
        id + " " + datum + " " + name1 + " vs " + name2 + "  " + "Draw";
      setHistory([...history, hist]);
    }

    if (winner !== null && xIsNext) {
      setSecondCounter(secondCounter + 1);

      let trenutno = new Date();
      let datum =
        trenutno.getDate() +
        "." +
        trenutno.getMonth() +
        ". " +
        trenutno.getHours() +
        ":" +
        trenutno.getMinutes();
      let hist = id + " " + datum + " " + name1 + " vs " + name2 + "  " + name2;
      setHistory([...history, hist]);
    }
    if (winner !== null && !xIsNext) {
      setFirstCounter(firstCounter + 1);

      let trenutno = new Date();
      let datum =
        trenutno.getDate() +
        "." +
        trenutno.getMonth() +
        ". " +
        trenutno.getHours() +
        ":" +
        trenutno.getMinutes();
      let hist = id + " " + datum + " " + name1 + " vs " + name2 + "  " + name1;
      setHistory([...history, hist]);
    }
  }, [board]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div>
      {draw ? (
        <div className="endgame" style={endStyle}>
          <p className="end-text">Draw!</p>
          <Button
            className="new-game"
            variant="outline-primary"
            onClick={newGame}
          >
            New Game
          </Button>
          <Button
            className="new-game"
            variant="outline-primary"
            onClick={reset}
          >
            Reset
          </Button>
          <History history={history} id={id} setHistory={setHistory} />
        </div>
      ) : winner ? (
        xIsNext ? (
          <div className="endgame" style={endStyle}>
            <p>{name2} is victorious!</p>
            <Button
              className="new-game"
              variant="outline-primary"
              onClick={newGame}
            >
              New Game
            </Button>
            <Button
              className="new-game"
              variant="outline-primary"
              onClick={reset}
            >
              Reset
            </Button>
            <History history={history} id={id} />
          </div>
        ) : (
          <div className="endgame" style={endStyle}>
            <p>{name1} is victorious!</p>
            <Button
              className="new-game"
              variant="outline-primary"
              onClick={newGame}
            >
              New Game
            </Button>
            <Button
              className="new-game"
              variant="outline-primary"
              onClick={reset}
            >
              Reset
            </Button>
            <History history={history} id={id} />
          </div>
        )
      ) : winner ? (
        <></>
      ) : (
        <div>
          <NavBar
            name1={name1}
            name2={name2}
            firstCounter={firstCounter}
            secondCounter={secondCounter}
            drawCounter={drawCounter}
          />
          <p style={pStyle}>
            {xIsNext ? name1 + "'s turn!" : name2 + "'s turn!"}
          </p>
          <Board squares={board} onClick={clickHandler} />
        </div>
      )}
    </div>
  );
};

export default Game;
