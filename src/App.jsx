import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Total } from "./components/Total";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
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
      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};

export default App;
