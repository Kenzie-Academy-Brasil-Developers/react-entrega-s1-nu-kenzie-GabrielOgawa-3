import { useState } from "react";
import "./App.css";
import { EmpityList } from "./components/EmpityList";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { InicialPage } from "./components/InicialPage";
import { List } from "./components/List";
import { Total } from "./components/Total";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredlist, setFilteredList] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }
  function entry() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "Entrada"
    );

    if (newList.length !== 0) {
      setFilteredList(newList);
    } else {
      alert("Não possui entradas");
    }
  }

  function expenses() {
    const newList = listTransactions.filter(
      (transaction) => transaction.type === "Despesa"
    );

    if (newList.length !== 0) {
      setFilteredList(newList);
    } else {
      alert("Não possui despesas");
    }
  }
  function all() {
    setFilteredList([]);
  }

  return (
    <div className="App">
      {!isLogin ? (
        <InicialPage setIsLogin={setIsLogin} />
      ) : (
        <div className="containerHome">
          <header>
            <div>
              <img src="../assets/nukenzie.png" alt="Logo NuKenzie" />
              <button onClick={() => setIsLogin(false)}>Inicio</button>
            </div>
          </header>
          <div>
            <div>
              <Form
                listTransactions={listTransactions}
                setlistTransactions={setListTransactions}
                addTransactions={addTransactions}
              />

              {!!listTransactions.length && (
                <Total listTransactions={listTransactions} />
              )}
            </div>

            <div className="containerTransactions">
              <Filters entry={entry} expenses={expenses} all={all} />

              {!filteredlist.length && (
                <List
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              )}
              {!!filteredlist.length && (
                <List
                  listTransactions={filteredlist}
                  setListTransactions={setFilteredList}
                />
              )}
              {!listTransactions.length && <EmpityList />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
