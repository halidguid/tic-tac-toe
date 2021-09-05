import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Form = ({ name1, setName1, name2, setName2, setLogged }) => {
  const changeHandler1 = (e) => {
    const newInput = e.target.value;
    setName1(newInput);
  };

  const changeHandler2 = (e) => {
    const newInput = e.target.value;
    setName2(newInput);
  };

  const buttonHandler = (e) => {
    if (name1 === "") return alert("Please Enter First Player's Name");
    if (name2 === "") return alert("Please Enter Second Player's Name");

    setLogged(true);
  };

  useEffect(() => {
    setName1("");
    setName2("");
  }, []);

  return (
    <div className="form-group">
      <div>
        <input
          type="text"
          className="form-control"
          id="usr"
          placeholder="First Player's Name"
          onChange={changeHandler1}
        />
      </div>
      <div>
        <input
          type="text"
          className="form-control"
          id="usr"
          placeholder="Second Player's Name"
          onChange={changeHandler2}
        />
      </div>
      <div>
        <Button variant="outline-primary" onClick={buttonHandler}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default Form;
