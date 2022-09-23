import { Card } from "../Card";

export const List = ({ listTransactions, setListTransactions }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          key={index}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ))}
    </ul>
  );
};
