import "./index.css";

export const Filters = ({ entry, expenses, all }) => {
  return (
    <div className="containerFinance">
      <h2>Resumo financeiro</h2>
      <div className="containerBtns">
        <button onClick={all} id="btnTarget">
          Todos
        </button>
        <button onClick={entry}>Entradas</button>
        <button onClick={expenses}>Despesas</button>
      </div>
    </div>
  );
};
