import React from "react";
import familia from "./img/familia.jpg";

const Speaking = () => {
  const final = () => {
    prompt("Thank you, your answers will be reviewed");
    location.reload();
  };
  return (
    <div className="contenedor">
      <div className="header">
        <p>Speaking</p>
      </div>
      <div className="contenedor2">
        <form className="formulario2">
          <div>
            <fieldset>
              <legend>
                Forme una oración en inglés de manera correcta utilizando los
                verbos modales y envíe un audio
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Pronuncie la siguiente oración de manera correcta y envié un
                audio: You should go to the concert tomorrow
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Mencione tres cosas en inglés que son una obligación para usted
                en un audio y envíelo aquí
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Describa lo que sucede en inglés en esta imagen con los verbos
                modales y grabé un audio
              </legend>
              <div>
                <img src={familia} alt="Iagen" />
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Cree una historia en inglés con verbos modales y envié un audio
                de su historia
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Organice de manera correcta en un audio está oración I/study/to
                get/must/good/grades
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Cree una oración en inglés con temática de su agrado utilizando
                los verbos en un audio
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Pronuncie estos verbos modales tanto en inglés como en español
                en un audio Should
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Realice una pregunta en inglés con verbos modales y diga su
                respuesta " puede ser de cualquier temática" y grabé un audio
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Responda la siguiente pregunta con un audio en inglés: What
                should someone do to be smarter?
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Diga 2 acciones en inglés conn verbos modales que puede realizar
                el conejo
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Responda en un audio en inglés a la siguiente pregunta ¿Cual es
                el animal que siempre está en cuevas y utiliza una habilidad
                única? Si sabes cuáles dimelo una pista tiene alas
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Responda a esta adivinanza y esta pregunta con un audio:Es un
                mamífero muy común y se encuentra en muchas de las granjas
                entonces What is the animal that cannot look up?
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                En un audio si todo lo que puedes hacer y un poco de tu vida
                claro está en inglés
              </legend>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Pronuncia estos verbos de manera correcta en inglés
              </legend>
              <div>
                <p>
                  Conducir Poder Tener Comer Saltar Pelear Mirar Cortar Bailar
                  Correr
                </p>
                <input
                  type="file"
                  multiple
                  onChange={(e) => this.handleFileChange(e)}
                />
              </div>
            </fieldset>
          </div>

          <div className="siguiente">
            <input type="button" value="SEND" className="button2" onClick={final} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Speaking;
