import "./index.css";
import { Card } from "../Card";

export const List = ({ listTransactions, setListTransactions }) => {
  return (
    <ul className="ulTransactions">
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
