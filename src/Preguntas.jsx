import React from "react";

const Preguntas = ({
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  setP1,
  setP2,
  setP3,
  setP4,
  setP5,
  setP6,
  setP7,
  setP8,
  setP9,
  setP10,
  setP11,
  setP12,
  setP13,
  setP14,
  setP15,
}) => {
  const pregunta1 = (e) => {
    setP1(e.target.value);
  };

  const pregunta2 = (e) => {
    setP2(e.target.value);
  };
  const pregunta3 = (e) => {
    setP3(e.target.value);
  };
  const pregunta4 = (e) => {
    setP4(e.target.value);
  };
  const pregunta5 = (e) => {
    setP5(e.target.value);
  };
  const pregunta6 = (e) => {
    setP6(e.target.value);
  };
  const pregunta7 = (e) => {
    setP7(e.target.value);
  };
  const pregunta8 = (e) => {
    setP8(e.target.value);
  };
  const pregunta9 = (e) => {
    setP9(e.target.value);
  };
  const pregunta10 = (e) => {
    setP10(e.target.value);
  };
  const pregunta11 = (e) => {
    setP11(e.target.value);
  };
  const pregunta12 = (e) => {
    setP12(e.target.value);
  };
  const pregunta13 = (e) => {
    setP13(e.target.value);
  };
  const pregunta14 = (e) => {
    setP14(e.target.value);
  };
  const pregunta15 = (e) => {
    setP15(e.target.value);
  };

  return (
    <div className="contenedor">
      <div className="header">
        <p>Questionnaire</p>
      </div>
      <div className="contenedor2">
        <form action="">
          <div>
            <legend>
              Fill in the blank spaces with the correct modal verb
            </legend>
          </div>
          <div>
            <div onChange={pregunta1}>
              <fieldset>
                <legend>1.Steve ______ tie his shoes by himself</legend>
                <label className="block">
                  <input type="radio" name="p1" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p1" value="2" />
                  Could
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta2}>
              <fieldset>
                <legend>
                  2.Mary _______ play the piano when she was young.
                </legend>
                <label className="block">
                  <input type="radio" name="p2" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="2" />
                  Could
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta3}>
              <fieldset>
                <legend>3. _____ i help you to set the table?</legend>
                <label className="block">
                  <input type="radio" name="p3" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p3" value="2" />
                  Could
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta4}>
              <fieldset>
                <legend>4. _______ George come to the party tonight?</legend>
                <label className="block">
                  <input type="radio" name="p4" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p4" value="2" />
                  Could
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta5}>
              <fieldset>
                <legend>
                  5. She _______ sing better before her nose surgery.
                </legend>
                <label className="block">
                  <input type="radio" name="p5" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p5" value="2" />
                  Could
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta6}>
              <fieldset>
                <legend>
                  6. In my opinion, they _______ go to Portugal, not Italy.
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Could
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Should
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta7}>
              <fieldset>
                <legend>
                  7. Sarah _______ play basketball better three years ago.
                </legend>
                <label className="block">
                  <input type="radio" name="p7" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p7" value="2" />
                  Could
                </label>
                <label className="block">
                  <input type="radio" name="p7" value="3" />
                  May
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta8}>
              <fieldset>
                <legend>
                  8. The weather forecast says it _____ rain tomorrow morning.
                </legend>
                <label className="block">
                  <input type="radio" name="p2" value="1" />
                  Should
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="2" />
                  May
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="3" />
                  Must
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta9}>
              <fieldset>
                <legend>9. Where is Kate? She _______ be home by now</legend>
                <label className="block">
                  <input type="radio" name="p9" value="1" />
                  Can
                </label>
                <label className="block">
                  <input type="radio" name="p9" value="2" />
                  May
                </label>
                <label className="block">
                  <input type="radio" name="p9" value="3" />
                  Should
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta10}>
              <fieldset>
                <legend>
                  10. You _______ tell her about the surprise party. It's a
                  secret!
                </legend>
                <label className="block">
                  <input type="radio" name="p2" value="1" />
                  Should
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="2" />
                  Mustn't
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="3" />
                  Should
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta11}>
              <fieldset>
                <legend>
                  11. your / want / They / should/ you / listen / best / for /
                  You / to / parents / the
                </legend>
                <label className="block">
                  <input type="radio" name="p11" value="1" />
                  They should listen best. You want your parents for you
                </label>
                <label className="block">
                  <input type="radio" name="p11" value="2" />
                  You should listen to your parents. They want the best for you.
                </label>
                <label className="block">
                  <input type="radio" name="p11" value="3" />
                  want They your parents. You should listen best
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta12}>
              <fieldset>
                <legend>
                  12. touch / lamp / the / post / You / musn't / Danger!
                </legend>
                <label className="block">
                  <input type="radio" name="p12" value="1" />
                  You Danger! musn't touch the post lamp
                </label>
                <label className="block">
                  <input type="radio" name="p12" value="2" />
                  post the lamp Danger! You musn't touch
                </label>
                <label className="block">
                  <input type="radio" name="p12" value="3" />
                  Danger! You musn't touch the lamp post.
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta13}>
              <fieldset>
                <legend>13. Susan/ chess / can / well / play / really</legend>
                <label className="block">
                  <input type="radio" name="p13" value="1" />
                  can chess play Susan really well
                </label>
                <label className="block">
                  <input type="radio" name="p13" value="2" />
                  Susan can play chess really well
                </label>
                <label className="block">
                  <input type="radio" name="p13" value="3" />
                  chess can play Susan well really
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta14}>
              <fieldset>
                <legend>
                  14. wait/ have to / the / We / restaurant / empty / tables /
                  outside / There / any / aren't
                </legend>
                <label className="block">
                  <input type="radio" name="p14" value="1" />
                  We have to wait outside the restaurant. There aren't any empy
                  tables.
                </label>
                <label className="block">
                  <input type="radio" name="p14" value="2" />
                  There aren't tables outside. empty We wait to have
                </label>
                <label className="block">
                  <input type="radio" name="p14" value="3" />
                  We wait have to. There aren't tables empty any restaurant
                </label>
              </fieldset>
            </div>
            <div onChange={pregunta15}>
              <fieldset>
                <legend>15. to / Mr Smith / ,please? / can / i / speak</legend>
                <label className="block">
                  <input type="radio" name="p2" value="1" />
                  to Mrsmith can speak i, please?
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="2" />
                  can i speak to Mr Smith, please?
                </label>
                <label className="block">
                  <input type="radio" name="p2" value="3" />
                  can speak to Mrsmith i, please?
                </label>
              </fieldset>
            </div>
            <div className="siguiente">
              <input type="button" value="SEND" className="button2" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preguntas;
