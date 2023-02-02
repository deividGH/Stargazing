import React from "react";

const Reading = ({ setValidacion4, setValidacion5 }) => {
  const v = () => {
    setValidacion5(true);
    setValidacion4(false);
    window.scrollTo(0, 0);
  };
  return (
    <div className="contenedor">
      <div className="header">
        <p>Reading</p>
      </div>
      <div className="contenedor2">
        <form className="formulario2">
          <div className="reading">
            <fieldset>
              <legend>Valentine's Day </legend>
              <p>
                Valentine's Day (or Valentine's Day) is a holiday that, in the
                United States, takes place on February 14 and technically
                represents the achievements of Saint Valentine, a third-century
                Roman saint. That said, most Americans, instead of honoring
                Valentine's Day through a religious ceremony, enjoy the holiday
                by engaging in "romantic" behavior with their partner or someone
                they wish to be their partner; Gifts, special dinners, and other
                acknowledgments of affection comprise most people's Valentine's
                Day celebrations. Chocolates and flowers are commonly given on
                Valentine's Day, as are the accompanying greeting cards
                (greeting card companies release new Valentine's Day designs
                annually). Red and pink are generally understood to be "the
                colors" of Valentine's Day, and many people, instead of
                celebrating romantically, spend the holiday with their friends
                and/or family. Variations of Valentine's Day are celebrated
                around the world throughout the year. In the United States, the
                holiday, although recognized by the vast majority of the
                population, is not recognized at the federal level; time off is
                not granted for Valentine's Day
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
                Based on this date, tell me an action that is frequently done on
                this date
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
                <input type="radio" name="p6" value="3" />A feeling of pleasure
              </label>
            </fieldset>
            <fieldset>
              <legend>Human body parts and organs </legend>
              <p>
                It goes without saying that humans (mammals identifiable as
                those that stand upright and are comparatively advanced and
                capable of detailed thought) have pretty remarkable bodies,
                given all that they've accomplished. (Furthermore, an especially
                intelligent human brain produced this text!) To be sure, humans
                have overcome predators, disease, and all sorts of other
                obstacles over thousands of years. To fully understand and
                appreciate these accomplishments, let's take at some of the most
                well-known parts of the human body! The head, or the spherical
                body part that contains the brain and rests at the top of the
                human body, has quite a few individual organs and body parts on
                it. (It should quickly be mentioned that hair occupies the space
                on top of the head, and the ears, the organs responsible for
                hearing, are located on either side of the head.) From top to
                bottom, the eyebrows, or horizontal strips of hair that can be
                found above the eye, are the first components of the head. The
                eyes are below them, and are round, orb-like organs that allow
                humans to see. The eyes make way for the nose, or an external
                (sticking-out) organ that plays an important part in the
                breathing and bacteria-elimination processes. Below that is the
                mouth, or a wide, cavernous organ that chews food, removes
                bacteria, helps with breathing, and more. The mouth contains
                teeth, or small, white-colored, pointed body parts used to chew
                food, and the tongue, or a red-colored, boneless organ used to
                chew food and speak. The neck is the long body part that
                connects the head to the chest (the muscular body part that
                protects the heart and lungs), and the stomach, or the part of
                the body that contains food and liquid-processing organs, comes
                below that. The legs are the long, muscular body parts that
                allow humans to move from one spot to another and perform a
                variety of actions. Each leg contains a thigh (a thick,
                especially muscular body part used to perform strenuous motions;
                the upper part of the leg) and a calf (thinner, more flexible
                body part that absorbs the shock associated with movement; the
                lower part of the leg). Feet can be found at the bottom of legs,
                and each foot is comprised of five toes, or small appendages
                that help balance. Arms are long, powerful body parts that are
                located on either side of chest, below the shoulders;arms are
                comprised of biceps (the thicker, more powerful upper portion),
                and forearms (the thinner, more flexible lower portion). Hands,
                or small, gripping body parts used for a tremendous number of
                actions, are at the end of arms. Each hand contains five
                fingers, or small appendages used to grip objects. The
                aforementioned shoulders are rounded body parts that aid arms'
                flexibility. One's back is found on the opposite side of the
                stomach, and is a flat section of the body that contains
                important muscles that're intended to protect the lungs and
                other internal organs, in addition to helping humans perform
                certain motions and actions.
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
                For the fact that it has overcome various diseases and predators
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
                <input type="radio" name="p6" value="1" />A being that helps us
                direct food
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
                Food While eating at a restaurant is an enjoyable and convenient
                occasional treat, most individuals and families prepare their
                meals at home. To make breakfast, lunch, and dinner daily, these
                persons must have the required foods and ingredients on hand and
                ready to go; foods and ingredients are typically purchased from
                a grocery store, or an establishment that distributes foods,
                drinks, household products, and other items that're used by the
                typical consumer. Produce, or the term used to describe fresh
                fruits and vegetables, is commonly purchased by grocery store
                shoppers. In terms of fruit, most grocery stores offer bananas,
                apples, oranges, blackberries, raspberries, grapes, pineapples,
                cantaloupes, watermelons, and more; other grocery stores with
                larger produce selections might offer the listed fruits in
                addition to less common fruits, including mangoes, honeydews,
                starfruits, coconuts, and more. Depending on the grocery store,
                customers can purchase fruits in a few different ways. Some
                stores will charge a set amount per pound of fruit, and will
                weigh customers' fruit purchases and bill them accordingly;
                other stores will charge customers for each piece of fruit they
                buy, or for bundles of fruit (a bag of bananas, a bag of apples,
                etc.); other stores yet will simply charge by the container.
                Vegetables, including lettuce, corn, tomatoes, onions, celery,
                cucumbers, mushrooms, and more are also sold at many grocery
                stores, and are purchased similarly to the way that fruits are.
                Grocery stores typically stock more vegetables than fruit at any
                given time, as vegetables remain fresh longer than fruits do,
                generally speaking. It'd take quite a while to list everything
                else that today's massive grocery stores sell, but most
                customers take the opportunity to shop for staples, or foods
                that play a prominent role in the average diet, at the
                establishments. Staples include pasta, rice, flour, sugar, milk,
                meat, and eggs, and bread. All the listed staples are available
                in prepackaged containers, but can be purchased "fresh" in some
                grocery stores, wherein employees will measure and weigh fresh
                products and then provide them to customers.
              </p>
            </fieldset>
            <fieldset>
              <legend>
                Answer true or false according to the following statement: "it
                is normal for grocery stores to have fixed prices for groceries"
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
                In which of these foods such as meat are stored for sale to the
                public
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
          <div className="siguiente">
            <input type="button" value="SEND" className="button2" onClick={v} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reading;
