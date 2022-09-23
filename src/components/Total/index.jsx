export const Total = ({ listTransactions }) => {
  const filteredValue = listTransactions.map(
    (transaction) => transaction.value
  );

  return (
    <div>
      <div>
        <p>Valor Total:</p>
        <p>
          {filteredValue.reduce((previousValue, currentValue) => {
            return currentValue + previousValue;
          }, 0)}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
