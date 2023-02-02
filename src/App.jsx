import { useState } from "react";
import Formulario from "./Formulario";
import Instrucciones from "./Instrucciones";
import Modales from "./Modales";
import Preguntas from "./Preguntas";
import Reading from "./Reading";
import Listening from "./Listening";
import Speaking from "./Speaking";

function App() {
  //VALIDACIONES
  const [validacion, setValidacion] = useState(false);
  const [validacion2, setValidacion2] = useState(false);
  const [validacion3, setValidacion3] = useState(false);
  const [validacion4, setValidacion4] = useState(false);
  const [validacion5, setValidacion5] = useState(false);
  const [validacion6, setValidacion6] = useState(false);

  const validador = () => {
    if (validacion) {
      return (
        <Instrucciones
          setValidacion2={setValidacion2}
          setValidacion={setValidacion}
        />
      );
    } else if (validacion2) {
      return (
        <Modales
          setValidacion3={setValidacion3}
          setValidacion2={setValidacion2}
        />
      );
    } else if (validacion3) {
      return (
        <Preguntas
          setValidacion3={setValidacion3}
          setValidacion4={setValidacion4}
        />
      );
    } else if(validacion4){
        return(
          <Reading
            setValidacion4={setValidacion4}
            setValidacion5={setValidacion5}
          />
        );
    } else if(validacion5){
      return(
        <Listening
          setValidacion5={setValidacion5}
          setValidacion6={setValidacion6}
        />
      );
    } else if(validacion6){
      return(
        <Speaking/>
      );
    } else {
      return (
        <Formulario
          setValidacion={setValidacion}
        />
      );
    }
  };

  return <>{validador()}</>;
  /* return <Preguntas/> */
}

export default App;
