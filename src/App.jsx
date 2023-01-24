import { useState } from "react";
import Formulario from "./Formulario";
import Instrucciones from "./Instrucciones";
import Modales from "./Modales";
import Preguntas from "./Preguntas";

function App() {
  //VALIDACIONES
  const [validacion, setValidacion] = useState(false);
  const [validacion2, setValidacion2] = useState(false);
  const [validacion3, setValidacion3] = useState(false);
  const [validacion4, setValidacion4] = useState(false);


  //PREGUNTAS
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [p4, setP4] = useState(0);
  const [p5, setP5] = useState(0);
  const [p6, setP6] = useState(0);
  const [p7, setP7] = useState(0);
  const [p8, setP8] = useState(0);
  const [p9, setP9] = useState(0);
  const [p10, setP10] = useState(0);
  const [p11, setP11] = useState(0);
  const [p12, setP12] = useState(0);
  const [p13, setP13] = useState(0);
  const [p14, setP14] = useState(0);
  const [p15, setP15] = useState(0);

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
          setP1={setP1}
          setP2={setP2}
          setP3={setP3}
          setP4={setP4}
          setP5={setP5}
          setP6={setP6}
          setP7={setP7}
          setP8={setP8}
          setP9={setP9}
          setP10={setP10}
          setP11={setP11}
          setP12={setP12}
          setP13={setP13}
          setP14={setP14}
          setP15={setP15}
          p1={p1}
          p2={p2}
          p3={p3}
          p4={p4}
          p5={p5}
          p6={p6}
          p7={p7}
          p8={p8}
          p9={p9}
          p10={p10}
          p11={p11}
          p12={p12}
          p13={p13}
          p14={p14}
          p15={p15}
        />
      );

      console.log("No pasa nada aun");
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
