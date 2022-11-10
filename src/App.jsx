import { useState } from "react";
import Formulario from "./Formulario";
import Instrucciones from "./Instrucciones";

function App() {
  const [usuario, setUsuario] = useState("");
  const [validacion, setValidacion] = useState(false);

  return (
    <div>
      <div>
        {validacion ? (
          <Instrucciones />
        ) : (
          <Formulario
            usuario={usuario}
            setUsuario={setUsuario}
            validacion={validacion}
            setValidacion={setValidacion}
          />
        )}
      </div>
    </div>
  );
}

export default App;
