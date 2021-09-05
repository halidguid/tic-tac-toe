const style = {
  background: "white",
  border: "1px solid black",
  fontSize: "3rem",
  cursor: "pointer",
  outline: "none",
  margin: 0,
};

const Square = ({ value, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
