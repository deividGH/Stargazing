import React from "react";
import rana from "./img/ranafinal.jpg";


const Instrucciones = ({setValidacion2, setValidacion}) => {


  const validacion2 = ()=>{
    setValidacion2(true)
    setValidacion(false)
  }
  
  return (
    <div className="wrapper">
      <div className="instrucciones">
        <center><legend>Instructions</legend></center>
        <p>1. Read the texts carefully to answer the questions</p>
        <p>2. Have an internet connection to solve the activities</p>
        <p>3. You will have to solve 15 excersises with each english skill</p>
        <p>4. You will have to pick an avatar to continue</p>
        <p>5. Complete all levels to reach your goal</p>
        <div>
          <center><input type="button" value="CONTINUE" className="button" onClick={validacion2}/></center>
        </div>
      </div>
      <div className="rana">
        <img src={rana} alt="Rana" />
        <div className="titulo">Stargazing</div>
      </div>
    </div>
  );
};

export default Instrucciones;
