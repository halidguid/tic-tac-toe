import HistoryItem from "./HistoryItem";

const style = {
  listStyleType: "none",
  marginTop: "15px",
  border: "1px solid black",
  borderRadius: "12.5px",
  backgroundColor: "lightblue",
};

const History = ({ history, id, setHistory }) => {
  const hist = JSON.parse(localStorage.getItem("history"));

  return (
    <div className="history">
      <ul style={style}>
        {hist !== null ? (
          hist.map((item, index) => {
            return (
              <div className="history-item">
                <HistoryItem item={item} key={index} />
              </div>
            );
          })
        ) : (
          <></>
        )}
        <li>{history[id - 1]}</li>
      </ul>
    </div>
  );
};

export default History;
