import { useState } from "react";

export const Form = ({ addTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [typeValue, setTypeValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      description: description,
      type: typeValue,
      value: value,
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

      <label htmlFor="value">Valor</label>
      <input
        type="number"
        name="value"
        placeholder="R$"
        onChange={(event) => setValue(event.target.value)}
      />

      <label htmlFor="typeValue"></label>
      <select
        name="typeValue"
        id="typeValue"
        onChange={(event) => setTypeValue(event.target.value)}
      >
        <option value="entrada/saida">Entrada/Saida</option>
        <option value="entrada">Entrada</option>
        <option value="saida">Saida</option>
      </select>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
