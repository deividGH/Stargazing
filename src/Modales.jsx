import React from "react";
import rana from "./img/ranafinal.jpg";

const Modales = () => {

  const alform = () =>{
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSemNMPDqaihac6HKzLW_HbCeFBqqtt0E-cLD7_xVUzYnfgX-A/viewform?usp=sf_link'
  }
  return (
    <center>
      <div className="container">
        <div className="logo">
          <img src={rana} alt="" />
          <p>Modal verbs</p>
        </div>
        <div className="def">
          <p className="superp">Definition</p>
          <p>
            Modal verbs are auxiliary verbs that we use to express an opinion
            about whether something is probable or possible. We also use them
            when talking about ability, asking permission, or making a request.
          </p>
          <div>
            <p className="underline">Interrogative</p>
            <p className="font16">
              When we want to ask something and there is a modal verb in the
              sentence, we must put the modal at the beginning of the sentence,
              followed by the subject and the main verb.
            </p>
          </div>
          <div className="structures">
            <p>
              <span className="rojo">Modal verb</span>+
              <span className="verde">Subject</span>+
              <span className="morado">Principal verb</span>+
              <span className="azul">Complement</span>
            </p>
            <p>
              <span className="rojo2">Would</span>{" "}
              <span className="verde2">you</span>{" "}
              <span className="morado2">dance</span>{" "}
              <span className="azul2">with me?</span>{" "}
            </p>
            <p>(¿Bailarías conmigo?)</p>
          </div>
          <div>
            <p>Modal verbs list:</p>
            <p>Can, May, Will, Ought to, Must, Could, Might</p>
            <p>Shall, Should do, Would</p>
          </div>
        </div>
        <div className="estructura">
          <div>
            <p className="superp">Structure</p>
            <p className="underline">Afirmative</p>
            <p>
              Regularly, the modal verb precedes the main verb of the sentence,
              which goes in the infinitive form, that is, in the present
            </p>
          </div>
          <div className="structures">
            <p>
              <span className="verde">Subject</span>+
              <span className="rojo">Modal verb</span>+
              <span className="morado">Principal verb</span>+
              <span className="azul">Complement</span>
            </p>
            <p>
              <span className="verde2">I</span>{" "}
              <span className="rojo2">must</span>{" "}
              <span className="morado2">make</span>{" "}
              <span className="azul2">a decision.</span>
            </p>
            <p>(Debo tomar una decision)</p>
          </div>
          <div>
            <p className="underline">Negative</p>
            <p>
              To make a negative sentence with a modal verb, we must add the
              adverb not after the modal. Except for may, all verbs can be
              contracted in their negative form.
            </p>
          </div>
          <div className="structures">
            <p>
              <span className="verde">Subject</span>+
              <span className="rojo">Modal verb</span>+
              <span className="cafe">Not</span>+
              <span className="morado">Principal verb</span>+
              <span className="azul">Complement</span>
            </p>
            <p>
              <span className="verde2">He</span>{" "}
              <span className="rojo2">can</span>
              <span className="cafe2">'t</span>{" "}
              <span className="morado2">lift</span>{" "}
              <span className="azul2">so much weight.</span>
            </p>
            <p>(Él no puede levantar tanto peso)</p>
          </div>
        </div>
      </div>
      <div className="siguiente">
        <input type="button" value="CONTINUE" className="button2"  onClick={alform}/>
      </div>
    </center>
  );
};

export default Modales;
