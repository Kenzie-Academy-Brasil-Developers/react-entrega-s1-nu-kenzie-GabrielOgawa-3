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
      value: typeValue === "Entrada" ? Number(value) : Number(value * -1),
    };
    addTransactions(newTransaction);

    setDescription("");
    setValue("");
    setTypeValue("entrada/saida");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        value={description}
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
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="typeValue">Tipo de valor</label>
          <select
            name="typeValue"
            id="typeValue"
            value={typeValue}
            onChange={(event) => setTypeValue(event.target.value)}
          >
            <option value="entrada/saida">Entrada/Saida</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};
