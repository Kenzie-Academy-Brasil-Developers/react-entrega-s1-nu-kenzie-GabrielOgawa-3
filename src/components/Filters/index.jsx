export const Filters = ({ entry, expenses, all }) => {
  return (
    <div>
      <h2>Resumo financeiro</h2>
      <button onClick={all}>Todos</button>
      <button onClick={entry}>Entradas</button>
      <button onClick={expenses}>Despesas</button>
    </div>
  );
};
