import { useState } from "react";
import Formulario from "./Formulario";
import Instrucciones from "./Instrucciones";
import Modales from "./Modales";

function App() {
  const [usuario, setUsuario] = useState("");
  const [validacion, setValidacion] = useState(false);
  const [validacion2, setValidacion2] = useState(false);
  const [validacion3, setValidacion3] = useState(false);

  const validador = () => {
    if (validacion) {
      return <Instrucciones setValidacion2={setValidacion2} setValidacion={setValidacion} />;
    } else if (validacion2) {
      return <Modales setValidacion3 ={setValidacion3} />;
    } else if (validacion3) {
      console.log("No pasa nada aun");
    } else {
      return <Formulario setValidacion={setValidacion} />;
    }
  };

  return (
    <>
      {validador()}

      {/* {validacion ? (
        <Instrucciones 
          setValidacion2 = {setValidacion2}
        />
      ) : (
        <Formulario
          usuario={usuario}
          setUsuario={setUsuario}
          validacion={validacion}
          setValidacion={setValidacion}
        />
      )} */}
    </>
  );
}

export default App;
