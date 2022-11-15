import React from "react";
import rana from "./img/ranafinal.jpg";

const Formulario = ({usuario, validacion, setUsuario, setValidacion}) => {

  const validar = (e) => {

    e.preventDefault()
    
    console.log("Entra a la función")
    setValidacion(true)
    
  };

  return (
    <div className="wrapper">
      <div className="contenedorform">
        <form onSubmit={validar} className="formulario">
          <legend className="legend">Welcome</legend>
          <div className="campo">
            <label className="label">Username</label>
            <input type="text" placeholder="Enter your user name" required />
          </div>
          <div className="campo">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <input type="submit" value="LOG IN" />
        </form>
      </div>

      <div className="rana">
        <img src={rana} alt="Rana" />
        <div className="titulo">Stargazing</div>
      </div>
    </div>
  );
};

export default Formulario;
