export const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  function handleTransaction(transaction) {
    const FilteredListTransactions = listTransactions.filter(
      (element) => element !== transaction
    );
    setListTransactions(FilteredListTransactions);
  }
  return (
    <li>
      <h2>{transaction.description}</h2>
      <span>{transaction.type}</span>
      <span>{transaction.value}</span>
      <button type="button" onClick={() => handleTransaction(transaction)}>
        X
      </button>
    </li>
  );
};
