import { useState } from "react";
import Formulario from "./Formulario";


function App() {
  const [usuario, setUsuario] = useState("");
  const [validacion, setValidacion] = useState(false);

  return (
    <div>
      <div>
        <Formulario>
          usuario = {usuario}
          validacion = {validacion}
          setValidacion = {setValidacion}
        </Formulario>
      </div>
    </div>
  );
}

export default App;
