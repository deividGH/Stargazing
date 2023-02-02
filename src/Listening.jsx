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
              <a href="https://drive.google.com/file/d/1vSh9r9krEwpbXHSNerS2PD8LSDrSwsV2/view?usp=share_link" target="_blank">Click here to hear the audio</a>
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
              <a href="https://drive.google.com/file/d/1jQdXSeZs6Zkn3uICZ725uMvo8VIei8-u/view?usp=share_link" target="_blank">Click here to hear the audio</a>
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
              <a href="https://drive.google.com/file/d/1Yk_pSjQqQaHm9EUH_gyBRdDU_yU72pwM/view?usp=share_link" target="_blank">Click here to hear the audio</a>
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
