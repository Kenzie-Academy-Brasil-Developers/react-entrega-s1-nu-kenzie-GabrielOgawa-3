import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }
  console.log(listTransactions);
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
    </div>
  );
};

export default App;
