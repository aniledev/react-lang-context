//  In order to use context this will need to be a class component.
// this component will render the text in different languages based on language controls

import React, { Component } from "react";
import languageSpecificCopy from "../languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  // attach context to class component; assign context to static property called contextType, gives us a new instance property this.context
  static contextType = LanguageContext;

  render() {
    // We're using an "or an empty object" logic when creating the copy constant with the syntax || {}
    // similar to default props but the data file is not a prop that we can use
    // if we attempt to use a key that doesn't exist, it would equate to undefined and this would throw errors all over our app
    const copy = languageSpecificCopy[this.context.lang] || {};
    return (
      <section className="GreatGrandChild">
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button onClick={() => this.context.setLang("klingon")}>
          Klingon!
          <span role="img" aria-label="klingon">
            🖖
          </span>
          +{" "}
        </button>
      </section>
    );
  }
}

export default GreatGrandChild;
