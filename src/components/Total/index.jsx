import "./index.css";

export const Total = ({ listTransactions }) => {
  const filteredValue = listTransactions.map(
    (transaction) => transaction.value
  );
  function handleValue() {
    const reduce = filteredValue.reduce((previousValue, currentValue) => {
      return currentValue + previousValue;
    }, 0);
    return `$ ${reduce}`;
  }
  const totalValue = handleValue();
  return (
    <div className="containerTotal">
      <div>
        <p>Valor Total:</p>
        <p id="price">{totalValue}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
