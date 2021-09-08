const styles = {
  borderBottom: "1px solid black",
  fontSize: "1.5rem",
  width: "350px",
};

const NavBar = ({ name1, name2, firstCounter, secondCounter, drawCounter }) => {
  return (
    <div className="navbar" style={styles}>
      TicTacToe | {name1}:{firstCounter} vs {name2}:{secondCounter}|Ties:
      {drawCounter}
    </div>
  );
};

export default NavBar;
