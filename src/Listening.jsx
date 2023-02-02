import React from "react";

const Listening = ({setValidacion5, setValidacion6}) => {
    const v = () => {
        setValidacion6(true);
        setValidacion5(false);
        window.scrollTo(0, 0);
      };
  return (
    <div className="contenedor">
      <div className="header">
        <p>Listening</p>
      </div>
      <div className="contenedor2">
        <form className="formulario2">
          <div>
            <fieldset>
              <legend>Listen to the next audio and answer the questions</legend>
              <audio id="my-audio" controls>
                <source src="../audios/Audio1.mp3" type="audio/mp3"></source>
                <p>Su navegador no soporta el elemento audio</p>
              </audio>
              <p>What did the boy say in the candy store?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>How many dollars did the boy have?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>What was the last thing the child bought?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>
                What was the condition for the boy to bring the box of sweets to
                his mother?
              </p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>Did the kid finally get the chocolates?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Listen to the next audio and answer the questions</legend>
              <audio id="my-audio" controls>
                <source src="../audios/Audio2.mp3" type="audio/mp3"></source>
                <p>Su navegador no soporta el elemento audio</p>
              </audio>
              <p>What did dan do after leaving school?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>What job has a better salary than the library</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>As Dan is younger, where can he work?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>Where does Dan's friend work?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p> How would Dan learn about the job?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Listen to the next audio and answer the questions</legend>
              <audio id="my-audio" controls>
                <source src="../audios/Audio3.mp3" type="audio/mp3"></source>
                <p>Su navegador no soporta el elemento audio</p>
              </audio>
              <p>Where did the family go on vacation?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>Who did the family meet upon arrival at their destination?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>Where did the family go to eat?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p>What forest did the family go to?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
              <p> What did the family say at the end of the trip?</p>
              <textarea name="" id="" cols="50" rows="2"></textarea>
            </fieldset>
          </div>
          <div className="siguiente">
            <input
              type="button"
              value="SEND"
              className="button2"
              onClick={v}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Listening;
