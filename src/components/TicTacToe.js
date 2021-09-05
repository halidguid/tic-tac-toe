import { useState } from "react";
import Login from "./login/Login";
import Game from "./game/Game";

const TicTacToe = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [logged, setLogged] = useState(false);
  const [id, setId] = useState(1);

  return (
    <div className="wrapper">
      {logged ? (
        <Game
          name1={name1}
          name2={name2}
          setLogged={setLogged}
          id={id}
          setId={setId}
        />
      ) : (
        <Login
          name1={name1}
          setName1={setName1}
          name2={name2}
          setName2={setName2}
          setLogged={setLogged}
        />
      )}
    </div>
  );
};

export default TicTacToe;
