import "./index.css";

export const InicialPage = ({ setIsLogin }) => {
  return (
    <div className="container">
      <div className="infoContainer">
        <img src="../assets/nukenziewhite.png" alt="Logo NuKenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button type="button" onClick={() => setIsLogin(true)}>
          Iniciar
        </button>
      </div>
      <img src="../assets/illustration.png" alt="" />
    </div>
  );
};
