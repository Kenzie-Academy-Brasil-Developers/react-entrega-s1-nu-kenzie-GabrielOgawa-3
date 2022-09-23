import { useState } from "react";
import "./App.css";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Total } from "./components/Total";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredlist, setFilteredList] = useState([]);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }
  function entry() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "entrada"
    );
    setFilteredList(newList);
  }
  function expenses() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "saida"
    );
    setFilteredList(newList);
  }
  function all() {
    setFilteredList([]);
  }

  return (
    <div className="App">
      <header>
        <img src="../assets/nukenzie.png" alt="Logo NuKenzie" />
        <button>Inicio</button>
      </header>

      <Form
        listTransactions={listTransactions}
        setlistTransactions={setListTransactions}
        addTransactions={addTransactions}
      />

      <Total listTransactions={listTransactions} />

      <Filters entry={entry} expenses={expenses} all={all} />

      {!filteredlist.length && (
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
      {filteredlist.length && (
        <List
          listTransactions={filteredlist}
          setListTransactions={setFilteredList}
        />
      )}
    </div>
  );
};

export default App;
