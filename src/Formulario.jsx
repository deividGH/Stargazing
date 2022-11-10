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
          <legend className="legend">Bienvenido</legend>
          <div className="campo">
            <label className="label">Usuario</label>
            <input type="text" placeholder="Escribe tu usuario" required />
          </div>
          <div className="campo">
            <label className="label">Contraseña</label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              required
            />
          </div>
          <input type="submit" value="INGRESAR" />
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
