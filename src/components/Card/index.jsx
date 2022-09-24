import { IoMdTrash } from "react-icons/io";
import "./index.css";

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
    <li id={transaction.type}>
      <div>
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </div>
      <p>{`R$ ${transaction.value},00`}</p>
      <button type="button" onClick={() => handleTransaction(transaction)}>
        <IoMdTrash />
      </button>
    </li>
  );
};
