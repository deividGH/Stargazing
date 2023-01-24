import React from "react";
import familia from "./img/familia.jpg";

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

  const final = ()=> {
    prompt("Thank you, your answers will be reviewed" )
    location.reload()
  }
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
        <form className="formulario2">
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
            {/*DESDE AQUÍ EMPIEZA EL LISTENING*/}
            <div className="superp">
              <br />
              <legend>Listening</legend>
              <br />
            </div>
            <div>
              <fieldset>
                <legend>
                  Listen to the next audio and answer the questions
                </legend>
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
                  What was the condition for the boy to bring the box of sweets
                  to his mother?
                </p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
                <p>Did the kid finally get the chocolates?</p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  Listen to the next audio and answer the questions
                </legend>
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
                <legend>
                  Listen to the next audio and answer the questions
                </legend>
                <audio id="my-audio" controls>
                  <source src="../audios/Audio3.mp3" type="audio/mp3"></source>
                  <p>Su navegador no soporta el elemento audio</p>
                </audio>
                <p>Where did the family go on vacation?</p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
                <p>
                  Who did the family meet upon arrival at their destination?
                </p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
                <p>Where did the family go to eat?</p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
                <p>What forest did the family go to?</p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
                <p> What did the family say at the end of the trip?</p>
                <textarea name="" id="" cols="50" rows="2"></textarea>
              </fieldset>
            </div>
            <div className="superp">
              <br />
              <legend>Reading</legend>
              <br />
            </div>
            <div className="reading">
              <fieldset>
                <legend>Valentine's Day </legend>
                <p>
                  Valentine's Day (or Valentine's Day) is a holiday that, in the
                  United States, takes place on February 14 and technically
                  represents the achievements of Saint Valentine, a
                  third-century Roman saint. That said, most Americans, instead
                  of honoring Valentine's Day through a religious ceremony,
                  enjoy the holiday by engaging in "romantic" behavior with
                  their partner or someone they wish to be their partner; Gifts,
                  special dinners, and other acknowledgments of affection
                  comprise most people's Valentine's Day celebrations.
                  Chocolates and flowers are commonly given on Valentine's Day,
                  as are the accompanying greeting cards (greeting card
                  companies release new Valentine's Day designs annually). Red
                  and pink are generally understood to be "the colors" of
                  Valentine's Day, and many people, instead of celebrating
                  romantically, spend the holiday with their friends and/or
                  family. Variations of Valentine's Day are celebrated around
                  the world throughout the year. In the United States, the
                  holiday, although recognized by the vast majority of the
                  population, is not recognized at the federal level; time off
                  is not granted for Valentine's Day
                </p>
              </fieldset>
              <fieldset>
                <legend>
                  What are the representative colors of Valentine's Day?
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Orange and pink
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Red and pink
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Purple and pink
                </label>
              </fieldset>
              <fieldset>
                <legend>Why is this day celebrated?</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Technically it is commemorating a saint named Valentine
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Because love and reconciliation are sought
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  It is a celebration to remember the time together and spend it
                  as a couple
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  With what kind of person is it usual to spend this date?
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  With someone you appreciate
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  With someone you love romantically=answer
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  With a person you love very much
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  Based on this date, tell me an action that is frequently done
                  on this date
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Give gifts to people you care about
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Go for a walk in the park alone
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Spend time with my partner
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  What kind of feelings do you seek to express this day?
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />A romantic feeling
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />A feeling of anger
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />A feeling of
                  pleasure
                </label>
              </fieldset>
              <fieldset>
                <legend>Human body parts and organs </legend>
                <p>
                  It goes without saying that humans (mammals identifiable as
                  those that stand upright and are comparatively advanced and
                  capable of detailed thought) have pretty remarkable bodies,
                  given all that they've accomplished. (Furthermore, an
                  especially intelligent human brain produced this text!) To be
                  sure, humans have overcome predators, disease, and all sorts
                  of other obstacles over thousands of years. To fully
                  understand and appreciate these accomplishments, let's take at
                  some of the most well-known parts of the human body! The head,
                  or the spherical body part that contains the brain and rests
                  at the top of the human body, has quite a few individual
                  organs and body parts on it. (It should quickly be mentioned
                  that hair occupies the space on top of the head, and the ears,
                  the organs responsible for hearing, are located on either side
                  of the head.) From top to bottom, the eyebrows, or horizontal
                  strips of hair that can be found above the eye, are the first
                  components of the head. The eyes are below them, and are
                  round, orb-like organs that allow humans to see. The eyes make
                  way for the nose, or an external (sticking-out) organ that
                  plays an important part in the breathing and
                  bacteria-elimination processes. Below that is the mouth, or a
                  wide, cavernous organ that chews food, removes bacteria, helps
                  with breathing, and more. The mouth contains teeth, or small,
                  white-colored, pointed body parts used to chew food, and the
                  tongue, or a red-colored, boneless organ used to chew food and
                  speak. The neck is the long body part that connects the head
                  to the chest (the muscular body part that protects the heart
                  and lungs), and the stomach, or the part of the body that
                  contains food and liquid-processing organs, comes below that.
                  The legs are the long, muscular body parts that allow humans
                  to move from one spot to another and perform a variety of
                  actions. Each leg contains a thigh (a thick, especially
                  muscular body part used to perform strenuous motions; the
                  upper part of the leg) and a calf (thinner, more flexible body
                  part that absorbs the shock associated with movement; the
                  lower part of the leg). Feet can be found at the bottom of
                  legs, and each foot is comprised of five toes, or small
                  appendages that help balance. Arms are long, powerful body
                  parts that are located on either side of chest, below the
                  shoulders;arms are comprised of biceps (the thicker, more
                  powerful upper portion), and forearms (the thinner, more
                  flexible lower portion). Hands, or small, gripping body parts
                  used for a tremendous number of actions, are at the end of
                  arms. Each hand contains five fingers, or small appendages
                  used to grip objects. The aforementioned shoulders are rounded
                  body parts that aid arms' flexibility. One's back is found on
                  the opposite side of the stomach, and is a flat section of the
                  body that contains important muscles that're intended to
                  protect the lungs and other internal organs, in addition to
                  helping humans perform certain motions and actions.
                </p>
              </fieldset>
              <fieldset>
                <legend>
                  In the text he refers to the human as one of the most capable
                  mammals, why?
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  For its great ability to create weapons
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  For the fact that it has overcome various diseases and
                  predators
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  For his great social skills
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  What is the first part of the body that you mention and what
                  does it tell us about it?
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  The hands and mentions its importance
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  The eyes and tells us their function
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Head and gives us a brief description of this
                </label>
              </fieldset>
              <fieldset>
                <legend>In the text we are told that the arms are</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  The weakest and shortest part of the body
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  The part with more flexibility
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Stronger upper body
                </label>
              </fieldset>
              <fieldset>
                <legend>What is the thigh used for in the leg?</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Used to perform strenuous movements
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  In order to keep the balance
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  To kick hard
                </label>
              </fieldset>
              <fieldset>
                <legend>What is language?</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />A being that helps
                  us direct food
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />A red boned
                  organ=answer
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />A cartilage
                </label>
              </fieldset>
              <fieldset>
                <legend>Reading 3</legend>
                <p>
                  Food While eating at a restaurant is an enjoyable and
                  convenient occasional treat, most individuals and families
                  prepare their meals at home. To make breakfast, lunch, and
                  dinner daily, these persons must have the required foods and
                  ingredients on hand and ready to go; foods and ingredients are
                  typically purchased from a grocery store, or an establishment
                  that distributes foods, drinks, household products, and other
                  items that're used by the typical consumer. Produce, or the
                  term used to describe fresh fruits and vegetables, is commonly
                  purchased by grocery store shoppers. In terms of fruit, most
                  grocery stores offer bananas, apples, oranges, blackberries,
                  raspberries, grapes, pineapples, cantaloupes, watermelons, and
                  more; other grocery stores with larger produce selections
                  might offer the listed fruits in addition to less common
                  fruits, including mangoes, honeydews, starfruits, coconuts,
                  and more. Depending on the grocery store, customers can
                  purchase fruits in a few different ways. Some stores will
                  charge a set amount per pound of fruit, and will weigh
                  customers' fruit purchases and bill them accordingly; other
                  stores will charge customers for each piece of fruit they buy,
                  or for bundles of fruit (a bag of bananas, a bag of apples,
                  etc.); other stores yet will simply charge by the container.
                  Vegetables, including lettuce, corn, tomatoes, onions, celery,
                  cucumbers, mushrooms, and more are also sold at many grocery
                  stores, and are purchased similarly to the way that fruits
                  are. Grocery stores typically stock more vegetables than fruit
                  at any given time, as vegetables remain fresh longer than
                  fruits do, generally speaking. It'd take quite a while to list
                  everything else that today's massive grocery stores sell, but
                  most customers take the opportunity to shop for staples, or
                  foods that play a prominent role in the average diet, at the
                  establishments. Staples include pasta, rice, flour, sugar,
                  milk, meat, and eggs, and bread. All the listed staples are
                  available in prepackaged containers, but can be purchased
                  "fresh" in some grocery stores, wherein employees will measure
                  and weigh fresh products and then provide them to customers.
                </p>
              </fieldset>
              <fieldset>
                <legend>
                  Answer true or false according to the following statement: "it
                  is normal for grocery stores to have fixed prices for
                  groceries"
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  True
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  False
                </label>
              </fieldset>
              <fieldset>
                <legend>The text talks about</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Food in general unspecified
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Fruits and vegetables
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Vegetables
                </label>
              </fieldset>
              <fieldset>
                <legend>That is normally offered in a grocery store</legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Exotic vegetables
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Fruits in gerenal
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Specific fruits such as mangoes, honeydew, carambolas and
                  coconuts
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  In which of these foods such as meat are stored for sale to
                  the public
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  Warehouses
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  Supermarket stores
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="3" />
                  Containers
                </label>
              </fieldset>
              <fieldset>
                <legend>
                  Answer true or false according to the following
                  statement."Vegetables are stored more because they last longer
                  fresh
                </legend>
                <label className="block">
                  <input type="radio" name="p6" value="1" />
                  True
                </label>
                <label className="block">
                  <input type="radio" name="p6" value="2" />
                  False
                </label>
              </fieldset>
            </div>
            <div className="superp">
              <br />
              <legend>Speaking</legend>
              <br />
            </div>
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
                  Mencione tres cosas en inglés que son una obligación para
                  usted en un audio y envíelo aquí
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
                  Cree una historia en inglés con verbos modales y envié un
                  audio de su historia
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
                  Organice de manera correcta en un audio está oración
                  I/study/to get/must/good/grades
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
                  Cree una oración en inglés con temática de su agrado
                  utilizando los verbos en un audio
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
                  Diga 2 acciones en inglés conn verbos modales que puede
                  realizar el conejo
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
                  Responda en un audio en inglés a la siguiente pregunta ¿Cual
                  es el animal que siempre está en cuevas y utiliza una
                  habilidad única? Si sabes cuáles dimelo una pista tiene alas
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
                  Responda a esta adivinanza y esta pregunta con un audio:Es
                  un mamífero muy común y se encuentra en muchas de las granjas
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preguntas;
