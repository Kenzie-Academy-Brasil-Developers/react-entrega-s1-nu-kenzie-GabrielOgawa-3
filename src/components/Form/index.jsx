import { useState } from "react";
import "./index.css";

export const Form = ({ addTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [typeValue, setTypeValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      description: description,
      type: typeValue,
      value: typeValue === "entrada" ? Number(value) : Number(value * -1),
    };
    addTransactions(newTransaction);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>

      <div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            name="value"
            placeholder="R$"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="typeValue">Tipo de valor</label>
          <select
            name="typeValue"
            id="typeValue"
            onChange={(event) => setTypeValue(event.target.value)}
          >
            <option value="entrada/saida">Entrada/Saida</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
